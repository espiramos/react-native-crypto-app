import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { COLORS } from "../constants";
import BottomTabs from "./Tabs";

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: COLORS.screenBg,
    },
};
const RootNavigator = () => {
    return (
        <NavigationContainer theme={theme}>
            <BottomTabs />
        </NavigationContainer>
    );
};

export default RootNavigator;