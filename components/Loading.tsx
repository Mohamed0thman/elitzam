import { ActivityIndicator, ActivityIndicatorProps } from "react-native";
import React from "react";
import { Box } from "./Box";

type Props = ActivityIndicatorProps & {};

export const Loading = ({ ...otherProps }: Props) => {
  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      <ActivityIndicator color={"blue"} {...otherProps} />
    </Box>
  );
};
