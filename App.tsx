import { StatusBar } from 'expo-status-bar';
import { RootRoutes } from './src/route';
import { AuthProvider } from './src/context/AuthContext';
import Loading from './src/components/Loading/Loading';
import {
  useFonts,
  Montserrat_100Thin,
  Montserrat_200ExtraLight,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';

import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {
  useEffect(() => {
    const prepare = async () => {
      // Aqui você pode carregar dados iniciais do app ou realizar alguma tarefa assíncrona
      await new Promise(resolve => setTimeout(resolve, 2000)); // Exemplo de espera
      SplashScreen.hideAsync(); // Esconde o splash screen quando o app estiver pronto
    };

    prepare();
  }, []);

  const [fontsLoaded] = useFonts({
    Montserrat_100Thin,
    Montserrat_200ExtraLight,
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <Loading />
    )
  }
  return (
    <AuthProvider>
      <RootRoutes />
      <StatusBar backgroundColor="transparent" translucent />
    </AuthProvider>
  );
}
