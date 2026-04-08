import type { UserType } from '../types/user';

export interface AuthContextType {
  user: UserType;
  handleLogin: (loginData: LoginDataType) => Promise<void>;
  handleLogout: () => void;
};

export type AuthContextProviderProps = {
  children: React.ReactNode;
};

export interface LoginDataType {
  email: string;
  password: string;
};
