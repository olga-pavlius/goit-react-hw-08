// // import { useId } from "react";
// // import { nanoid } from "nanoid";
// // import { Formik, Form, Field } from "formik";
// // import * as Yup from "yup";
// // import css from "./ContactForm.module.css";
// // import { ErrorMessage } from "formik";
// // import { addContact } from "../../redux/contacts/operations";
// // import { useDispatch } from "react-redux";

// // const ContactForm = () => {
// //   const dispatch = useDispatch();

// //   const nameId = useId();
// //   const numberId = useId();
// //   const initialValues = {
// //     name: "",
// //     number: "",
// //   };

// //   const contactSchema = Yup.object().shape({
// //     name: Yup.string()
// //       .min(3, "Too Short!")
// //       .max(50, "Too Long!")
// //       .required("Required!"),
// //     number: Yup.number().positive().integer().required("Required!"),
// //   });

// //   const handleSubmit = (values, actions) => {
// //     console.log(values);
// //     dispatch(addContact({ ...values, id: nanoid() }));
// //     actions.resetForm();
// //   };

// //   return (
// //     <Formik
// //       initialValues={initialValues}
// //       onSubmit={handleSubmit}
// //       validationSchema={contactSchema}
// //     >
// //       <Form className={css.form}>
// //         <div className={css.formdiv}>
// //           <label htmlFor={nameId} className={css.label}>
// //             Name
// //           </label>
// //           <Field type="text" name="name" id={nameId} className={css.input} />
// //           <ErrorMessage name="name" component="span" />
// //         </div>

// //         <div className={css.formdiv}>
// //           <label htmlFor={numberId} className={css.label}>
// //             Number
// //           </label>
// //           <Field
// //             type="number"
// //             name="number"
// //             className={css.input}
// //             id={numberId}
// //           />
// //           <ErrorMessage name="number" component="span" />
// //         </div>

// //         <button type="submit" className={css.button}>
// //           Add contact
// //         </button>
// //       </Form>
// //     </Formik>
// //   );
// // };

// // export default ContactForm;

// import { TextField, Button, Box, Typography, Paper } from "@mui/material";
// import { useDispatch, useSelector } from "react-redux";
// import { addContact } from "../../redux/contacts/operations";
// import * as Yup from "yup";
// import { ErrorMessage, Field, Form, Formik } from "formik";
// import { selectContacts } from "../../redux/contacts/selectors";
// import toast from "react-hot-toast";

// const initialValues = {
//   name: "",
//   number: "",
// };

// export default function ContactForm() {
//     console.log('hello')
//   const dispatch = useDispatch();
//   const form = useSelector(selectContacts);

//   const handleSubmit = async (values, actions) => {
//     try {
//       const result = await dispatch(addContact(values)).unwrap();
//       toast.success(`Contact ${result.name} added!`);
//       actions.resetForm();
//     } catch (error) {
//       toast.error(`Error ${error}`);
//     }
//   };

//   const validationSchema = Yup.object({
//     name: Yup.string()
//       .min(3, "Too Short!")
//       .max(50, "Too Long!")
//       .required("Required input field"),
//     number: Yup.string()
//       .matches(
//         /^[+\d]?[0-9\s\-()]{3,50}$/,
//         "Number must be between 3 and 50 digits"
//       )
//       .required("Required input field"),
//   });

//   return (
//     <Formik
//       enableReinitialize={true}
//       initialValues={initialValues}
//       onSubmit={handleSubmit}
//       validationSchema={validationSchema}
//     >
//       {({ errors, touched }) => (
//         <Form>
//           <Paper
//             elevation={3}
//             sx={{
//               p: 4,
//               borderRadius: "20px",
//               maxWidth: 500,
//               mx: "auto",
//               mt: 4,
//               backgroundColor: "#f9f9f9",
//               transition: "box-shadow 0.3s ease",
//               "&:hover": {
//                 boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
//               },
//             }}
//           >
//             <Typography variant="h5" align="center" gutterBottom>
//               Add New Contact
//             </Typography>

//             <Box mb={3}>
//               <Field
//                 as={TextField}
//                 id="name"
//                 name="name"
//                 label="Name"
//                 type="text"
//                 fullWidth
//                 variant="outlined"
//                 autoComplete="on"
//                 error={!!errors.name && touched.name}
//                 helperText={<ErrorMessage name="name" />}
//               />
//             </Box>

//             <Box mb={3}>
//               <Field
//                 as={TextField}
//                 id="number"
//                 name="number"
//                 label="Number"
//                 type="tel"
//                 fullWidth
//                 variant="outlined"
//                 autoComplete="on"
//                 error={!!errors.number && touched.number}
//                 helperText={<ErrorMessage name="number" />}
//               />
//             </Box>

//             <Button
//               type="submit"
//               variant="contained"
//               color="primary"
//               fullWidth
//               sx={{
//                 borderRadius: "30px",
//                 py: 1.5,
//                 fontWeight: 600,
//                 fontSize: "1rem",
//                 textTransform: "none",
//                 transition: "all 0.3s ease",
//                 boxShadow: "none",
//                 "&:hover": {
//                   boxShadow: "0 4px 12px rgba(25, 118, 210, 0.4)",
//                 },
//               }}
//             >
//               Add Contact
//             </Button>
//           </Paper>
//         </Form>
//       )}
//     </Formik>
//   );
// }