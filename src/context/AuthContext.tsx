import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../services/axios";
import { Alert } from "react-native";
import { IPropsUser } from "../@types";

interface Props {
  children: React.ReactNode;
}

interface AuthContextData {
  authData?: IPropsUser;
  login: (email: string, password: string) => Promise<IPropsUser>;
  logout: () => Promise<void>;
  loading: boolean;
  notTutorial: boolean;
  checked: boolean;
  handleTutorial: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [authData, setAuthData] = useState<IPropsUser>();
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(false);
  const [notTutorial, setNotTutorial] = useState(true);

  async function loadFromStorage() {
    try {
      const auth = await AsyncStorage.getItem('@AuthData');
      if (auth) {
        const _auth: IPropsUser = JSON.parse(auth);
        setAuthData(_auth);
        setLoading(false);
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }

  async function handleTutorial() {
    setChecked(true);

    if (checked) {
      setNotTutorial(false);
      AsyncStorage.setItem('@TutorialView', JSON.stringify(notTutorial))
    }
  }

  async function login(email: string, password: string) {

    try {
      setLoading(true);
      const auth = await api.post('/login', {
        email,
        password
      });

      setLoading(false);
      setAuthData(auth.data);
      AsyncStorage.setItem('@AuthData', JSON.stringify(auth.data));
      return auth.data;
    } catch (error: any) {
      setLoading(false)
      if (error.response.status < 423) {
        return Alert.alert('Algo deu errado', error.response.data.message);
      }
      console.log(error.response.status)
      return Alert.alert('Algo deu errado', 'Erro de conexão com o servidor');
    }
  }

  async function logout(): Promise<void> {
    setAuthData(undefined);
    AsyncStorage.removeItem('@AuthData');
    return;
  }

  useEffect(() => {
    loadFromStorage();
  }, []);

  return <AuthContext.Provider value={{ authData, loading, login, logout, handleTutorial, notTutorial, checked }}>
    {children}
  </AuthContext.Provider>
};

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}



// // AuthContext.tsx
// import React, { createContext, useState, useContext } from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { AxiosResponse } from 'axios';

// // Importe a instância do Axios
// import api from '../services/axios';

// interface User {
//   email: string;
//   password: string;
// }

// interface AuthContextType {
//   user: User | null;
//   login: (email: string, password: string) => Promise<void>;
//   logout: () => void;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }) => {
//   const [user, setUser] = useState<User | null>(null);

//   const login = async (email: string, password: string) => {
//     try {
//       const response: AxiosResponse<User> = await api.post('/login', {
//         email,
//         password,
//       });
//       setUser(response.data);
//       await AsyncStorage.setItem('user', JSON.stringify(response.data));
//     } catch (error) {
//       console.error('Error logging in:', error);
//       throw error; // Você pode tratar o erro de login na interface de usuário
//     }
//   };

//   const logout = () => {
//     setUser(null);
//     AsyncStorage.removeItem('user');
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// };
