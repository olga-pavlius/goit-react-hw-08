// // import { useDispatch } from 'react-redux';
// // import { Formik, Form, Field } from 'formik';
// // import { register } from '../../redux/auth/operations';
// // import css from './RegistrationForm.module.css';

// // export default function RegistrationForm() {
// //   const dispatch = useDispatch();

// //   const handleSubmit = (values, actions) => {
// //     dispatch(register(values));
// //     actions.resetForm();
// //   };

// //   return (
// //     <Formik
// //       initialValues={{
// //         name: '',
// //         email: '',
// //         password: '',
// //       }}
// //       onSubmit={handleSubmit}
// //     >
// //       <Form className={css.form} autoComplete="off">
// //         <label className={css.label}>
// //           Username
// //           <Field type="text" name="name" />
// //         </label>
// //         <label className={css.label}>
// //           Email
// //           <Field type="email" name="email" />
// //         </label>
// //         <label className={css.label}>
// //           Password
// //           <Field type="password" name="password" />
// //         </label>
// //         <button type="submit">Register</button>
// //       </Form>
// //     </Formik>
// //   );
// // }

// import { Formik, Field, Form } from "formik";
// import { useDispatch } from "react-redux";
// import { register } from "../../redux/auth/operations";

// const RegistrationForm = () => {
//   const dispatch = useDispatch();

//   return (
//     <Formik
//       initialValues={{ name: "", email: "", password: "" }}
//       onSubmit={(values) => {
//         dispatch(register(values));
//       }}
//     >
//       <Form>
//         <Field name="name" placeholder="Name" />
//         <Field name="email" placeholder="Email" type="email" />
//         <Field name="password" placeholder="Password" type="password" />
//         <button type="submit">Register</button>
//       </Form>
//     </Formik>
//   );
// };

// export default RegistrationForm;

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { toast } from "react-hot-toast";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Ім’я має містити щонайменше 2 символи")
    .required("Ім’я обов’язкове"),
  email: Yup.string()
    .email("Некоректний email")
    .required("Email обов’язковий"),
  password: Yup.string()
    .min(6, "Пароль має містити щонайменше 6 символів")
    .required("Пароль обов’язковий"),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        dispatch(register(values))
          .unwrap()
          .then(() => {
            toast.success("Успішна реєстрація!");
            resetForm();
          })
          .catch((error) => {
            toast.error("Помилка реєстрації. Email вже використовується.");
            console.error("Registration error:", error);
          });
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <label>
            Name
            <Field name="name" placeholder="Name" />
            <ErrorMessage name="name" component="div" style={{ color: "red" }} />
          </label>

          <label>
            Email
            <Field name="email" type="email" placeholder="Email" />
            <ErrorMessage name="email" component="div" style={{ color: "red" }} />
          </label>

          <label>
            Password
            <Field name="password" type="password" placeholder="Password" />
            <ErrorMessage name="password" component="div" style={{ color: "red" }} />
          </label>

          <button type="submit" disabled={isSubmitting}>
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;

