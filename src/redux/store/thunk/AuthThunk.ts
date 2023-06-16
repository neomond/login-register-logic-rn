import axios from 'axios';
import {AppDispatch, RootState} from '..';
import {
  User,
  setEmail,
  setLoading,
  setSecretInfo,
  setToken,
} from '../slices/AuthSlice';
import {api} from '../../../constants/api';

export const Auth = (payload: any) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoading(true));
      const authPost = await axios.post(`${api}/api/user/auth`, {
        email: payload,
      });
      dispatch(setEmail(authPost.data.email));
    } catch (error) {
      console.log('auth error', error);
    }
    dispatch(setLoading(false));
  };
};

export const ConfirmUser = (payload: User) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoading(true));
      const authPost = await axios.post(`${api}/api/user/confirm`, {
        email: payload.email,
        code: payload.code,
      });
      dispatch(setToken(authPost.data.token));
      return authPost.data;
    } catch (error) {
      console.log('confirmerror', error);
    }
    dispatch(setLoading(false));
  };
};

export const getMe = () => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      const {token} = getState().authSlice;
      const response = await axios.get(`${api}/api/user/getUser`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(setSecretInfo(response.data.text));
    } catch (error) {
      console.log(error);
    }
  };
};
