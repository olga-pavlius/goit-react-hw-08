// import PageTitle from "../../components/PageTitle/PageTitle";
// import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

// export default function RegisterPage() {
//   return (
//     <div>
//       <PageTitle>Register your account</PageTitle>
//       <RegistrationForm />
//     </div>
//   );
// }

// import React from "react";
// import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

// const RegistrationPage = () => {
//   return (
//     <div>
//       <h1>Registration</h1>
//       <RegistrationForm />
//     </div>
//   );
// };

// export default RegistrationPage;


// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { register } from "../../redux/auth/operations";
// import { useState } from "react";

// const RegistrationForm = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await dispatch(register(formData)).unwrap();
//       navigate("/contacts"); // ✅ Переадресація на сторінку контактів
//     } catch (error) {
//       console.error("Registration failed:", error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />
//       </label>
//       <label>
//         Email:
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//       </label>
//       <label>
//         Password:
//         <input
//           type="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//           required
//         />
//       </label>
//       <button type="submit">Register</button>
//     </form>
//   );
// };

// export default RegistrationForm;

import RegisterForm from "../../components/RegisterForm/RegisterForm";

export default function RegisterPage() {
  return (
    <>
      <h1>Registration</h1>
      <RegisterForm />
    </>
  );
}
