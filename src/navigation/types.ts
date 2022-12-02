import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

export type HomeStackNavigatorParamList = {
    Home: undefined;
    Details: {
        name: string;
        birthYear: string;
    };
};

// export type HomeScreenNavigationProp = NativeStackNavigationProp<
//     HomeStackNavigatorParamList,
//     'Details'
// >;
export type HomeScreenNavigationProp = CompositeNavigationProp<
    NativeStackNavigationProp<HomeStackNavigatorParamList, 'Details'>,
    BottomTabNavigationProp<BottomTabNavigatorParamList, 'Feed'>
>;

export type DetailsScreenRouteProp = RouteProp<
    HomeStackNavigatorParamList,
    'Details'
>;

export type BottomTabNavigatorParamList = {
    HomeStack: HomeStackNavigatorParamList;
    Feed: undefined;
    Settings: undefined;
};