import { View, ScrollView, StyleSheet, RefreshControl } from 'react-native';
import React, { useState, useCallback } from 'react';

// import design library constants
import { COLORS, SIZES } from '../constants';

// import components
import BalanceCard from '../components/BalanceCard';
import HomeCarousel from '../components/HomeCarousel';
import TopCoins from '../components/TopCoins';

const wait = (timeout: number) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
};

const HomeScreen = () => {
    const [refreshing, setRefreshing] = useState(false);
    const [refreshChildren, setRefreshChildren] = useState(false);
    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setRefreshChildren(prevVal => !prevVal)
        wait(2000).then(() => setRefreshing(false));
    }, []);
    return (
        <ScrollView style={{ flex: 1 }} refreshControl={
            <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
                colors={[COLORS.gray]}
                tintColor={COLORS.white}
            />
        }>
            <View style={styles.container}>
                <View style={styles.child}>
                    <BalanceCard />
                    <HomeCarousel />
                </View>
                <View style={styles.child}>
                    <TopCoins refreshing={refreshChildren} />
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: SIZES.medium,
        justifyContent: 'space-between',
        flexDirection: 'column'
    },
    child: {
        flex: 1,
        paddingHorizontal: 20
    }
});

export default HomeScreen;