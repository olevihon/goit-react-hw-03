import css from './ContactList.module.css';
import Contact from '../Contact/Contact.jsx';

export default function ContactList({ contacts, onDelete }) {
  return (
    <>
      {contacts.length > 0 ? (
        <ul className={css.list}>
          {contacts.map(data => (
            <li className={css.listItem} key={data.id}>
              <Contact data={data} onDelete={onDelete} />
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.notFoundText}>Contact not found</p>
      )}
    </>
  );
}
