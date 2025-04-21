import mysql from 'mysql2/promise';
import { getSecretValue } from '../utils/secretManager';

interface DbCredentials {
  host: string;
  user: string;
  password: string;
  database: string;
  port: number;
}

let cachedConnection: mysql.Connection | null = null;

export const getDbConnection = async (): Promise<mysql.Connection> => {
  if (cachedConnection) {
    return cachedConnection;
  }

  try {
    const secretName = process.env.DB_SECRET_NAME || 'rds/mysql/credentials';
    const secretValue = await getSecretValue(secretName);
    
    if (!secretValue) {
      throw new Error('Failed to retrieve database credentials from Secrets Manager');
    }

    const credentials: DbCredentials = JSON.parse(secretValue);
    
    const connection = await mysql.createConnection({
      host: credentials.host,
      user: credentials.user,
      password: credentials.password,
      database: credentials.database,
      port: credentials.port,
    });

    cachedConnection = connection;
    return connection;
  } catch (error) {
    console.error('Error connecting to database:', error);
    throw error;
  }
};
