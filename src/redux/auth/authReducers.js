import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import error from '../errorReducer';
import {
  registerSuccess,
  loginSuccess,
  registerError,
  loginError,
  logoutSuccess,
  getCurrentUserSuccess,
  getCurrentUserError,
} from './authActions';

const initialUserState = { name: null, email: null };

const user = createReducer(initialUserState, {
  [registerSuccess]: (_, { payload }) => payload.user,
  [loginSuccess]: (_, { payload }) => payload.user,
  [logoutSuccess]: () => initialUserState,
  [getCurrentUserSuccess]: (_, { payload }) => payload,
});

const token = createReducer(null, {
  [registerSuccess]: (_, { payload }) => payload.token,
  [loginSuccess]: (_, { payload }) => payload.token,
  [logoutSuccess]: () => null,
});

const isAuth = createReducer(false, {
  [registerSuccess]: () => true,
  [loginSuccess]: () => true,
  [getCurrentUserSuccess]: () => true,
  [registerError]: () => false,
  [loginError]: () => false,
  [getCurrentUserError]: () => false,
  [logoutSuccess]: () => false,
});

const authReducer = combineReducers({
  isAuth,
  user,
  token,
  error,
});

export { authReducer };
