// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// axios.defaults.baseURL = `https://connections-api.goit.global`;

// // axios.defaults.baseURL = `https://connections-api.goit.global/`;
// // const API key = "f39aba3f-80d1-4221-a485-66f5fe7503fa";
// // axios.defaults.headers.common.Authorization = `Bearer ${token}`;

// export const fetchContacts = createAsyncThunk(
//   "contacts/fetchAll",
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get("/contacts");

//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
// export const addContact = createAsyncThunk(
//   "contacts/addContact",
//   async ({ name, number }, thunkAPI) => {
//     try {
//       const response = await axios.post(`/contacts/`, { name, number });

//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
// export const deleteContact = createAsyncThunk(
//   "contacts/deleteContact",
//   async (id, thunkAPI) => {
//     try {
//       await axios.delete(`/contacts/${id}`);
//       return id;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// // import { createAsyncThunk } from "@reduxjs/toolkit";
// // import axios from "axios";

// // axios.defaults.baseURL = "https://connections-api.goit.global";

// // export const fetchContacts = createAsyncThunk(
// //   "contacts/fetchContacts",
// //   async (_, thunkAPI) => {
// //     try {
// //       const responce = await axios.get("/contacts");
// //       return responce.data;
// //     } catch (error) {
// //       return thunkAPI.rejectWithValue(error.message);
// //     }
// //   }
// // );

// // export const addContact = createAsyncThunk(
// //   "contacts/addContacts",
// //   async (newContact, thunkAPI) => {
// //     try {
// //       const responce = await axios.post("/contacts", newContact);
// //       return responce.data;
// //     } catch (error) {
// //       return thunkAPI.rejectWithValue(error.message);
// //     }
// //   }
// // );

// // export const deleteContact = createAsyncThunk(
// //   "contacts/deleteContacts",
// //   async (id, thunkAPI) => {
// //     try {
// //       const responce = await axios.delete(`/contacts/${id}`);
// //       console.log(responce);
// //       return id;
// //     } catch (error) {
// //       return thunkAPI.rejectWithValue(error.message);
// //     }
// //   }
// // );

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, thunkAPI) => {
    try {
      const responce = await axios.get("/contacts");
      return responce.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (newContact, thunkAPI) => {
    try {
      const responce = await axios.post("/contacts", newContact);
      return responce.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContacts",
  async (id, thunkAPI) => {
    try {
      const responce = await axios.delete(`/contacts/${id}`);
      console.log(responce);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);