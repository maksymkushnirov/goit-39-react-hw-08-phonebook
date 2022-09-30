import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

const ContactsPage = () => {
  return (
    <section>
      <h1>Phonebook</h1>
      <ContactForm />
      <Filter />
      <ContactList />
    </section>
  );
};

export default ContactsPage;
