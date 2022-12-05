import { View, Text } from 'react-native';
import React from 'react';

// Constants
import { COLORS, FONTS, SIZES } from '../constants';
// icon
import WalletIcon from "../../assets/icons/wallet-icon.svg";

const WalletScreen = () => {
    return (
        <View style={{ flex: 1, paddingTop: 12, paddingHorizontal: 10, justifyContent: 'center', alignItems: 'center' }}>
            <WalletIcon width={100} height={100} style={{ stroke: COLORS.fade }} />
            <Text style={{ fontSize: SIZES.extraLarge, fontFamily: FONTS.regular, color: COLORS.fade, marginTop: SIZES.small }}>Wallet Screen</Text>
        </View>
    );
};

export default WalletScreen;