// // import axios from 'axios';
// // import { createAsyncThunk } from '@reduxjs/toolkit';

// // axios.defaults.baseURL = 'https://connections-api.goit.global';

// // const setAuthHeader = (token) => {
// //   axios.defaults.headers.common.Authorization = token;
// // };

// // const clearAuthHeader = () => {
// //   delete axios.defaults.headers.common.Authorization;
// // };

// // export const register = createAsyncThunk(
// //   'auth/register',
// //   async (credentials, thunkAPI) => {
// //     try {
// //       const response = await axios.post('/users/signup', credentials);
// //       setAuthHeader(`Bearer ${response.data.token}`);
// //       return response.data;
// //     } catch (error) {
// //       return thunkAPI.rejectWithValue(error.message);
// //     }
// //   }
// // );

// // export const logIn = createAsyncThunk(
// //   'auth/login',
// //   async (credentials, thunkAPI) => {
// //     try {
// //       const response = await axios.post('/users/login', credentials);
// //       setAuthHeader(`Bearer ${response.data.token}`);
// //       return response.data;
// //     } catch (error) {
// //       return thunkAPI.rejectWithValue(error.message);
// //     }
// //   }
// // );

// // export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
// //   try {
// //     await axios.post('/users/logout');
// //     clearAuthHeader();
// //   } catch (error) {
// //     return thunkAPI.rejectWithValue(error.message);
// //   }
// // });




// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://connections-api.goit.global';

// // Додає токен до заголовків axios
// const setAuthHeader = (token) => {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

// // Видаляє токен із заголовків axios
// const clearAuthHeader = () => {
//   delete axios.defaults.headers.common.Authorization;
// };

// // Реєстрація нового користувача
// export const register = createAsyncThunk(
//   'auth/register',
//   async (credentials, thunkAPI) => {
//     try {
//       const response = await axios.post('/users/signup', credentials);
//       setAuthHeader(response.data.token);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// // Логін існуючого користувача
// export const logIn = createAsyncThunk(
//   'auth/login',
//   async (credentials, thunkAPI) => {
//     try {
//       const response = await axios.post('/users/login', credentials);
//       setAuthHeader(response.data.token);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// // Вихід з облікового запису
// export const logOut = createAsyncThunk(
//   'auth/logout',
//   async (_, thunkAPI) => {
//     try {
//       await axios.post('/users/logout');
//       clearAuthHeader();
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );


// // Оновлення даних користувача за збереженим токеном
// export const refreshUser = createAsyncThunk(
//     'auth/refresh',
//     async (_, thunkAPI) => {
//       const state = thunkAPI.getState();
//       const token = state.auth.token;
  
//       if (!token) {
//         return thunkAPI.rejectWithValue('No token available');
//       }
  
//       try {
//         setAuthHeader(token);
//         const response = await axios.get('/users/current');
//         return response.data;
//       } catch (error) {
//         return thunkAPI.rejectWithValue(error.message);
//       }
//     }
//   );


// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { getToken } from '../auth/selectors'; // Імпортуємо селектор для отримання токену

// axios.defaults.baseURL = 'https://connections-api.goit.global';

// const setAuthHeader = (token) => {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

// const clearAuthHeader = () => {
//   delete axios.defaults.headers.common.Authorization;
// };

// export const register = createAsyncThunk(
//   'auth/register',
//   async (credentials, thunkAPI) => {
//     try {
//       const response = await axios.post('/users/signup', credentials);
//       setAuthHeader(`Bearer ${response.data.token}`);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const logIn = createAsyncThunk(
//   'auth/login',
//   async (credentials, thunkAPI) => {
//     try {
//       const response = await axios.post('/users/login', credentials);
//       setAuthHeader(`Bearer ${response.data.token}`);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
//   try {
//     await axios.post('/users/logout');
//     clearAuthHeader();
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });

// // Оновлений екшн для додавання контакту
// export const addContact = createAsyncThunk(
//   'contacts/addContact',
//   async (contact, thunkAPI) => {
//     try {
//       // Отримуємо токен з Redux або локального сховища
//       const token = getToken(thunkAPI.getState());

//       if (token) {
//         setAuthHeader(token); // Додаємо токен до заголовків
//       } else {
//         throw new Error('No token available');
//       }

//       const response = await axios.post('/contacts', contact);
//       return response.data; // Повертаємо дані контакту для оновлення стану
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// // Оновлений екшн для видалення контакту
// export const deleteContact = createAsyncThunk(
//   'contacts/deleteContact',
//   async (contactId, thunkAPI) => {
//     try {
//       // Отримуємо токен з Redux або локального сховища
//       const token = getToken(thunkAPI.getState());

//       if (token) {
//         setAuthHeader(token); // Додаємо токен до заголовків
//       } else {
//         throw new Error('No token available');
//       }

//       const response = await axios.delete(`/contacts/${contactId}`);
//       return contactId; // Повертаємо id видаленого контакту для оновлення стану
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Встановлюємо базову URL-адресу
axios.defaults.baseURL = "https://connections-api.goit.global";

// Встановлення токена в заголовок
const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Очищення токена з заголовка
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

// Реєстрація нового користувача
export const register = createAsyncThunk(
  "auth/register",
  async (newUser, thunkAPI) => {
    try {
      const response = await axios.post("/users/signup", newUser);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Логін користувача
export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post("/users/login", credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Логаут користувача
export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/users/logout");
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// Оновлення користувача при перезавантаженні
export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    if (!token) {
      return thunkAPI.rejectWithValue("Unable to get user");
    }

    try {
      setAuthHeader(token);
      const response = await axios.get("/users/current");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
