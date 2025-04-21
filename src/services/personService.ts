import { getDbConnection } from '../config/database';
import { Person } from '../models/personModel';

export const getPersonDetailsService = async (): Promise<Person[]> => {
  const connection = await getDbConnection();
  
  try {
    const [rows] = await connection.execute('SELECT * FROM persons');
    return rows as Person[];
  } catch (error) {
    console.error('Database query error:', error);
    throw error;
  } finally {
    await connection.end();
  }
};
