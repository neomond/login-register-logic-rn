import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios, {AxiosError} from 'axios';
import {RootState} from '../../../App';
// import { confirmCodeEmail } from '../utils/emailService';

interface User {
  email: string;
  password: string;
  code: string;
}

interface LoginResponse {
  email: string;
}

interface ErrorPayload {
  msg: string;
}

interface UserState {
  isLoading: boolean;
  error: string | null | any;
  loggedInUser: User | null;
}

const initialState: UserState = {
  isLoading: false,
  error: null,
  loggedInUser: null,
};

// Async Thunk Action - Login
export const login = createAsyncThunk<
  LoginResponse,
  User,
  {rejectValue: ErrorPayload}
>('user/login', async ({email, password}, {rejectWithValue}) => {
  try {
    const response = await axios.post<LoginResponse>(
      'http://localhost:6666/api/user/login',
      {
        email,
        password,
      },
    );

    return response.data;
  } catch (error: any) {
    const axiosError = error as AxiosError<ErrorPayload>;
    if (axiosError.response) {
      return rejectWithValue(axiosError.response.data);
    } else {
      return rejectWithValue({msg: error.message});
    }
  }
});

// Async Thunk Action - Register
export const register = createAsyncThunk<
  User,
  User,
  {rejectValue: ErrorPayload}
>('user/register', async ({email, password}, {rejectWithValue}) => {
  try {
    const response = await axios.post<User>(
      'http://localhost:6666/api/user/register',
      {
        email,
        password,
      },
    );

    return response.data;
  } catch (error: any) {
    const axiosError = error as AxiosError<ErrorPayload>;
    if (axiosError.response) {
      return rejectWithValue(axiosError.response.data);
    } else {
      return rejectWithValue({msg: error.message});
    }
  }
});

// Async Thunk Action - Forgot Password
export const forgotPassword = createAsyncThunk<
  User,
  {email: string},
  {rejectValue: ErrorPayload}
>('user/forgotPassword', async ({email}, {rejectWithValue}) => {
  try {
    const response = await axios.post<User>(
      'http://localhost:6666/api/user/forgotpassword',
      {
        email,
      },
    );

    return response.data;
  } catch (error: any) {
    const axiosError = error as AxiosError<ErrorPayload>;
    if (axiosError.response) {
      return rejectWithValue(axiosError.response.data);
    } else {
      return rejectWithValue({msg: error.message});
    }
  }
});

// Async Thunk Action - Confirm Code
export const confirmCode = createAsyncThunk<
  User,
  {email: string; code: string},
  {rejectValue: ErrorPayload}
>('user/confirmCode', async ({email, code}, {rejectWithValue}) => {
  try {
    const response = await axios.post<User>(
      'http://localhost:6666/api/user/confirm',
      {
        email,
        code,
      },
    );

    return response.data;
  } catch (error: any) {
    const axiosError = error as AxiosError<ErrorPayload>;
    if (axiosError.response) {
      return rejectWithValue(axiosError.response.data);
    } else {
      return rejectWithValue({msg: error.message});
    }
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    // Login Actions
    builder.addCase(login.pending, (state: any) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(login.fulfilled, (state: any, action: any) => {
      state.isLoading = false;
      state.loggedInUser = action.payload.user;
    });
    builder.addCase(login.rejected, (state: any, action: any) => {
      state.isLoading = false;
      state.error = action.payload?.msg || 'Login failed';
    });

    // Register Actions
    builder.addCase(register.pending, (state: any) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(register.fulfilled, (state: any, action: any) => {
      state.isLoading = false;
      state.loggedInUser = action.payload;
    });
    builder.addCase(register.rejected, (state: any, action: any) => {
      state.isLoading = false;
      state.error = action.payload?.msg || 'Registration failed';
    });

    // Forgot Password Actions
    builder.addCase(forgotPassword.pending, (state: any) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(forgotPassword.fulfilled, (state: any, action: any) => {
      state.isLoading = false;
      state.loggedInUser = action.payload;
    });
    builder.addCase(forgotPassword.rejected, (state: any, action: any) => {
      state.isLoading = false;
      state.error = action.payload?.msg || 'Forgot password failed';
    });

    // Confirm Code Actions
    builder.addCase(confirmCode.pending, (state: any) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(confirmCode.fulfilled, (state: any, action: any) => {
      state.isLoading = false;
      state.loggedInUser = action.payload;
    });
    builder.addCase(confirmCode.rejected, (state: any, action: any) => {
      state.isLoading = false;
      state.error = action.payload?.msg || 'Confirm code failed';
    });
  },
});

export const getAuth = (state: RootState) => state.user.loggedInUser;

export default userSlice.reducer;
