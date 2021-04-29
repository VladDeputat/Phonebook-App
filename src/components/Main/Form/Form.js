import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../../redux/contacts/contactsOperations';
import { contactsSelector } from '../../../redux/contacts/contactsSelectors';
import styles from './Form.module.scss';

export default function Form() {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelector);

  const [name, setName] = useState('');
  const onUpdateName = e => {
    setName(e.target.value);
  };

  const [number, setNumber] = useState('');
  const onUpdateNumber = e => {
    setNumber(e.target.value);
  };

  const onHandleSubmit = e => {
    e.preventDefault();
    if (contacts.items.find(item => item.name === name)) {
      alert(`${name} is already in contacts.`);
    } else {
      dispatch(addContact({ name, number }));
      setName('');
      setNumber('');
    }
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={onHandleSubmit} className={styles.form}>
        <label>
          <p className={styles.subtitle}>Name</p>
          <input
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            autoComplete="off"
            required
            onChange={onUpdateName}
          />
        </label>
        <label>
          <p className={styles.subtitle}>Number</p>
          <input
            type="tel"
            name="number"
            value={number}
            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
            required
            autoComplete="off"
            onChange={onUpdateNumber}
          />
        </label>
        <button type="submit" className={styles.btn}>
          Add contact
        </button>
      </form>
    </div>
  );
}
