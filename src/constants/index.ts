export const COLORS = {
    primary: "#070922",
    screenBg: "#050613",
    secondary: "#F2BA53",
    white: '#FFFFFF',
    gray: "#585A85",
    negative: '#FF0E00',
    positive: '#18AB15',
    fade: 'rgba(88,99,133,0.5)'
};

export const SIZES = {
    base: 8,
    small: 12,
    font: 14,
    medium: 16,
    large: 18,
    extraLarge: 24,
};

export const FONTS = {
    bold: "PoppinsBold",
    semiBold: "PoppinsSemiBold",
    medium: "PoppinsMedium",
    regular: "PoppinsRegular",
    light: "PoppinsLight",
    interBold: "InterBold",
    interSemiBold: "InterSemiBold",
    interMedium: "InterMedium",
    interRegular: "InterRegular",
    interLight: "InterLight",
};

export const SHADOWS = {
    light: {
        shadowColor: COLORS.gray,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    medium: {
        shadowColor: COLORS.gray,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    dark: {
        shadowColor: COLORS.gray,
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 14,
    },
};
