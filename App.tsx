import { StatusBar } from 'expo-status-bar';
import RootNavigator from './src/navigation';
import { useFonts } from "expo-font";
import { COLORS } from './src/constants';
import React from 'react';
import 'expo-dev-menu';


export default function App() {
  const [loaded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
    PoppinsLight: require("./assets/fonts/Poppins/Poppins-Light.ttf"),
    PoppinsRegular: require("./assets/fonts/Poppins/Poppins-Regular.ttf"),
    PoppinsMedium: require("./assets/fonts/Poppins/Poppins-Medium.ttf"),
    PoppinsSemiBold: require("./assets/fonts/Poppins/Poppins-SemiBold.ttf"),
    PoppinsBold: require("./assets/fonts/Poppins/Poppins-Bold.ttf"),
  });

  if (!loaded) return null;

  return (
    <>
      <StatusBar animated={true} translucent={true} style='light' backgroundColor={COLORS.screenBg}/>
      <RootNavigator />
    </>
  );
}