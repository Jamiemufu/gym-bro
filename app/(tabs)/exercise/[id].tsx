import LoadingState from "@/components/LoadingState";
import EmptyState from "@/components/EmptyState";
import { useExercise } from "@/hooks/useExercises";
import { useLocalSearchParams, useNavigation } from "expo-router";
import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ExerciseIdScreen() {
  const params = useLocalSearchParams();
  const navigation = useNavigation();
  const { exercise, loading, error } = useExercise(params.id);

  useLayoutEffect(() => {
    if (!exercise) return;
    navigation.setOptions({
      title: exercise.name,
      headerBackTitle: "Exercises",
    });
  }, [exercise, navigation]);

  if (loading) {
    return <LoadingState message="Loading exercise..." />;
  }

  if (error) {
    return <EmptyState message={`Error: ${error}`} icon="alert-circle" />;
  }

  if (!exercise) {
    return <EmptyState message="Exercise not found" icon="search" />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{exercise.name}</Text>
      <Text style={styles.group}>Group: {exercise.group}</Text>
      <Text style={styles.description}>{exercise.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    textTransform: "capitalize",
  },
  group: {
    fontSize: 16,
    color: "#666",
    marginBottom: 16,
    textTransform: "capitalize",
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333",
  },
});
