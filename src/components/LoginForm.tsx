import React from 'react';

interface LoginFormProps {
  onLogin: (username: string, password: string) => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const username = (event.currentTarget.elements.namedItem('username') as HTMLInputElement).value;
    const password = (event.currentTarget.elements.namedItem('password') as HTMLInputElement).value;
    onLogin(username, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='username'>Username</label>
      <input id='username' type='text' />
      <label htmlFor='password'>Password</label>
      <input id='password' type='password' />
      <button type='submit'>Login</button>
    </form>
  );
}
