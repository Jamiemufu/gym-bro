import type { Exercise } from "@/types";
import { useTheme } from "@/contexts/ThemeContext";
import { getEquipmentIcon, getGroupIcon } from "@/utils/exerciseUtils";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface ExerciseStatsProps {
  exercise: Exercise;
}

export default function ExerciseStats({ exercise }: ExerciseStatsProps) {
  const { theme } = useTheme();

  return (
    <View style={styles.statsContainer}>
      <View style={[styles.statCard, { 
        backgroundColor: theme.colors.surface, 
        borderColor: theme.colors.border 
      }]}>
        <Ionicons name={getGroupIcon(exercise.group)} size={28} color={theme.colors.primary} />
        <Text style={[styles.statLabel, { color: theme.colors.textSecondary }]}>Muscle Group</Text>
        <Text style={[styles.statValue, { color: theme.colors.text }]}>{exercise.group}</Text>
      </View>
      <View style={[styles.statCard, { 
        backgroundColor: theme.colors.surface, 
        borderColor: theme.colors.border 
      }]}>
        <Ionicons name={getEquipmentIcon(exercise.equipment)} size={28} color={theme.colors.primary} />
        <Text style={[styles.statLabel, { color: theme.colors.textSecondary }]}>Equipment</Text>
        <Text style={[styles.statValue, { color: theme.colors.text }]}>{exercise.equipment}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  statsContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 20,
  },
  statCard: {
    flex: 1,
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
    borderWidth: 1,
  },
  statLabel: {
    fontSize: 12,
    marginTop: 8,
    textAlign: 'center',
  },
  statValue: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 4,
    textTransform: 'capitalize',
    textAlign: 'center',
  },
});
