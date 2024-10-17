import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isLoggedIn: boolean;
  user: { email: string } | null;
}

const initialState: AuthState = {
  isLoggedIn: false,
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ email: string }>) => {
      state.isLoggedIn = true;
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      localStorage.removeItem('user');
    },
    hydrate: (state, action: PayloadAction<{ email: string } | null>) => {
      const user = action.payload;
      if (user) {
        state.isLoggedIn = true;
        state.user = user;
      }
    },
  },
});

export const { login, logout, hydrate } = authSlice.actions;
export default authSlice.reducer;
