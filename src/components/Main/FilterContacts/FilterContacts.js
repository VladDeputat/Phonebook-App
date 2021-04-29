import { useDispatch } from 'react-redux';
import { filterContacts } from '../../../redux/contacts/contactsActions';
import styles from './FilterContacts.module.scss';

export default function FilterContacts() {
  const dispatch = useDispatch();

  const onFilterChange = e => {
    dispatch(filterContacts(e.target.value));
  };

  return (
    <div className={styles.filterContainer}>
      <label>
        <p className={styles.subtitle}>Find contacts by name</p>
        <input
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          autoComplete="off"
          required
          onChange={onFilterChange}
        />
      </label>
    </div>
  );
}
