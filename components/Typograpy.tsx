import { Theme } from "@/theme";
import { createText } from "@shopify/restyle";
import { Text, TextProps } from "react-native";

const Typography = createText<Theme, TextProps>(Text);
export { Typography };
