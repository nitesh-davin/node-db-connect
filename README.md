# Node DB Connect

A Node.js TypeScript service that connects to AWS RDS MySQL database using credentials stored in AWS Secrets Manager.

## Features

- REST API endpoint to retrieve person details
- AWS Secrets Manager integration for secure database credentials
- Connection to AWS RDS MySQL database
- TypeScript implementation for type safety

## Setup

### Prerequisites

- Node.js (v14 or higher)
- AWS account with appropriate permissions
- AWS RDS MySQL instance
- AWS Secrets Manager configured with database credentials

### Installation

1. Clone the repository:
```bash
git clone https://github.com/nitesh-davin/node-db-connect.git
cd node-db-connect
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file based on the `.env.example` template:
```bash
cp .env.example .env
```

4. Update the `.env` file with your AWS region and secret name.

### Database Setup

The `scripts/init-db.sql` file contains SQL statements to create the database schema and insert sample data.

### AWS Secrets Manager Setup

Create a secret in AWS Secrets Manager with the following JSON structure:

```json
{
  "host": "your-rds-endpoint.region.rds.amazonaws.com",
  "user": "your-db-username",
  "password": "your-db-password",
  "database": "persondb",
  "port": 3306
}
```

## Running the Application

### Development

```bash
npm run dev
```

### Production

```bash
npm run build
npm start
```

## API Endpoints

### Get Person Details

```
GET /api/person
```

Response:
```json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john.doe@example.com",
    "address": "123 Main St, City, Country",
    "phone": "+1-555-123-4567"
  },
  ...
]
```

## License

ISC
