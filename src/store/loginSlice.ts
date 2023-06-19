import {createSlice} from '@reduxjs/toolkit';

// Define a type for the slice state
interface LoginState {
  value: boolean;
}

const initialState: LoginState = {
  value: false,
};

export const loginSlice = createSlice({
  name: 'loginSlice',
  initialState: initialState,
  reducers: {
    login: state => {
      state.value = true;
    },
    signout: state => {
      state.value = false;
    },
  },
});

export const {login, signout} = loginSlice.actions;

export default loginSlice.reducer;
