import { View, Text, ImageBackground, StyleSheet, Pressable, Dimensions, Platform } from 'react-native';
import React, { useState } from 'react';
import { BlurView } from 'expo-blur';

// CONSTANTS
import { FONTS, SIZES } from '../constants';

// ICONS
import HideIcon from "../../assets/icons/hide-icon.svg";
import ShowIcon from "../../assets/icons/show-icon.svg";

const BalanceCard = () => {
  const [balanceVisibility, toggleBalanceVisiblity] = useState(true);

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/images/balance-bg.png')} style={styles.bgImage}>
        <View style={styles.balanceLeadContainer}>
          <Text style={styles.balanceLead}>Total Balance</Text>
          <Pressable onPress={() => toggleBalanceVisiblity(!balanceVisibility)}>
            {balanceVisibility ? <HideIcon width={18} height={18} style={{ marginTop: 3 }} />
              : <ShowIcon width={18} height={18} style={{ marginTop: 3 }} />}
          </Pressable>
        </View>
        <View style={styles.balanceContainer}>
          <Text style={styles.balance}>{Platform.OS === 'android' && !balanceVisibility ? '*******' : '$35,000.34'}</Text>
          {Platform.OS === 'ios' && !balanceVisibility && <View style={styles.blurLayer}>
            <BlurView intensity={50} tint="light" style={{ width: '100%', height: '100%' }}>
            </BlurView>
          </View>}
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    borderRadius: SIZES.base,
    overflow: 'hidden',
    marginBottom: SIZES.medium,
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    resizeMode: 'cover',
    height: '100%',
    minWidth: '60%'
  },
  bgImage: {
    resizeMode: 'cover',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 30,
    height: Dimensions.get('window').height * 0.17
  },
  balanceLeadContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row'
  },
  balanceLead: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.medium,
    lineHeight: SIZES.extraLarge,
    color: '#E0E0E0',
    marginRight: SIZES.base
  },
  balanceContainer: {
    position: 'relative',
    marginTop: 6
  },
  balance: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.extraLarge + 8,
    lineHeight: SIZES.extraLarge * 2,
    color: '#E0E0E0',
    marginTop: 4
  },
  blurLayer: {
    position: 'absolute',
    top: 0,
    left: 0,
    resizeMode: 'cover',
    height: '100%',
    minWidth: '60%',
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: 'transparent'
  }
});
export default BalanceCard;