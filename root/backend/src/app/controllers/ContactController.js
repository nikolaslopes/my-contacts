class ContactController {
	index(request, response) {
		// list all registers
		response.send("Contacts");
	}

	show() {
		// show a register
	}

	update() {
		// edit a register
	}

	delete() {
		// delete a register
	}
}

module.exports = new ContactController();
