import "./App.css";
import HomePage from "../../pages/HomePage/HomePage";
import AppBar from "../AppBar/AppBar";
import RegisterPage from "../../pages/RegistrationPage/RegistrationPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import ContactPage from "../../pages/ContactsPage/ContactsPage";
import { useDispatch, useSelector } from "react-redux";
import { Suspense, useEffect } from "react";
import { refreshUser } from "../../redux/auth/operations";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import RestrictedRoute from "../RestrictedRoute/RestrictedRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

// ✅ Додаємо імпорт Routes та Route
import { Routes, Route } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const isRefresh = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefresh ? (
    <strong>Getting user data please wait...</strong>
  ) : (
    <Suspense fallback={null}>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/login"
          element={
            <RestrictedRoute component={<LoginPage />} redirectTo="/contacts" />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute component={<ContactPage />} redirectTo="/login" />
          }
        />
      </Routes>
    </Suspense>
  );
}

export default App;
