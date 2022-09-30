import { changeFilter } from 'redux/filterSlice';
import { useDispatch } from 'react-redux';
import styles from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <label className={styles.filter}>
      <p className={styles.names}>Find contacts by name</p>
      <br />
      <input
        className={styles.input}
        type="text"
        name="name"
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </label>
  );
};

export default Filter;
