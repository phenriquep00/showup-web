'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../lib/store';
import { signIn } from 'next-auth/react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const handleGoogleLogin = () => {
    signIn('google');
  };


  return (
    <h1>
        Login Page
        <button onClick={handleGoogleLogin}>Login with Google</button>
    </h1>
  );
}
