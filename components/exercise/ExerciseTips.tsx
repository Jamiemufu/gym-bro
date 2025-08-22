import { useTheme } from "@/contexts/ThemeContext";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface TipItemProps {
  text: string;
}

function TipItem({ text }: TipItemProps) {
  const { theme } = useTheme();

  return (
    <View style={styles.tipItem}>
      <Ionicons name="checkmark-circle" size={16} color={theme.colors.primary} />
      <Text style={[styles.tipText, { color: theme.colors.textSecondary }]}>{text}</Text>
    </View>
  );
}

interface ExerciseTipsProps {
  tips?: string[];
}

const DEFAULT_TIPS = [
  "Focus on proper form over heavy weight",
  "Control the movement on both eccentric and concentric phases", 
  "Maintain steady breathing throughout the exercise"
];

export default function ExerciseTips({ tips = DEFAULT_TIPS }: ExerciseTipsProps) {
  const { theme } = useTheme();

  return (
    <View style={[styles.card, { 
      backgroundColor: theme.colors.surface, 
      borderColor: theme.colors.border 
    }]}>
      <View style={styles.cardHeader}>
        <Ionicons name="bulb" size={24} color={theme.colors.primary} />
        <Text style={[styles.cardTitle, { color: theme.colors.text }]}>Tips & Form</Text>
      </View>
      <View style={styles.tipsList}>
        {tips.map((tip, index) => (
          <TipItem key={index} text={tip} />
        ))}
      </View>
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
  tipsList: {
    gap: 12,
  },
  tipItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  tipText: {
    flex: 1,
    fontSize: 14,
    marginLeft: 8,
    lineHeight: 20,
  },
});
