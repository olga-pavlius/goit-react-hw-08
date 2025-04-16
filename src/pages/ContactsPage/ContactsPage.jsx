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


import React from "react";
import ContactsList from "../../components/ContactList/ContactList";

const ContactsPage = () => {
  return (
    <div>
      <h1>Your Contacts</h1>
      <ContactsList />
    </div>
  );
};

export default ContactsPage;
