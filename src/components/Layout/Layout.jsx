// import AppBar from "../AppBar/AppBar";
// import css from "./Layout.module.css";

// export default function Layout({ children }) {
//   return (
//     <div className={css.container}>
//       <AppBar />
//       {children}
//     </div>
//   );
// }

import React from "react";
import AppBar from "../AppBar/AppBar";

const Layout = ({ children }) => {
  return (
    <div>
      <AppBar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
