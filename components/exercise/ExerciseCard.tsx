import type { Exercise } from "@/types";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface ExerciseCardProps {
  exercise: Exercise;
  onPress?: (exercise: Exercise) => void;
  showEditButton?: boolean;
}

export default function ExerciseCard({ exercise, onPress, showEditButton = true }: ExerciseCardProps) {
  const router = useRouter();

  const handlePress = () => {
    if (onPress) {
      onPress(exercise);
    } else {
      router.push(`/exercise/${exercise.id}`);
    }
  };

  const handleEditPress = () => {
    router.push(`/exercise/${exercise.id}`);
  };

  return (
    <Pressable style={styles.item} onPress={handlePress}>
      <View style={styles.row}>
        <Ionicons name="barbell" size={24} color="#666" style={styles.icon} />
        <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
          {exercise.name}
        </Text>
        {showEditButton && (
          <Pressable onPress={handleEditPress} style={styles.editButton}>
            <Ionicons name="create-outline" size={24} color="#999" />
          </Pressable>
        )}
      </View>
      <Text style={styles.desc}>{exercise.description}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  item: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    backgroundColor: "#fff",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 8,
  },
  title: {
    flex: 1,
    fontWeight: "600",
    marginBottom: 4,
    textTransform: "capitalize",
  },
  desc: {
    color: "#666",
    marginTop: 4,
  },
  editButton: {
    marginLeft: 12,
    padding: 4,
  },
});
