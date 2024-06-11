# MyContacts API

## Description

The MyContacts API is a application to manage contacts built in Node.js, JavaScript & PostgreSQL.

## Stacks

<a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=js,docker,nodejs,express,postgres&theme=dark" />
</a>

## Features

- **Create Contact**: Add new contacts to the database.
- **List Contacts**: List all available contacts.
- **Update Contact**: Update information of existing contacts.
- **Delete Contact**: Remove contacts from the database.

## Prerequisites

- [Node.js](https://nodejs.org/en/download/) (version 18 or higher)
- [Docker](https://www.docker.com/get-started)
- [PostgreSQL](https://www.postgresql.org/download/)

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/nikolaslopes/my-contacts-api.git
   cd my-contacts-api
   ```

2. Use the correct Node.js version:

   ```sh
   nvm use
   ```

3. Install the dependencies:

   ```sh
   npm install
   ```

4. Configure the PostgreSQL database:

   - Ensure your PostgreSQL server is running and accessible.
   - Your database connection configuration should look like this in your project:

   ```js
   const { Client } = require("pg");

   const client = new Client({
     host: "localhost",
     port: 5432,
     user: "root",
     password: "root",
     database: "mycontacts",
   });

   client.connect();

   exports.query = async (query, values) => {
     const { rows } = await client.query(query, values);
     return rows;
   };
   ```

5. Configure and start the PostgreSQL database using Docker:

- Make sure you have Docker installed on your system.

- Run the following command to set up and start the PostgreSQL database:

```sh
npm run setup-db
```

## Usage

1. Start the server:

```sh
npm run dev
```

2. The API will be available at `http://localhost:3001`.

## Endpoints

### Contact Routes

- **GET** `/contacts` - List all contacts.
- **GET** `/contacts/:id` - Get a contact by ID.
- **POST** `/contacts` - Create a new contact.
- **PUT** `/contacts/:id` - Update a contact by ID.
- **DELETE** `/contacts/:id` - Delete a contact by ID.

### Category Routes

- **GET** `/categories` - List all categories.
- **POST** `/categories` - Create a new category.
- **PUT** `/categories/:id` - Update a category by ID.
- **DELETE** `/categories/:id` - Delete a category by ID.

## Example Request

### Create a Contact

```sh
curl -X POST http://localhost:3001/contacts \
-H "Content-Type: application/json" \
-d '{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "phone": "123-456-7890",
}'
```

## Author

<a href="https://github.com/nikolaslopes">
  <img alt="Static Badge" src="https://img.shields.io/badge/linkedin-%2371B7FB?style=for-the-badge&logo=linkedin&color=blue">
</a>

<a href="https://github.com/nikolaslopes">
  <img alt="Static Badge" src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white">
</a>
