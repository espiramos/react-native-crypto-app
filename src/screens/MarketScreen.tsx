import { View, Text } from 'react-native';
import React from 'react';

// Constants
import { COLORS, FONTS, SIZES } from '../constants';
// icon
import MarketIcon from "../../assets/icons/market-icon.svg";

const MarketScreen = () => {
    return (
        <View style={{ flex: 1, paddingTop: 12, paddingHorizontal: 10, justifyContent: 'center', alignItems: 'center' }}>
            <MarketIcon width={100} height={100} style={{ fill: COLORS.fade }} />
            <Text style={{ fontSize: SIZES.extraLarge, fontFamily: FONTS.regular, color: COLORS.fade, marginTop: SIZES.small }}>Market Screen</Text>
        </View>
    );
};

export default MarketScreen;