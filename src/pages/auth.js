import React, { useState } from 'react';
import { registerUser } from './api/firebase';

const Auth = () => {
  const [token, setToken] = useState('');

  const register = async () => {
    try {
      // Meminta pengguna memasukkan email
      const email = window.prompt('Masukkan alamat email:');
      if (!email) return; // Jika pengguna membatalkan prompt

      // Meminta pengguna memasukkan password
      const password = window.prompt('Masukkan password:');
      if (!password) return; // Jika pengguna membatalkan prompt

      // Langsung lakukan registrasi dengan email dan password yang dimasukkan
      const userToken = await registerUser(email, password);
      localStorage.setItem('token', userToken);
      setToken(userToken);
      console.log('Token (Register):', userToken);
      window.alert('Registrasi berhasil!');
    } catch (error) {
      console.error('Error:', error.message);
      window.alert('Registrasi gagal. Pastikan email dan password valid.');
    }
  };

  return (
    <div>
      <button onClick={register}>Registrasi</button>
      {token && <p>Token: {token}</p>}
    </div>
  );
};

export default Auth;
