import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

interface LoadingStateProps {
  message?: string;
  showSpinner?: boolean;
}

export default function LoadingState({ message = "Loading...", showSpinner = true }: LoadingStateProps) {
  return (
    <View style={styles.container}>
      {showSpinner && <ActivityIndicator size="large" color="#666" style={styles.spinner} />}
      <Text style={styles.text}>{message}</Text>
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
    color: "#666",
    fontSize: 16,
  },
});
