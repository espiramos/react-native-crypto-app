import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type HomeStackNavigatorParamList = {
    Home: undefined;
    Profile: undefined;
    Notifications: undefined;
    AllCoins: undefined;
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<
    HomeStackNavigatorParamList
>;