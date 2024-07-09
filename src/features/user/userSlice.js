import toast from "react-hot-toast";
import { getThemeFromLocalStorage } from "../../utils/theme";
import { clearStoreThunk, loginUserThunk, registerUserThunk, updateUserThunk } from "./userThunk";
import { getUserFromLocalStorage, removeUserFromLocalStorage } from "../../utils/localStorage";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  toggle: false,
  user: getUserFromLocalStorage(),
  theme: getThemeFromLocalStorage()
};

export const registerUser = createAsyncThunk(
  'user/registerUser', 
  async (user, thunkAPI) => {
    return registerUserThunk('/auth/register', user, thunkAPI);
  }
);

export const loginUser = createAsyncThunk(
  'user/loginUser', 
  async (user, thunkAPI) => {
    return loginUserThunk('/auth/login', user, thunkAPI);
  }
);

export const updateUser = createAsyncThunk(
  'user/updateUser',
  async (user, thunkAPI) => {
    return updateUserThunk('/auth/updateUser', user, thunkAPI);
  }
);

export const clearStore = createAsyncThunk(
  'user/clearStore',
  clearStoreThunk
)

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logoutUser: (state, { payload }) => {
      state.user = null;
      removeUserFromLocalStorage();
      if (payload) {
        toast.success(payload);
      }
    },
    toggler: (state) => {
      state.toggle = !state.toggle;
    },
    toggleTheme: (state) => {
      const { business, cmyk } = themes;
      state.theme = state.theme === business ? cmyk : business;
      document.documentElement.setAttribute('data-theme', state.theme);
      localStorage.setItem('theme', state.theme);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.isLoading = false;
        state.user = user;
        addUserToLocalStorage(user)
        toast.success(`Hello there, ${user.name}`);
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.isLoading = false;
        state.user = user;
        addUserToLocalStorage(user)
        toast.success(`Welcome back ${user.name}`);
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error('Login Failed!');
      })
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.isLoading = false;
        state.user = user;
        addUserToLocalStorage(user);
        toast.success('User updated');
      })
      .addCase(updateUser.rejected, (state) => {
        state.isLoading = false;
        toast.error('Unable to update');
      })
      .addCase(clearStore.rejected, () => {
        toast.error('There was an error..')
      });
  }
});

export const { logoutUser, toggler, toggleTheme } = userSlice.actions;

export default userSlice.reducer;