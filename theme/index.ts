import { createTheme, useTheme } from "@shopify/restyle";

const palette = {
  brand100: "#FCEDE3",
  brand200: "#F5C2A3",
  brand500: "#E9742B",
  brand600: "#CB5B15",

  accent100: "#FBF7EF",
  accent500: "#A67D2C",
  accent600: "#816122",

  success100: "#E3FCEC",
  success300: "#92F2B8",
  success500: "#067647",

  negative100: "#FFECEB",
  negative300: "#E7A29D",
  negative500: "#AD342B",
  negative600: "#932C25",

  warning100: "#FFFCEB",
  warning900: "#7A6B00",

  danger900: "#FF0505",

  gray50: "#FFFFFF",
  gray100: "#F7F7F7",
  gray200: "#EBEBEB",
  gray300: "#0A0A0A1F",
  gray400: "#AFAFAF",
  gray700: "#7A7A7A",
  gray800: "#666666",
  gray900: "#0A0A0A",

  black: "#000000",
  white: "#FFFFFF",

  transparent: "transparent",
};

const theme = createTheme({
  colors: {
    mainBackground: palette.white,
    secBackground: palette.brand100,
    cardPrimaryBackground: palette.brand500,
    cardRegularBackground: palette.white,
    textInputBorderColor: palette.gray50,
    textInputBackground: palette.white,
    textInputPlaceholderColor: palette.gray700,
    textInputLabel: palette.black,
    textFocus: palette.accent500,
    error: palette.negative500,
    primary: palette.brand500,
    successIcon: palette.success500,
    failIcon: palette.negative500,
    ...palette,
  },
  spacing: {
    none: 0,
    xxs: 4,
    xs: 8,
    s: 12,
    m: 16,
    l: 24,
    xl: 32,
    xxl: 40,
    auto: "auto",
  },

  badgeVariants: {
    warning: {
      backgroundColor: "warning100",
    },
  },
  badgeTextVariants: {
    warning: {
      color: "warning900",
    },
  },
  bannerVariants: {
    default: {
      backgroundColor: "gray100",
      borderColor: "gray300",
    },
    success: {
      backgroundColor: "success100",
      borderColor: "success300",
    },
    negative: {
      backgroundColor: "negative100",
      borderColor: "negative300",
    },
    warning: {
      backgroundColor: "warning100",
      borderColor: "warning900",
    },
  },
  bannerTextVariants: {
    default: {
      color: "gray900",
    },
    success: {
      color: "success500",
    },
    negative: {
      color: "negative500",
    },
    warning: {
      color: "warning900",
    },
  },
  buttonVariants: {
    primary: {
      backgroundColor: "brand500",
    },
    secondary: {
      backgroundColor: "transparent",
      borderColor: "brand500",
      borderWidth: 1,
    },
    negative: {
      backgroundColor: "negative500",
    },
    negativeTertiary: {
      backgroundColor: "transparent",
    },
  },
  buttonVariantsDisabled: {
    primary: {
      backgroundColor: "gray300",
    },
    secondary: {
      backgroundColor: "transparent",
      borderColor: "gray300",
    },
    negative: {
      backgroundColor: "gray100",
    },
    negativeTertiary: {
      backgroundColor: "transparent",
    },
    main: {
      backgroundColor: "brand500",
    },
  },
  buttonVariantsPressed: {
    //CAUTION: Please add colors from palette not the attributes inside theme
    primary: {
      backgroundColor: palette.brand600,
    },
    secondary: {
      backgroundColor: palette.brand100,
      borderColor: palette.brand500,
    },
    negative: {
      backgroundColor: palette.negative600,
    },
    negativeTertiary: {
      backgroundColor: palette.negative100,
    },
  },
  buttonTextVariants: {
    defaults: {
      fontSize: 14,
      fontFamily: "Roboto-Bold",
      lineHeight: 16,
    },
    primary: {
      color: "white",
    },
    secondary: {
      color: "brand500",
    },
    negative: {
      color: "white",
    },
    negativeTertiary: {
      color: "negative500",
    },
    disabled: {
      color: "gray400",
    },
  },
  radioIndicatorVariants: {
    defaults: {},
    active: {
      borderColor: "brand500",
      borderWidth: 8,
    },
    inactive: {
      backgroundColor: "transparent",
    },
  },
  textVariants: {
    defaults: {
      color: "gray900",
      fontFamily: "Roboto-Black",
      textAlign: "left",
    },
    headingXL: {
      fontSize: 32,
      fontFamily: "Roboto-Black",
    },
    headingL: {
      fontSize: 24,
      fontFamily: "Roboto-Black",
      lineHeight: 32,
    },
    headingM: {
      fontSize: 16,
      fontFamily: "Roboto-Black",
      lineHeight: 24,
    },
    headingS: {
      fontSize: 14,
      fontFamily: "Roboto-Bold",
      lineHeight: 20,
    },
    headingXS: {
      fontSize: 12,
      fontFamily: "Roboto-Bold",
      lineHeight: 16,
    },
    labelL: {
      fontSize: 16,
      fontFamily: "Roboto-Medium",
      lineHeight: 24,
    },
    labelM: {
      fontSize: 14,
      fontFamily: "Roboto-Medium",
      lineHeight: 16,
    },
    labelMB: {
      fontSize: 14,
      fontFamily: "Roboto-Bold",
      lineHeight: 16,
    },
    labelS: {
      fontSize: 12,
      fontFamily: "Roboto-Medium",
      lineHeight: 14,
    },
    paragraphsL: {
      fontSize: 16,
      fontFamily: "Roboto-Regular",
      lineHeight: 24,
    },
    paragraphsM: {
      fontSize: 14,
      fontFamily: "Roboto-Regular",
      lineHeight: 20,
    },
    paragraphsS: {
      fontSize: 12,
      fontFamily: "Roboto-Medium",
      lineHeight: 16,
    },
  },
  borderRadii: {
    s: 4,
    m: 8,
    l: 16,
    xl: 20,
    xxl: 40,
    full: 999,
  },
  inputVariants: {
    defaults: {
      // We can define defaults for the variant here.
      // This will be applied after the defaults passed to createVariant and before the variant defined below.
      backgroundColor: "textInputBackground",
    },
    datePicker: {},
    radioBox: {
      borderWidth: 0,
      backgroundColor: "transparent",
      paddingHorizontal: "none",
      paddingVertical: 0,
    },
    disabled: {
      backgroundColor: "gray300",
    },
    focused: {
      borderColor: "gray900",
    },
    error: {
      borderColor: "negative500",
    },
  },
});

export type Theme = typeof theme;

const useRestyleTheme = () => {
  return useTheme<Theme>();
};

export { theme, useRestyleTheme };
