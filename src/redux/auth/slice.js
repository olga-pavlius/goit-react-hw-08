// // import { createSlice } from "@reduxjs/toolkit";
// // import { register, logIn, logOut } from "./operations";

// // const slice = createSlice({
// //   name: "auth",
// //   initialState: {
// //     user: {
// //       name: null,
// //       email: null,
// //     },
// //     token: null,
// //     isLoggedIn: false,
// //     isRefreshing: false,
// //   },
// //   extraReducers: (builder) => {
// //     builder
// //       .addCase(register.fulfilled, (state, action) => {
// //         state.user = action.payload.user;
// //         state.token = action.payload.token;
// //         state.isLoggedIn = true;
// //       })
// //       .addCase(logIn.fulfilled, (state, action) => {
// //         state.user = action.payload.user;
// //         state.token = action.payload.token;
// //         state.isLoggedIn = true;
// //       })
// //       .addCase(logOut.fulfilled, (state, action) => {
// //         state.user = { name: null, email: null };
// //         state.token = null;
// //         state.isLoggedIn = false;
// //       });
// //   },
// // });
// // export default slice.reducer;

// import { createSlice } from "@reduxjs/toolkit";
// import { register, logIn, logOut, refreshUser } from "./operations";

// const handlePending = (state) => {
//   state.loading = true;
//   state.error = null;
// };

// const handleFulfilled = (state, action) => {
//   state.user = action.payload.user;
//   state.token = action.payload.token;
//   state.isLoggedIn = true;
//   state.loading = false;
// };

// const handleRejected = (state, action) => {
//   state.loading = false;
//   state.error = action.payload;
// };

// const authSlise = createSlice({
//   name: "auth",
//   initialState: {
//     user: {
//       name: null,
//       email: null,
//     },
//     token: null,
//     isLoggedIn: false,
//     isRefreshing: false,
//     loading: false,
//     error: null,
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(register.pending, handlePending)
//       .addCase(register.fulfilled, handleFulfilled)
//       .addCase(register.rejected, handleRejected)
//       .addCase(logIn.pending, handlePending)
//       .addCase(logIn.fulfilled, handleFulfilled)
//       .addCase(logIn.rejected, handleRejected)
//       .addCase(logOut.pending, handlePending)
//       .addCase(logOut.fulfilled, (state) => {
//         state.user = { name: null, email: null };
//         state.token = null;
//         state.isLoggedIn = false;
//         state.loading = false;
//       })
//       .addCase(logOut.rejected, handleRejected)
//       .addCase(refreshUser.pending, (state) => {
//         state.isRefreshing = true;
//         state.error = null;
//       })
//       .addCase(refreshUser.fulfilled, (state, action) => {
//         state.user = action.payload;
//         state.isLoggedIn = true;
//         state.isRefreshing = false;
//       })
//       .addCase(refreshUser.rejected, (state, action) => {
//         state.isRefreshing = false;
//         state.error = action.payload;
//       });
//   },
// });

// export const authReducer = authSlise.reducer;



// import { createSlice } from "@reduxjs/toolkit";
// import { register, logIn, logOut, refreshUser } from "./operations";

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
//       .addCase(refreshUser.fulfilled, (state, action) => {
//         state.user = action.payload.user;
//         state.isLoggedIn = true;
//       })
//       .addCase(refreshUser.rejected, (state) => {
//         state.isLoggedIn = false;
//       });
//   },
// });

// export default authSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut, refreshUser } from "./operations";

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })

      // 🟡 Додаємо статус оновлення
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.isRefreshing = false;

        // Якщо бекенд повертає новий токен
        if (action.payload.token) {
          state.token = action.payload.token;
        }
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
        state.isLoggedIn = false;
        state.token = null;
      });
  },
});

export default authSlice.reducer;
