import { View, Text } from 'react-native';
import React from 'react';
// Constants
import { COLORS, FONTS, SIZES } from '../constants';
// icon
import TradeIcon from "../../assets/icons/trade-icon.svg";

const TradeScreen = () => {
    return (
        <View style={{ flex: 1, borderColor: 'transparent', borderTopColor: 'transparent', paddingTop: 12, paddingHorizontal: 10, justifyContent: 'center', alignItems: 'center' }}>
            <TradeIcon width={100} height={100} style={{ fill: COLORS.fade }} />
            <Text style={{ fontSize: SIZES.extraLarge, fontFamily: FONTS.regular, color: COLORS.fade, marginTop: SIZES.small }}>Trade Screen</Text>
        </View>
    );
};

export default TradeScreen;