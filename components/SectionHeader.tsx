import { useTheme } from "@/contexts/ThemeContext";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface SectionHeaderProps {
  title: string;
  count?: number;
  icon?: keyof typeof Ionicons.glyphMap;
}

export default function SectionHeader({ title, count, icon = "podium-outline" }: SectionHeaderProps) {
  const { theme } = useTheme();
  const displayTitle = count !== undefined ? `${title} (${count})` : title;

  return (
    <View style={[styles.header, { 
      backgroundColor: theme.colors.background, 
      borderBottomColor: theme.colors.border 
    }]}>
      <Ionicons name={icon} size={24} color={theme.colors.icon} />
      <Text style={[styles.headerTitle, { color: theme.colors.text }]}>{displayTitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 12,
  },
});
