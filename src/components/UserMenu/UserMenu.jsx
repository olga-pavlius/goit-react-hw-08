// import { useDispatch, useSelector } from 'react-redux';
// import { selectUser } from '../../redux/auth/selectors';
// import { logOut } from '../../redux/auth/operations';
// import css from './UserMenu.module.css';

// export default function UserMenu() {
//   const dispatch = useDispatch();
//   const user = useSelector(selectUser);
//   console.log(user);

//   const handleLogout = () => {
//     dispatch(logOut());
//   };

//   return (
//     <div className={css.wrapper}>
//       <p className={css.username}>Welcome, {user.name}</p>
//       <button type="button" onClick={handleLogout}>
//         Logout
//       </button>
//     </div>
//   );
// }
// import { useDispatch, useSelector } from "react-redux";
// import { selectUser } from "../../redux/auth/selectors";
// import { logOut } from "../../redux/auth/operations";
// import css from "./UserMenu.module.css";

// export const UserMenu = () => {
//   const dispatch = useDispatch();
//   const user = useSelector(selectUser);

//   const handlLogOut = () => {
//     dispatch(logOut());
//   };

//   // Якщо user ще не завантажився — нічого не показуємо або спінер
//   if (!user) return null;

//   return (
//     <div className={css.el}>
//       <p className={css.name}>Welcome, {user.name}</p>
//       <button className={css.btn} type="button" onClick={handlLogOut}>
//         Logout
//       </button>
//     </div>
//   );
// };

// import { createSlice } from "@reduxjs/toolkit";
// import { register, logIn, logOut, refreshUser } from "../../redux/auth/operations";

// const initialState = {
//   user: {
//     name: null,
//     email: null,
//   },
//   token: null,
//   isLoggedIn: false,
//   isRefreshing: false,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(register.fulfilled, (state, action) => {
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//         state.isLoggedIn = true;
//       })
//       .addCase(logIn.fulfilled, (state, action) => {
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//         state.isLoggedIn = true;
//       })
//       .addCase(logOut.fulfilled, (state) => {
//         state.user = { name: null, email: null };
//         state.token = null;
//         state.isLoggedIn = false;
//       })

//       .addCase(refreshUser.pending, (state) => {
//         state.isRefreshing = true;
//       })
//       .addCase(refreshUser.fulfilled, (state, action) => {
//         state.user = action.payload; // <- тут оновлено
//         state.isLoggedIn = true;
//         state.isRefreshing = false;
//       })
//       .addCase(refreshUser.rejected, (state) => {
//         state.isRefreshing = false;
//         state.isLoggedIn = false;
//         state.token = null;
//       });
//   },
// });

// export default authSlice.reducer;

import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import css from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <button type="button" onClick={handleLogOut}>
        Logout
      </button>
    </div>
  );
}
