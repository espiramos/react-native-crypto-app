import { View, Text, ImageBackground, StyleSheet, ImageSourcePropType } from 'react-native';
import React from 'react';

// CONSTANTS
import { COLORS, FONTS, SIZES } from '../constants';
import { carouselItemType } from './types';

const CarouselSlide: React.FC<{
    item: carouselItemType;
    backgroundImage: ImageSourcePropType;
}> = ({ item, backgroundImage }) => {
    return (
        <View style={styles.carouselSlideContainer}>
            <ImageBackground source={backgroundImage} style={styles.carouselSlideImage}>
                <Text style={styles.carouselSlideLead}>{item.heading}</Text>
                {item.subHeading && <Text style={styles.carouselSlideText}>{item.subHeading}</Text>}
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    carouselSlideContainer: {
        width: '100%',
        backgroundColor: 'transparent',
        height: '100%',
        borderRadius: SIZES.base,
        overflow: 'hidden',
    },
    carouselSlideImage: {
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    carouselSlideLead: {
        color: COLORS.white,
        fontFamily: FONTS.semiBold,
        fontSize: 20,
        lineHeight: 30,
        marginLeft: 20,
        maxWidth: '50%',
    },
    carouselSlideText: {
        color: COLORS.white,
        fontFamily: FONTS.regular,
        fontSize: SIZES.base + 2,
        lineHeight: 15,
        letterSpacing: -0.504,
        marginLeft: 20
    }
});

export default CarouselSlide;