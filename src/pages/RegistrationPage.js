import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../redux/auth/authOperations';
import RegistrationForm from '../components/Main/Form/RegistrationForm';

export default function RegistrationPage() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const updateName = e => setName(e.target.value);

  const [email, setEmail] = useState('');
  const updateEmail = e => setEmail(e.target.value);

  const [password, setPassword] = useState('');
  const updatePassword = e => setPassword(e.target.value);

  const onHandleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <RegistrationForm
      name={name}
      email={email}
      password={password}
      onUpdateName={updateName}
      onUpdateEmail={updateEmail}
      onUpdatePassword={updatePassword}
      onHandleSubmit={onHandleSubmit}
    />
  );
}
