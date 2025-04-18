// import { configureStore } from "@reduxjs/toolkit";

// import contactsReducer from "./contacts/slice";
// import filterReducer from "./filters/slice";

// import authReducer from './auth/slice';
// export const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//     filters: filterReducer,
//     auth: authReducer,
//   },
// });

import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // localStorage

import contactsReducer from "./contacts/slice";
import filterReducer from "./filters/slice";
import authReducer from "./auth/slice";

// Persist config for auth (only token)
const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filterReducer,
    auth: persistReducer(authPersistConfig, authReducer),
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
