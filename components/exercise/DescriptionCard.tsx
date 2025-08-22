import { useTheme } from "@/contexts/ThemeContext";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface DescriptionCardProps {
  description: string;
  title?: string;
  icon?: keyof typeof Ionicons.glyphMap;
}

export default function DescriptionCard({ 
  description, 
  title = "Description", 
  icon = "document-text" 
}: DescriptionCardProps) {
  const { theme } = useTheme();

  return (
    <View style={[styles.card, { 
      backgroundColor: theme.colors.surface, 
      borderColor: theme.colors.border 
    }]}>
      <View style={styles.cardHeader}>
        <Ionicons name={icon} size={24} color={theme.colors.primary} />
        <Text style={[styles.cardTitle, { color: theme.colors.text }]}>{title}</Text>
      </View>
      <Text style={[styles.description, { color: theme.colors.textSecondary }]}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 12,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
  },
});
