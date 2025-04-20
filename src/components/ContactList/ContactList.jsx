import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { selectVisibleContacts } from "../../redux/filters/selectors";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const formatPhoneNumber = (phone) => {
  return phone.replace(/\sx\d+$/, "");
};

export default function ContactList() {
  const dispatch = useDispatch();

  const visibleContacts = useSelector(selectVisibleContacts);

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css.list}>
      {visibleContacts.map((contact) => (
        <li key={contact.id} className={css.item}>
          <Contact
            contact={{ ...contact, number: formatPhoneNumber(contact.number) }}
            onDelete={handleDelete}
          />
        </li>
      ))}
    </ul>
  );
}