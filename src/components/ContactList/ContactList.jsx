// import Contact from "../Contact/Contact";
// import css from "./ContactList.module.css";
// import { useSelector } from "react-redux";
// import { selectFilteredContacts } from "../../redux/contacts/selectors"; 

// const ContactList = () => {
//   const visibleContacts = useSelector(selectFilteredContacts); 

//   return (
//     <div>
//       <ul className={css.list}>
//         {visibleContacts.map((contact) => (
//           <li key={contact.id} className={css.item}>
//             <Contact contact={contact} />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ContactList;


// import { useEffect } from "react";
// import Contact from "../Contact/Contact";
// import css from "./ContactList.module.css";
// import { useSelector, useDispatch } from "react-redux";
// import { selectFilteredContacts } from "../../redux/contacts/selectors";
// import { deleteContact } from "../../redux/contacts/operations"; // Операція для видалення

// const ContactList = () => {
//   const dispatch = useDispatch();
//   const visibleContacts = useSelector(selectFilteredContacts); 

//   // Викликаємо ефект для ініціалізації запиту контактів при першому рендері
//   useEffect(() => {
//     // Можна додати запит для отримання контактів, якщо вони ще не завантажені
//     // dispatch(fetchContacts());
//   }, [dispatch]);

//   const handleDelete = (id) => {
//     // Викликаємо операцію для видалення контакту
//     dispatch(deleteContact(id));
//   };

//   if (!visibleContacts.length) {
//     return <p>No contacts available</p>;
//   }

//   return (
//     <div>
//       <ul className={css.list}>
//         {visibleContacts.map((contact) => (
//           <li key={contact.id} className={css.item}>
//             <Contact contact={contact} onDelete={() => handleDelete(contact.id)} />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ContactList;



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