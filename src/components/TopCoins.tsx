import { View, Text, StyleSheet, Dimensions } from 'react-native';
import React from 'react';

// COIN CARD COMPONENT
import TopCoinCard from './TopCoinCard';

// CONSTANTS
import { COLORS, FONTS, SIZES } from '../constants';

type TopCoinsProps = {
  refreshing: boolean;
};
const TopCoins = ({ refreshing }: TopCoinsProps) => {
  const topCoinsData = [
    {
      "id": "bitcoin",
      "symbol": "BTC",
      "name": "Bitcoin",
      "color": '#F7931A'
    },
    {
      "id": "binancecoin",
      "symbol": "BNB",
      "name": "BNB",
      "color": '#F3BA2F'
    },
    {
      "id": "ethereum",
      "symbol": "ETH",
      "name": "Ethereum",
      "color": '#505050'
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ ...styles.headerText, color: COLORS.white }}>Coins</Text>
        <Text style={{ ...styles.headerText, color: 'rgba(255, 255, 255, 0.8)' }}>See All</Text>
      </View>

      <View style={{ flex: 1 }}>
        {topCoinsData.map((c) => {
          return (
            <TopCoinCard
              id={c.id}
              key={c.id}
              color={c.color}
              name={c.name}
              symbol={c.symbol}
              refreshing={refreshing}
            />
          );
        })
        }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    paddingVertical: 28
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SIZES.extraLarge
  },
  headerText: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.medium,
    lineHeight: SIZES.extraLarge + 3
  }
});

export default TopCoins;