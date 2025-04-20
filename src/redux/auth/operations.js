// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const setAuthHeader = (value) => {
//   axios.defaults.headers.common.Authorization = value;
// };

// export const register = createAsyncThunk(
//   "auth/register",
//   async (credential, thunkAPI) => {
//     try {
//       const responce = await axios.post("/users/signup", credential);
//       setAuthHeader(`Bearer ${responce.data.token}`);

//       return responce.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// // export const register = createAsyncThunk("auth/register", async (credentials, thunkAPI) => {
// //   try {
// //     const res = await axios.post("/users/signup", credentials);
// //     console.log("REGISTER RESPONSE:", res.data); // <== сюди подивись
// //     return res.data;
// //   } catch (error) {
// //     console.error("REGISTER ERROR:", error); // <== важливо
// //     return thunkAPI.rejectWithValue(error.message);
// //   }
// // });

// // export const register = createAsyncThunk("auth/register", async (credentials, thunkAPI) => {
// //   try {
// //     const res = await axios.post("/users/signup", credentials);
// //     console.log("REGISTER RESPONSE:", res.data); // Перевірка відповіді сервера
// //     return res.data;
// //   } catch (error) {
// //     console.error("REGISTER ERROR:", error); // Логування помилок
// //     return thunkAPI.rejectWithValue(error.message);
// //   }
// // });



// export const logIn = createAsyncThunk(
//   "auth/login",
//   async (credential, thunkAPI) => {
//     try {
//       const responce = await axios.post("/users/login", credential);

//       setAuthHeader(`Bearer ${responce.data.token}`);

//       return responce.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const logOut = createAsyncThunk("auth/logout", async () => {
//   await axios.post("/users/logout");
//   setAuthHeader("");
// });

// export const refreshUser = createAsyncThunk(
//   "auth/refresh",
//   async (_, thunkAPI) => {
//     try {
//       const reduxState = thunkAPI.getState();
//       setAuthHeader(`Bearer ${reduxState.auth.token}`);

//       const responce = await axios.get("/users/current");
//       return responce.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   },
//   {
//     condition: (_, thunkAPI) => {
//       const reduxState = thunkAPI.getState();
//       return reduxState.auth.token !== null;
//     },
//   }
// );

import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const setAuthHeader = (value) => {
  axios.defaults.headers.common.Authorization = value;
};

const clearAuthHeader = () => {
  delete axios.defaults.headers.common.Authorization;
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post("/users/signup", credentials);
      setAuthHeader(`Bearer ${response.data.token}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post("/users/login", credentials);
      setAuthHeader(`Bearer ${response.data.token}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/users/logout");
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    try {
      const reduxState = thunkAPI.getState();
      setAuthHeader(`Bearer ${reduxState.auth.token}`);
      const response = await axios.get("/users/current");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, thunkAPI) => {
      const reduxState = thunkAPI.getState();
      return reduxState.auth.token !== null;
    },
  }
);