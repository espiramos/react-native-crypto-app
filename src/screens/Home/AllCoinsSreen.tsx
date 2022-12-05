import { View, Text } from 'react-native';
import React from 'react';

const AllCoinsScreen = () => {
    return (
        <View style={{ flex: 1, paddingTop: 12, paddingHorizontal: 10, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 18, color: 'white'  }}>See all Coins</Text>
        </View>
    );
};

export default AllCoinsScreen;