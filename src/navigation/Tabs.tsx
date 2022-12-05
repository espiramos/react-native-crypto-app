import { Dimensions } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// STACKS AND SCREENS
import HomeStack from "./HomeStack";
import WalletScreen from "../screens/WalletScreen";
import TradeScreen from "../screens/TradeScreen";
import MarketScreen from "../screens/MarketScreen";

// CONSTANTS
import { COLORS, SIZES, FONTS } from "../constants";

// navigation icons
import HomeIcon from "../../assets/icons/home-icon.svg";
import WalletIcon from "../../assets/icons/wallet-icon.svg";
import TradeIcon from "../../assets/icons/trade-icon.svg";
import MarketIcon from "../../assets/icons/market-icon.svg";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    const height = Dimensions.get('screen').height;
    let sizeMultiplier: number = 0.8;
    let shortScreensMaxHeight = 680;

    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            headerStyle: { backgroundColor: COLORS.screenBg },
            headerTitleStyle: { color: COLORS.white },
            tabBarStyle: {
                backgroundColor: COLORS.primary,
                paddingTop: height < shortScreensMaxHeight ? 0 : SIZES.medium,
                paddingBottom: height < shortScreensMaxHeight ? 0 : SIZES.extraLarge,
                borderTopColor: 'transparent'
            },
            tabBarLabelStyle: {
                fontStyle: 'normal',
                fontFamily: FONTS.regular,
                fontWeight: '400',
                fontSize: SIZES.small,
                textAlign: 'center'
            },
            tabBarActiveTintColor: COLORS.secondary,
            tabBarInactiveTintColor: COLORS.gray
        }}>
            <Tab.Screen
                name="HomeStack"
                component={HomeStack}
                options={{
                    tabBarLabel: 'Home',
                    tabBarActiveTintColor: COLORS.secondary,
                    tabBarIcon: ({ color, size }) => (
                        <HomeIcon width={size * sizeMultiplier} height={size * sizeMultiplier} style={{ fill: color }} />
                    )
                }}
            />
            <Tab.Screen
                name="Wallet"
                component={WalletScreen}
                options={{
                    tabBarLabel: 'Wallet',
                    tabBarActiveTintColor: COLORS.secondary,
                    tabBarIcon: ({ color, size }) => (
                        <WalletIcon width={size * sizeMultiplier} height={size * sizeMultiplier} style={{ stroke: color }} />
                    )
                }}
            />
            <Tab.Screen
                name="Trade"
                component={TradeScreen}
                options={{
                    headerStyle: { backgroundColor: COLORS.screenBg, borderColor: 'transparent' },
                    tabBarLabel: 'Trade',
                    headerBackgroundContainerStyle: { borderColor: 'transparent', borderBottomColor: 'transparent' },
                    tabBarActiveTintColor: COLORS.secondary,
                    tabBarIcon: ({ color, size }) => (
                        <TradeIcon width={size * sizeMultiplier} height={size * sizeMultiplier} style={{ fill: color }} />
                    )
                }}
            />
            <Tab.Screen
                name="Market"
                component={MarketScreen}
                options={{
                    tabBarLabel: 'Market',
                    tabBarActiveTintColor: COLORS.secondary,
                    tabBarIcon: ({ color, size }) => (
                        <MarketIcon width={size * 0.6} height={size * 0.6} style={{ fill: color }} />
                    )
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomTabs;