import { Theme } from "@/theme";
import { createBox } from "@shopify/restyle";
import { Pressable, PressableProps } from "react-native";

const Box = createBox<Theme>();
const PressableBox = createBox<Theme, PressableProps>(Pressable);

export { Box, PressableBox };
