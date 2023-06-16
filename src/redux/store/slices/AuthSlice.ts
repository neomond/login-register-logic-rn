import {createSlice} from '@reduxjs/toolkit';

export type User = {
  email: string;
  code: string;
};

interface initialStateType {
  user: User;
  token: string | undefined;
  secretInfo: string | undefined;
  loading: boolean;
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
    setToken(state, action) {
      state.token = action.payload;
    },
    setSecretInfo(state, action) {
      state.secretInfo = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export default AuthSlice.reducer;
export const {setEmail, setToken, setSecretInfo, setLoading} =
  AuthSlice.actions;
