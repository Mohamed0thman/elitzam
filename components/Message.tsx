import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Box } from "./Box";
import { Typography } from "./Typograpy";

type Props = {
  message: string;
};

export const Message = ({ message }: Props) => {
  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      <Typography>{message}</Typography>
    </Box>
  );
};
