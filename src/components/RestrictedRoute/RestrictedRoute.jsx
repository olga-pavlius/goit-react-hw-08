// import { useSelector } from "react-redux";
// import { selectIsLoggedIn } from "../redux/auth/selectors";
// import { Navigate } from "react-router";

// export default function RegistrationRoute({
//   component: Component,
//   redirectTo = "/",
// }) {
//   const isLoggedIn = useSelector(selectIsLoggedIn);
//   return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
// }

// components/RestrictedRoute.jsx
// import { useSelector } from "react-redux";
// import { Navigate } from "react-router-dom";

// export default function RestrictedRoute  ({ component: Component, redirectTo = "/contacts" })  {
//   const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
//   return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
// };


import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router";

export default function RestrictedRoute({ component, redirectTo }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : component;
}

