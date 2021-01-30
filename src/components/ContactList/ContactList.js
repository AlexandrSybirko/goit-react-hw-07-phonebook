import { useSelector, useDispatch } from 'react-redux';
import contactsOperations from 'redux/operations';
import { getVisibleContacts } from 'redux/selectors';
import s from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(contactsOperations.deleteContact(id));
  
  return (
  <ul className="">
    {contacts.map(({ id, name, number }) => (
      <li
        className={s.li}
        key={id}>
        <span className={s.name}>{name}:</span>
        <span className={s.number}>{number}</span>
        <button
          className={s.button}
          type="button"
          onClick={() => onDeleteContact(id)}
        >
          Delete
        </button>
      </li>
    ))}
    </ul>
    );
}

  

