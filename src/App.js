import './App.css';
import ContactForm from './components/contactForm/ContactForm';
import ContactList from './components/contactList/ContactList';
import Filter from './components/filter/Filter';

export default function App() {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
}
