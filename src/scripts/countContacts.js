import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const countContacts = async () => {
  const data = await fs.readFile(PATH_DB, { encoding: 'utf8' });
  const contacts = JSON.parse(data);
  return console.log(`Total contacts: ${contacts.length}`);
};

countContacts()
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
