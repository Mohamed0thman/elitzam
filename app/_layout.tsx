import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import "react-native-reanimated";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import ErrorBoundary from "react-native-error-boundary";
import { theme } from "@/theme";
import { useLoadAssets } from "@/hooks/useLoadAssets";
import { ThemeProvider } from "@shopify/restyle";
import { SafeAreaProvider } from "react-native-safe-area-context";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export const queryClient = new QueryClient();

export default function RootLayout() {
  const { isLoaded } = useLoadAssets();
  if (!isLoaded) return null;

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <ErrorBoundary>
              <Stack>
                <Stack.Screen options={{ title: "" }} name="details" />
                <Stack.Screen name="+not-found" />
              </Stack>
            </ErrorBoundary>
          </GestureHandlerRootView>
        </SafeAreaProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
