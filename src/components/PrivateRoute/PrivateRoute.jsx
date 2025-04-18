// import { useSelector } from "react-redux";
// import { selectIsLoggedIn } from "../../redux/auth/selectors";
// import { Navigate } from "react-router";

// export default function PrivatRoute({
//   component: Component,
//   redirectTo = "/",
// }) {
//   const isLoggedIn = useSelector(selectIsLoggedIn);

//   return isLoggedIn ? Component : <Navigate to={redirectTo} />;
// }

// components/PrivatyRoute/PrivateRoute.jsx
// import { Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";

// export const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
//   const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
//   return isLoggedIn ? <Component /> : <Navigate to={redirectTo} />;
// };

import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router";

export default function PrivateRoute({ component, redirectTo }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? component : <Navigate to={redirectTo} />;
}

