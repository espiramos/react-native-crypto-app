import { View, Text, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
// SKELETON LOADER
import SkeletonContent from 'react-native-skeleton-content';

// @ts-ignore
import { ChartPath, ChartPathProvider, monotoneCubicInterpolation } from '@rainbow-me/animated-charts';

// CONSTANTS
import { COLORS, FONTS, SIZES } from '../constants';

// icons
import BitcoinIcon from '../../assets/icons/bitcoin-icon.svg';
import EthereumIcon from '../../assets/icons/ethereum-icon.svg';
import BinanceIcon from '../../assets/icons/binance-icon.svg';
import ArrowDownIcon from '../../assets/icons/arrow-down-icon.svg';
import ArrowUpIcon from '../../assets/icons/arrow-up-icon.svg';
import Graph from "../../assets/icons/graph.svg";

// Data format for rainbow charts
type GraphDataType = {
    x: number;
    y: number;
};

type CoinTypeProps = {
    id: string;
    name: string;
    symbol: string;
    color: string;
    refreshing: boolean;
};

const TopCoinCard = ({ id, name, symbol, color, refreshing }: CoinTypeProps) => {
    const [loading, setLoading] = useState(true);
    const [currentPrice, setCurrentPrice] = useState(0);
    const [percentageChange, setPercentageChange] = useState(0);
    const [error, setError] = useState(false);
    const [points, setPoints] = useState([]);

    // 24 hours in UNIX timestamp for CoinGecko endpoint
    const now = new Date().valueOf();
    const yesterday = new Date(now).setDate(
        new Date(now).getDate() - 1
    );
    const nowUnix = Math.floor(new Date().getTime() / 1000);
    const yesterdayUnix = Math.floor(new Date(yesterday).getTime() / 1000);

    // FORMAT CURRENCY
    const format = (amount: Number) => {
        return Number(amount)
            .toFixed(2)
            .replace(/\d(?=(\d{3})+\.)/g, '$&,');
    };

    // fetch data from CoinGecko
    const fetchCoinDetails = async () => {
        try {
            setLoading(true);
            setError(false);
            const detailsResponse = await fetch(`https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false`);
            const dataResponse = await fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart/range?vs_currency=usd&from=${yesterdayUnix}&to=${nowUnix}`);
            const detailsResponseJson = await detailsResponse.json();
            const dataResponseJson = await dataResponse.json();
            let resultData = dataResponseJson.prices;

            // format resonse data for chart
            let data: Array<GraphDataType> = [];
            for (let i = 0; i < resultData.length; i++) {
                let currentSet = resultData[i];
                data.push({ x: currentSet[0], y: currentSet[1] });
            }
            setPoints(monotoneCubicInterpolation({ data, range: 40 }));
            setCurrentPrice(detailsResponseJson.market_data.current_price.usd);
            setPercentageChange(detailsResponseJson.market_data.price_change_percentage_1h_in_currency.usd);
        } catch (error) {
            console.log(error);
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    // refetch coin data on refresh
    useEffect(() => {
        fetchCoinDetails();
    }, [refreshing]);

    return (
        <SkeletonContent
            containerStyle={{ flex: 1, width: "100%", height: '100%' }}
            isLoading={loading}
            boneColor={COLORS.primary}
            animationDirection={'horizontalRight'}
            highlightColor={COLORS.gray}
            layout={[
                { key: 'someId', width: "100%", height: 63, marginBottom: 20, },
            ]}
        >
            {error ?
                <View style={styles.container}>
                    <Text style={{ ...styles.coinSubName, flex: 1, color: COLORS.negative, textAlign: 'center' }}>Unable to load, pull to refresh</Text>
                </View>
                : <View style={styles.container}>
                    <View style={styles.left}>
                        {name === 'Bitcoin'
                            ? <BitcoinIcon width={26} height={26} style={{ marginRight: 4 }} />
                            : name === 'Ethereum' ? <EthereumIcon width={26} height={26} style={{ marginRight: 4 }} />
                                : <BinanceIcon width={26} height={26} style={{ marginRight: 6 }} />
                        }
                        <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                            <Text style={styles.coinName}>{name}</Text>
                            <Text style={styles.coinSubName}>1.00 {symbol}</Text>
                        </View>
                    </View>
                    <View style={styles.center}>
                        {!points ?
                            <Graph width={100} height={30} />
                            :
                            <ChartPathProvider data={{ points, smoothingStrategy: 'bezier' }}>
                                <ChartPath height={24} stroke={color} width={100} />
                            </ChartPathProvider>
                        }
                    </View>
                    <View style={styles.right}>
                        <Text style={{ ...styles.coinName, letterSpacing: 0.5, color: 'rgba(255, 255, 255, 0.8)' }}>${format(currentPrice)}</Text>
                        <View style={percentageChange > 0 ? styles.bullish : styles.bearish}>
                            {percentageChange > 0 ? <ArrowUpIcon /> : <ArrowDownIcon />}
                            <Text style={{ ...styles.coinSubName, marginLeft: 2, color: percentageChange > 0 ? COLORS.positive : COLORS.negative }}>{percentageChange.toFixed(2)} %</Text>
                        </View>
                    </View>
                </View>}
        </SkeletonContent>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 16,
        backgroundColor: COLORS.primary,
        borderRadius: 4,
        marginBottom: 11,
        flex: 1
    },
    left: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    coinName: {
        fontFamily: FONTS.medium,
        fontSize: SIZES.small,
        color: COLORS.white,
        letterSpacing: -0.504
    },
    coinSubName: {
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.small,
        color: COLORS.white,
        letterSpacing: -0.504
    },
    center: {
        marginHorizontal: 31
    },
    right: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    bullish: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    bearish: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    }
});

export default TopCoinCard;