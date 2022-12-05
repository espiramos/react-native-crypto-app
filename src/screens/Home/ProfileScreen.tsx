import { View, Text } from 'react-native';
import React from 'react';

const ProfileScreen = () => {
    return (
        <View style={{ flex: 1, paddingTop: 12, paddingHorizontal: 10, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 18, color: 'white' }}>Profile Screen</Text>
        </View>
    );
};

export default ProfileScreen;