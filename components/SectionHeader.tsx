import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface SectionHeaderProps {
  title: string;
  count?: number;
  icon?: keyof typeof Ionicons.glyphMap;
}

export default function SectionHeader({ title, count, icon = "podium-outline" }: SectionHeaderProps) {
  const displayTitle = count !== undefined ? `${title} (${count})` : title;

  return (
    <View style={styles.header}>
      <Ionicons name={icon} size={24} color="#666" />
      <Text style={styles.headerTitle}>{displayTitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
});
