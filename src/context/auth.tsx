import { createContext, useState } from 'react';
import type { AuthContextProviderProps, AuthContextType, LoginDataType } from './types';
import type { UserType } from '../types/user';
import { api } from '../services/api';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthContextProvider = ({children}: AuthContextProviderProps) => {
  const [user, setUser] = useState<UserType>({} as UserType);

  const navigate = useNavigate();

  const handleLogin = async (loginData: LoginDataType) => {
    try {
      const { data } = await api.get(`users?email=${encodeURIComponent(loginData.email)}`);
      console.log(data);

      const user = data.find((u: any) => u.password === loginData.password);

      if (user) {
        setUser(user);
        navigate('/feed');
      } else {
        alert('Email ou senha inválidos');
      }
    } catch {
      alert('Houve um erro ao fazer login, tente novamente');
    }
  };

  const handleLogout = () => {
    setUser({} as UserType);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
