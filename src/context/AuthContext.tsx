import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../services/axios";
import { Alert } from "react-native";
import { IPropsUser, IPropsRegisterUser } from "../@types";
import { getHeaders } from "../utils/token";
import { regexValidationEmail } from "../utils/validations";

interface Props {
  children: React.ReactNode;
}

interface AuthContextData {
  authData?: IPropsUser;
  login: (email: string, password: string) => Promise<IPropsUser>;
  logout: () => Promise<void>;
  signup: (username: string, email: string, password: string, confirmPassword: string) => Promise<IPropsRegisterUser>;
  loading: boolean;
  checked: boolean;
  total: number;
  error: string;
  success: boolean;
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<string>>;
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
  const [total, setTotal] = useState(0);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

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
    setError("");

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
      setLoading(false);
      setError("");
      return Alert.alert('Algo deu errado, Tente novamente');
    }
  }

  async function signup(username: string, email: string, password: string, confirmPassword: string) {
    try {

      if (!email || (email && !regexValidationEmail.test(String(email).toLowerCase()))) {
        setError('Você precisa informar um email válido')
        return;
      }

      if (password !== confirmPassword) {
        setError("As senhas precisam ser iguais");
        return;
      }

      setLoading(true);

      const dataUser = {
        username,
        email,
        password,
        phone: ""
      };

      const createdUser = await api.post('/user', { ...dataUser });

      setError("");

      setLoading(false);
      setSuccess(true);
      return createdUser.data;

    } catch (error) {
      setLoading(false);
      setError("");
      setSuccess(false);

      return Alert.alert('Algo deu errado', 'Tente novamente');
    }
  }

  async function handleTutorial() {
    setChecked(!checked);

    try {

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
    checked,
    error,
    setError,
    total,
    setTotal,
    signup,
    success,
    setSuccess
  }}>
    {children}
  </AuthContext.Provider>
};

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
