import css from './Contact.module.css';

import ContactInfo from '../ContactInfo/ContactInfo.jsx';

export default function Contact({ data: { id, name, number }, onDelete }) {
  return (
    <div className={css.container}>
      <div className={css.info}>
        <ContactInfo type="name" text={name} />
        <ContactInfo type="number" text={number} />
      </div>
      <button className={css.deleteBtn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
