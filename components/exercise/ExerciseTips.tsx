import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface TipItemProps {
  text: string;
}

function TipItem({ text }: TipItemProps) {
  return (
    <View style={styles.tipItem}>
      <Ionicons name="checkmark-circle" size={16} color="#333" />
      <Text style={styles.tipText}>{text}</Text>
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
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Ionicons name="bulb" size={24} color="#333" />
        <Text style={styles.cardTitle}>Tips & Form</Text>
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
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
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
    color: '#555',
    marginLeft: 8,
    lineHeight: 20,
  },
});
