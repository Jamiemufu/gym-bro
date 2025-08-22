import { useTheme } from "@/contexts/ThemeContext";
import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

interface LoadingStateProps {
  message?: string;
  showSpinner?: boolean;
}

export default function LoadingState({ message = "Loading...", showSpinner = true }: LoadingStateProps) {
  const { theme } = useTheme();

  return (
    <View style={styles.container}>
      {showSpinner && <ActivityIndicator size="large" color={theme.colors.primary} style={styles.spinner} />}
      <Text style={[styles.text, { color: theme.colors.textSecondary }]}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  spinner: {
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
  },
});
