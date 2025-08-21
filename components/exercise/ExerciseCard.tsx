import { useDeleteExercise } from "@/hooks/useExercises";
import type { Exercise } from "@/types";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import React from "react";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";

interface ExerciseCardProps {
  exercise: Exercise;
  onPress?: (exercise: Exercise) => void;
  showEditButton?: boolean;
  showDeleteButton?: boolean;
}

export default function ExerciseCard({ 
  exercise, 
  onPress, 
  showEditButton = false,
  showDeleteButton = false 
}: ExerciseCardProps) {
  const router = useRouter();
  const { deleteExercise, loading: isDeleting } = useDeleteExercise();

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

  const handleDeletePress = () => {
    Alert.alert(
      "Delete Exercise",
      "Are you sure you want to delete this exercise?",
      [
        {
          text: "No",
          style: "cancel",
        },
        {
          text: "Yes",
          style: "destructive",
          onPress: async () => {
            try {
              await deleteExercise(exercise.id!);
            } catch (deleteError) {
              console.error("Delete error:", deleteError);
              Alert.alert("Error", "Failed to delete exercise. Please try again.");
            }
          },
        },
      ]
    );
  };

  return (
    <Pressable style={styles.item} onPress={handlePress} disabled={isDeleting}>
      <View style={styles.row}>
        <View style={styles.content}>
          <View style={styles.titleRow}>
            <Ionicons name="barbell" size={24} color="#666" style={styles.icon} />
            <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
              {exercise.name}
            </Text>
          </View>
          <Text style={styles.desc}>{exercise.description}</Text>
        </View>
        <View style={styles.actions}>
          {showEditButton && (
            <Pressable onPress={handleEditPress} style={styles.actionButton}>
              <Ionicons name="create-outline" size={24} color="#999" />
            </Pressable>
          )}
          {showDeleteButton && (
            <Pressable 
              onPress={handleDeletePress} 
              style={[styles.actionButton, styles.deleteButton]}
              disabled={isDeleting}
            >
              <Ionicons 
                name="trash-outline" 
                size={24} 
                color={isDeleting ? "#ccc" : "#e74c3c"} 
              />
            </Pressable>
          )}
        </View>
      </View>
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
    alignItems: "flex-start",
  },
  content: {
    flex: 1,
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  icon: {
    marginRight: 8,
  },
  title: {
    flex: 1,
    fontWeight: "600",
    textTransform: "capitalize",
  },
  desc: {
    color: "#666",
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 8,
  },
  actionButton: {
    marginLeft: 8,
    padding: 4,
  },
  deleteButton: {
    marginLeft: 4,
  },
  editButton: {
    marginLeft: 12,
    padding: 4,
  },
});
