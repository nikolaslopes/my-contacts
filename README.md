# MyContacts API

## Description

The MyContacts API is a application to manage contacts built in Node.js, JavaScript & PostgreSQL.

## Stacks

![Static Badge](https://img.shields.io/badge/JavaScript-20232A?style=for-the-badge&logo=JavaScript&logoColor=**white**)
![Static Badge](https://img.shields.io/badge/Express.js-20232A?style=for-the-badge)
![Static Badge](https://img.shields.io/badge/Node.js-20232A?style=for-the-badge&logo=node.js&logoColor=green)
![Static Badge](https://img.shields.io/badge/docker-%2320232A.svg?style=for-the-badge&logo=docker&logoColor=**blue**)
![Static Badge](https://img.shields.io/badge/PostgreSQL-20232A?style=for-the-badge&logo=postgresql&logoColor=**blue**)


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

[![Static Badge](https://img.shields.io/badge/nikolas%20lopes-c1c1c1?style=for-the-badge&logo=linkedin&label=linkedin&labelColor=2371B7)](https://www.linkedin.com/in/nikolaslopes/)

[![Static Badge](https://img.shields.io/badge/nikolaslopes-c1c1c1?style=for-the-badge&logo=github&label=github&labelColor=%23222)](https://github.com/nikolaslopes)
