import type { Exercise } from "@/types";
import { getEquipmentIcon, getGroupIcon } from "@/utils/exerciseUtils";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface ExerciseStatsProps {
  exercise: Exercise;
}

export default function ExerciseStats({ exercise }: ExerciseStatsProps) {
  return (
    <View style={styles.statsContainer}>
      <View style={styles.statCard}>
        <Ionicons name={getGroupIcon(exercise.group)} size={28} color="#333" />
        <Text style={styles.statLabel}>Muscle Group</Text>
        <Text style={styles.statValue}>{exercise.group}</Text>
      </View>
      <View style={styles.statCard}>
        <Ionicons name={getEquipmentIcon(exercise.equipment)} size={28} color="#333" />
        <Text style={styles.statLabel}>Equipment</Text>
        <Text style={styles.statValue}>{exercise.equipment}</Text>
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
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 8,
    textAlign: 'center',
  },
  statValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginTop: 4,
    textTransform: 'capitalize',
    textAlign: 'center',
  },
});
