import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

export const App = () => {
  return (
    <div className="container">
      <h2 className="container-name">Phonebook</h2>
      <ContactForm />
      <div>
        <h2 className="container-name">Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
};