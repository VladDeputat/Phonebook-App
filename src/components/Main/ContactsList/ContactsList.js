import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styles from './ContactsList.module.scss';
import {
  getContacts,
  deleteContact,
} from '../../../redux/contacts/contactsOperations';
import { filtredContactsSelector } from '../../../redux/contacts/contactsSelectors';
import { useSelector } from 'react-redux';

export default function ContactsList() {
  const dispatch = useDispatch();
  const contacts = useSelector(filtredContactsSelector);

  useEffect(() => {
    if (!contacts.length) {
      dispatch(getContacts());
    }
  }, [dispatch, contacts.length]);

  const handleDelete = e => {
    dispatch(deleteContact(e.target.id));
  };

  return (
    <div className={styles.contactsBox}>
      <ul>
        {contacts.length > 0 &&
          contacts.map(contact => (
            <li className={styles.listItem} key={contact.id}>
              {contact.name}: {contact.number}
              <button
                type="button"
                className={styles.btn}
                onClick={handleDelete}
                id={contact.id}
              >
                Delete
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}
