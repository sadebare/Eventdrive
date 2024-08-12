import toast from "react-hot-toast";
import { getThemeFromLocalStorage } from "../../utils/theme";
import { clearStoreThunk, loginUserThunk, registerUserThunk, updateUserThunk } from "./userThunk";
import { getUserFromLocalStorage, removeUserFromLocalStorage } from "../../utils/localStorage";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  isLoading: false,
  toggle: false,
  links: [
    { id: 1, page: "Home" },
    {
      id: 2,
      page: "Venues",
      details: {
        titles: ["By Location", "By Venue Type", "By Event"],
        states: [
          "abia", "adamawa", "akwa Ibom", "anambra", "bauchi", "bayelsa", "benue", "borno", "cross River", "delta",
          "ebonyi", "edo", "ekiti", "enugu", "fCT - Abuja", "gombe", "imo", "jigawa", "kaduna", "kano", "katsina",
          "kebbi", "kogi", "kwara", "lagos", "nasarawa", "niger", "ogun", "ondo", "osun", "oyo", "plateau", "rivers",
          "sokoto", "taraba", "yobe", "zamfara"
        ],
        venues: ["Hotels", "Restaurants", "Conference Halls", "Bar"],
        events: [
          "Wedding Venues",
          "Wedding Reception",
          "Birthday Venues",
          "Corporate Events Venues",
        ],
      },
    },
    {
      id: 3,
      page: "Vendors",
      details: {
        titles: ["By Sound", "By Hospitality", "By Event Coverage", "By Makeup"],
        sounds: ["Equipment Rentals", "Mixology", "DJ"],
        hospitalities: [
          "Small Event Catering",
          "Large Event Catering",
          "Decoration",
        ],
        coverages: ["MC", "Photography", "Cinematography"],
        makeups: ["Bridal Makeup", "Full Body Makeup", "Hair Styling"],
      },
    },
    { id: 4, page: "How it Works" },
    { id: 5, page: "Blog" },
  ],
  user: getUserFromLocalStorage(),
  theme: getThemeFromLocalStorage(),
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
