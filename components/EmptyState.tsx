import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface EmptyStateProps {
  message?: string;
  icon?: keyof typeof Ionicons.glyphMap;
}

export default function EmptyState({ message = "No items found", icon = "search" }: EmptyStateProps) {
  return (
    <View style={styles.container}>
      <Ionicons name={icon} size={48} color="#ccc" style={styles.icon} />
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
  icon: {
    marginBottom: 16,
  },
  text: {
    color: "#666",
    fontSize: 16,
    textAlign: "center",
  },
});
