import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
  const data = await fs.writeFile(PATH_DB, JSON.stringify([], undefined, 2));
  return data;
};

removeAllContacts()
  .catch((error) => console.error(error));
