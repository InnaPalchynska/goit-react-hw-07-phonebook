import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3004';

async function fetchContacts() {
  const { data } = await axios.get('/contacts');
  return data;
}

async function fetchAddContacts(contact) {
  const { data } = await axios.post('/contacts', contact);
  return data;
}

async function fetchDeleteContacts(contactId) {
  const { data } = await axios.delete(`/contacts/${contactId}`);
  return data;
}

export default { fetchContacts, fetchAddContacts, fetchDeleteContacts };
