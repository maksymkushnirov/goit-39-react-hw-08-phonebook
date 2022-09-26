import PropTypes from 'prop-types';
import styles from './ContactList.module.css';
import { useSelector } from 'react-redux';
import {
  useDeleteContactMutation,
  useFetchContactsQuery,
} from 'redux/apiSlice';

const ContactList = () => {
  const { data = [] } = useFetchContactsQuery();
  const [deleteContact] = useDeleteContactMutation();
  const { filter } = useSelector(state => state.filter);

  const getFilterContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return data.filter(contacts =>
      contacts.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <div className={styles.contactItem}>
      {getFilterContacts().map(({ id, phone, name }) => {
        return (
          <li key={id}>
            {name}: {phone}
            <button className={styles.button} onClick={() => deleteContact(id)}>
              Delete
            </button>
          </li>
        );
      })}
    </div>
  );
};

ContactList.propTypes = {
  filterContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;