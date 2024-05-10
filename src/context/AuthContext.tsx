import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../services/axios";
import { Alert } from "react-native";
import { IPropsUser } from "../@types";
import { getHeaders } from "../utils/token";

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
  total: number;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
  handleTutorial: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [authData, setAuthData] = useState<IPropsUser>();
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(true);
  const [notTutorial, setNotTutorial] = useState(true);
  const [total, setTotal] = useState(0);

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

  async function handleTutorial() {
    setChecked(!checked);

    try {
      console.log(authData?.token);
      
      const response = await api.patch('/tutorial', {
        tutorial: false
      }, getHeaders(authData?.token));
      console.log(response.data);
      
      Alert.alert(response.data);
    } catch (error) {
      console.error('Erro ao buscar listas:', error);
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

  return <AuthContext.Provider value={{ 
    authData, 
    loading, 
    login, 
    logout,
    handleTutorial, 
    notTutorial, 
    checked,
    total,
    setTotal
    }}>
    {children}
  </AuthContext.Provider>
};

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
