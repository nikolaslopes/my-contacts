const { v4: uuidv4 } = require('uuid');

let contacts = [
	{
		id: uuidv4(),
		name: 'Nick',
		email: 'nick@email.com',
		phone: '111111111',
		category_id: uuidv4(),
	},
	{
		id: uuidv4(),
		name: 'Kiki',
		email: 'kiki@email.com',
		phone: '2222222',
		category_id: uuidv4(),
	},
];

class ContactsRepository {
	findAll() {
		return new Promise((resolve) => {
			resolve(contacts);
		});
	}

	findById(id) {
		return new Promise((resolve) => {
			resolve(contacts.find((contact) => contact.id === id));
		});
	}

	findByEmail(email) {
		return new Promise((resolve) => {
			resolve(contacts.find((contact) => contact.email === email));
		});
	}

	create({ name, email, phone, category_id }) {
		return new Promise((resolve) => {
			const newContact = {
				id: uuidv4(),
				name,
				email,
				phone,
				category_id,
			};

			contacts.push(newContact);

			resolve(newContact);
		});
	}

	update(id, { name, email, phone, category_id }) {
		return new Promise((resolve) => {
			const updatedContact = {
				id,
				name,
				email,
				phone,
				category_id,
			};

			contacts = contacts.map((contact) =>
				contact.id === id ? updatedContact : contact,
			);

			resolve(updatedContact);
		});
	}

	delete(id) {
		return new Promise((resolve) => {
			contacts = contacts.filter((contact) => contact.id !== id);
			resolve();
		});
	}
}

module.exports = new ContactsRepository();
