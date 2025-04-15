import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";

// import css from "./AppBar.module.css";
// export default function AppBar() {
//   const isLoggedIn = useSelector(selectIsLoggedIn);
//   return (
//     <div className={css.appBar}>
//       {/* <UserMenu /> */}
//       <Navigation />
//       {isLoggedIn ? <UserMenu /> : <AuthNav />}
//     </div>
//   );
// }

import { AppBar as MuiAppBar, Toolbar, Container } from "@mui/material";

export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <MuiAppBar position="static">
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </Container>
    </MuiAppBar>
  );
}