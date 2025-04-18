// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import PageTitle from "../../components/PageTitle/PageTitle";
// import ContactList from "../../components/ContactList/ContactList";
// import ContactForm from "../../components/ContactForm/ContactForm";
// import { fetchContacts } from "../../redux/contacts/operations";
// import { selectLoading } from "../../redux/contacts/selectors";

// // Припустимо, у тебе є селектор, який визначає, чи користувач залогінений
// import { selectIsLoggedIn } from "../../redux/auth/selectors";

// export default function ContactPage() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const isLoading = useSelector(selectLoading);
//   const isLoggedIn = useSelector(selectIsLoggedIn);

//   useEffect(() => {
//     if (!isLoggedIn) return;
//     dispatch(fetchContacts());
//   }, [dispatch, isLoggedIn]);

//   useEffect(() => {
//     if (isLoggedIn) {
//       navigate('/contacts'); // або '/home', якщо хочеш редирект на головну
//     }
//   }, [isLoggedIn, navigate]);

//   return (
//     <>
//       <PageTitle>Your contacts</PageTitle>
//       <ContactForm />
//       <div>{isLoading && "Request in progress..."}</div>
//       <ContactList />
//     </>
//   );
// }


// import React from "react";
// import ContactsList from "../../components/ContactList/ContactList";
// import ContactEditor from "../../components/ContactEditor/ContactEditor"

// const ContactsPage = () => {
//   return (
//     <div>
//        {/* <PageTitle>Your contacts</PageTitle> */}
//        <h2>Your contacts</h2>
//       <ContactEditor />
//       <div>{isLoading && "Request in progress..."}</div>
//       <ContactsList />
//     </div>
//   );
// };

// export default ContactsPage;


// import { useDispatch, useSelector } from "react-redux";
// import ContactEditor from "../../components/ContactEditor/ContactEditor";
// import ContactList from "../../components/ContactList/ContactList";
// import {
//   selectContact,
//   selectIsError,
//   selectIsLoading,
// } from "../../redux/contacts/selectors";
// import { useEffect } from "react";
// import { fetchContacts } from "../../redux/contacts/operations";

// export default function ContactPage() {
//   const dispatch = useDispatch();
//   const contacts = useSelector(selectContact);
//   const isLoading = useSelector(selectIsLoading);
//   const isError = useSelector(selectIsError);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <>
//       <h1>ContactPage</h1>
//       <ContactEditor />
//       {isLoading && <p>Loading...</p>}
//       {isError && <h1>Not Found</h1>}
//       {contacts.length > 0 ? <ContactList /> : <h1>Немає контактів</h1>}
//     </>
//   );
// }


import { useDispatch, useSelector } from "react-redux";
import ContactEditor from "../../components/ContactEditor/ContactEditor";
import ContactList from "../../components/ContactList/ContactList";
import {
  selectContact,
  selectIsError,
  selectIsLoading,
} from "../../redux/contacts/selectors";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";

export default function ContactPage() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContact);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>ContactPage</h1>
      <ContactEditor />
      {isLoading && <p>Loading...</p>}
      {isError && <h1>Not Found</h1>}
      {contacts.length > 0 ? <ContactList /> : <h1>Немає контактів</h1>}
    </>
  );
}