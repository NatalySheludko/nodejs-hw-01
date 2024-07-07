import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeLastContact = async () => {
  const data = await fs.readFile(PATH_DB, { encoding: 'utf8' });
  const contacts = JSON.parse(data);

  if (contacts.length > 0) {
    contacts.pop();
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, undefined, 2));
  } else {
    console.log('No contacts to remove.');
  }
};

removeLastContact()
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
