import { Pressable, Image } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeStackNavigatorParamList } from './types';

// SCREENS
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/Home/ProfileScreen";
import NotificationsScreen from "../screens/Home/NotificationsScreen";
import AllCoinsScreen from "../screens/Home/AllCoinsSreen";

// CONSTANTS
import { COLORS, FONTS, SIZES } from '../constants';
// ICONS
import NoticationIcon from "../../assets/icons/notification-icon.svg";

const HomeStack = createNativeStackNavigator<HomeStackNavigatorParamList>();

const HomeStackNavigator = () => {
    return (
        <HomeStack.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: COLORS.screenBg },
                headerTitleStyle: { color: COLORS.white },
                headerBackTitle: 'Back'
            }}
        >
            <HomeStack.Screen
                options={({ navigation }) => ({
                    headerStyle: { backgroundColor: COLORS.screenBg },
                    headerTitleStyle: { color: COLORS.white, fontFamily: FONTS.interRegular, fontSize: SIZES.extraLarge },
                    headerTitle: 'CryptApp',
                    headerLeft: () => (
                        <Pressable
                            onPress={() => navigation.navigate('Profile')}
                            style={({ pressed }) => ({
                                opacity: pressed ? 0.5 : 1,
                            })}
                        >
                            <Image source={require("../../assets/images/me.png")}
                                style={{
                                    width: 28,
                                    height: 28,
                                    borderRadius: 50,
                                    marginRight: 12
                                }}
                            />
                        </Pressable>
                    ),
                    headerRight: () => (
                        <Pressable
                            onPress={() => navigation.navigate('Notifications')}
                            style={({ pressed }) => ({
                                opacity: pressed ? 0.5 : 1,
                            })}
                        >
                            <NoticationIcon width={24} height={24} />
                        </Pressable>
                    )
                })}
                name="Home" component={HomeScreen}
            />
            <HomeStack.Screen
                name="Profile" component={ProfileScreen}
            />
            <HomeStack.Screen
                name="Notifications" component={NotificationsScreen}
            />
            <HomeStack.Screen
                name="AllCoins" component={AllCoinsScreen}
            />
        </HomeStack.Navigator >
    );
};

export default HomeStackNavigator;