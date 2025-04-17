// import css from "./Contact.module.css";
// import { deleteContact } from "../../redux/contacts/operations";
// import { useDispatch } from "react-redux";

// const Contact = ({ contact }) => {
//   const dispatch = useDispatch();
//   const hendleDeleteContact = () => {
//     dispatch(deleteContact(contact.id));
//   };

//   return (
//     <div>
//       <p>{contact.name}</p>
//       <p>{contact.number}</p>
//       <button className={css.btn} type="button" onClick={hendleDeleteContact}>
//         Delete
//       </button>
//     </div>
//   );
// };

// export default Contact;

import { IoPerson, IoCallSharp } from "react-icons/io5";
import css from "./Contact.module.css";

export default function Contact({ contact, onDelete }) {
  return (
    <div className={css.cont}>
      <div>
        <p className={css.text}>
          <IoPerson /> {contact.name}
        </p>
        <p className={css.text}>
          <IoCallSharp />
          {contact.number}
        </p>
      </div>

      <button onClick={() => onDelete(contact.id)} className={css.btn}>
        Delete
      </button>
    </div>
  );
}