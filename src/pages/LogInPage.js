import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../redux/auth/authOperations';
import LogInForm from '../components/Main/Form/LogInForm';

export default function LogInPage() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const updateEmail = e => setEmail(e.target.value);

  const [password, setPassword] = useState('');
  const updatePassword = e => setPassword(e.target.value);

  const onHandleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <LogInForm
      email={email}
      password={password}
      onUpdateEmail={updateEmail}
      onUpdatePassword={updatePassword}
      onHandleSubmit={onHandleSubmit}
    />
  );
}
