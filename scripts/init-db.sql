CREATE DATABASE IF NOT EXISTS persondb;
USE persondb;

CREATE TABLE IF NOT EXISTS persons (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  address VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO persons (name, email, address, phone) VALUES
  ('John Doe', 'john.doe@example.com', '123 Main St, City, Country', '+1-555-123-4567'),
  ('Jane Smith', 'jane.smith@example.com', '456 Oak Ave, Town, Country', '+1-555-987-6543'),
  ('Bob Johnson', 'bob.johnson@example.com', '789 Pine Rd, Village, Country', '+1-555-456-7890');
