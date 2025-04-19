// import { useDispatch, useSelector } from 'react-redux';
// import { selectUser } from '../../redux/auth/selectors';
// import { logOut } from '../../redux/auth/operations';
// import css from './UserMenu.module.css';

// export default function UserMenu() {
//   const dispatch = useDispatch();
//   const user = useSelector(selectUser);

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
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handlLogOut = () => {
    dispatch(logOut());
  };

  // Якщо user ще не завантажився — нічого не показуємо або спінер
  if (!user) return null;

  return (
    <div className={css.el}>
      <p className={css.name}>Welcome, {user.name}</p>
      <button className={css.btn} type="button" onClick={handlLogOut}>
        Logout
      </button>
    </div>
  );
};
