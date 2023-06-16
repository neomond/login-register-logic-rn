import {createSlice} from '@reduxjs/toolkit';

export type User = {
  email: string;
  code: string;
};

interface initialStateType {
  user: User;
  token: string | undefined;
  loading: boolean;
  secretInfo: string | undefined;
}

const initialState: initialStateType = {
  user: {
    email: '',
    code: '',
  },
  token: '',
  secretInfo: '',
  loading: false,
};

const AuthSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    setEmail(state, action) {
      state.user.email = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setToken(state, action) {
      state.token = action.payload;
    },
    setSecretInfo(state, action) {
      state.secretInfo = action.payload;
    },
  },
});

export default AuthSlice.reducer;
export const {setEmail, setLoading, setToken, setSecretInfo} =
  AuthSlice.actions;
