// import { createSlice } from '@reduxjs/toolkit';
// import { fetchContacts, addContact, deleteContact } from './operations';

// const initialState = {
//   items: [],
//   loading: false,
//   error: false,
// };

// const slice = createSlice({
//   name: 'contacts',
//   initialState,
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchContacts.pending, (state) => {
//         state.loading = true;
//         state.error = false;
//       })
//       .addCase(fetchContacts.fulfilled, (state, action) => {
//         state.loading = false;
//         state.items = action.payload;
//       })
//       .addCase(fetchContacts.rejected, (state) => {
//         state.loading = false;
//         state.error = true;
//       })
//       .addCase(addContact.pending, (state) => {
//         state.loading = true;
//         state.error = false;
//       })
//       .addCase(addContact.fulfilled, (state, action) => {
//         state.loading = false;
//         state.items.push(action.payload);
//       })
//       .addCase(addContact.rejected, (state) => {
//         state.loading = false;
//         state.error = true;
//       })
//       .addCase(deleteContact.fulfilled, (state, action) => {
//         state.loading = false;
//         state.items = state.items.filter(
//           (item) => item.id !== action.payload.id
//         );
//       });
//   },
// });


// export const selectContacts = (state) => state.contacts.items;

// export const selectLoading = (state) => state.contacts.loading;

// export const selectError = (state) => state.contacts.error;


// export const selectFilteredContacts = (state) => {
//   const filter = state.filters.name.toLowerCase();
//   return state.contacts.items.filter((contact) =>
//     contact.name.toLowerCase().includes(filter)
//   );
// };

// export default slice.reducer;

// import { createSlice } from "@reduxjs/toolkit";
// import { fetchContacts, addContact, deleteContact } from "./operations";
// import { logOut } from "../auth/operations";

// const contactsSlice = createSlice({
//   name: "contacts",
//   initialState: {
//     items: [],
//     loading: false,
//     error: null,
//   },

//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchContacts.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(fetchContacts.fulfilled, (state, action) => {
//         state.loading = false;
//         state.items = action.payload;
//       })
//       .addCase(fetchContacts.rejected, (state) => {
//         state.loading = false;
//         state.error = true;
//       })

//       .addCase(addContact.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(addContact.fulfilled, (state, action) => {
//         state.loading = false;
//         state.items.push(action.payload);
//       })
//       .addCase(addContact.rejected, (state) => {
//         state.loading = false;
//         state.error = true;
//       })
//       .addCase(deleteContact.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(deleteContact.fulfilled, (state, action) => {
//         state.loading = false;
//         state.items = state.items.filter(
//           (contact) => contact.id !== action.payload
//         );
//       })
//       .addCase(deleteContact.rejected, (state) => {
//         state.loading = false;
//         state.error = true;
//       })
//       .addCase(logOut.fulfilled, (state) => {
//         state.items = [];
//       });
//   },
// });

// export default contactsSlice.reducer;



import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";
import { logOut } from "../auth/operations";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      // FETCH
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch contacts";
      })

      // ADD
      .addCase(addContact.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to add contact";
      })

      // DELETE
      .addCase(deleteContact.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(
          (contact) => contact.id !== action.payload
        );
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to delete contact";
      })

      // LOGOUT
      .addCase(logOut.fulfilled, (state) => {
        state.items = [];
        state.loading = false;
        state.error = null;
      });
  },
});

export default contactsSlice.reducer;
