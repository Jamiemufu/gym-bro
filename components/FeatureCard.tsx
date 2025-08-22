import { useTheme } from "@/contexts/ThemeContext";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  title: string;
  subtitle?: string;
  icon?: string;
  iconColor?: string;
  iconSize?: number;
  onPress?: (e: GestureResponderEvent) => void;
};

export default function FeatureCard({ title, subtitle, icon, iconColor, iconSize = 20, onPress }: Props) {
  const { theme } = useTheme();
  
  return (
    <TouchableOpacity activeOpacity={0.85} onPress={onPress} style={styles.touch}>
      <View style={[styles.card, { backgroundColor: theme.colors.cardBackground, borderColor: theme.colors.border }]}>
        {/* Icon row */}
        <View style={styles.iconRow}>
          {icon ? (
            <Ionicons 
              name={icon as any} 
              size={iconSize} 
              color={iconColor || theme.colors.primary} 
              style={styles.icon} 
            />
          ) : null}
        </View>

        {/* Title row */}
        <View style={styles.titleRow}>
          <Text style={[styles.title, { color: theme.colors.text }]} numberOfLines={2} ellipsizeMode="tail">
            {title}
          </Text>
        </View>

        {/* Subtitle / content row */}
        {subtitle ? (
          <Text style={[styles.subtitleFull, { color: theme.colors.textSecondary }]}>
            {subtitle}
          </Text>
        ) : null}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  touch: {
    width: "48%",
    marginBottom: 14,
  },
  card: {
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 14,
    minHeight: 110,
    justifyContent: "flex-start",
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 3,
  },
  row: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  iconRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 8,
  },
  titleRow: {
    marginBottom: 8,
  },
  icon: {
    marginRight: 10,
    alignSelf: "flex-start",
  },
  textWrap: {
    flex: 1,
    justifyContent: "flex-start",
  },
  titleWrap: {
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
  },
  subtitle: {
    fontSize: 12,
    marginTop: 6,
  },
  subtitleFull: {
    fontSize: 12,
  },
});
