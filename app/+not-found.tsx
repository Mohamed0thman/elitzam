import { Box, Typography } from "@/components";
import { Link, Stack } from "expo-router";
export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <Box flex={1} justifyContent="center" alignItems="center">
        <Typography>This screen doesn't exist.</Typography>
        <Link href="/">
          <Typography>Go to home screen!</Typography>
        </Link>
      </Box>
    </>
  );
}
