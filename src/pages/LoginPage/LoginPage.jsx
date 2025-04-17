// import LoginForm from "../../components/LoginForm/LoginForm";
// import PageTitle from "../../components/PageTitle/PageTitle";

// export default function LoginPage() {
//   return (
//     <div>
//       <PageTitle>Please log in</PageTitle>
//       <LoginForm />
//     </div>
//   );
// }

import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";

const LoginPage = () => {
  return (
    <div>
      <h1>Login</h1>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
