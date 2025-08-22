import { DescriptionCard, EmptyState, ExerciseHero, ExerciseStats, ExerciseTips, LoadingState } from "@/components";
import { useTheme } from "@/contexts/ThemeContext";
import { useExercise } from "@/hooks/useExercises";
import { HERO_IMAGE } from "@/utils/constants";
import { useLocalSearchParams, useNavigation } from "expo-router";
import React, { useLayoutEffect } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

export default function ExerciseIdScreen() {
  const params = useLocalSearchParams();
  const navigation = useNavigation();
  const { exercise, loading, error } = useExercise(params.id);
  const { theme } = useTheme();

  // Set initial header options immediately to prevent [id] showing
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Exercise",
      headerBackTitle: "Exercises", 
      headerStyle: {
        backgroundColor: theme.colors.surface,
      },
      headerTintColor: theme.colors.text,
    });
  }, [navigation, theme]);

  // Update title when exercise loads
  useLayoutEffect(() => {
    if (exercise?.name) {
      navigation.setOptions({
        title: exercise.name,
        headerStyle: {
          backgroundColor: theme.colors.background,
        },
        headerTintColor: theme.colors.text,
      });
    }
  }, [exercise?.name, navigation, theme]);

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
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]} showsVerticalScrollIndicator={false}>
      <ExerciseHero 
        exerciseName={exercise.name}
        exerciseGroup={exercise.group}
        backgroundImage={HERO_IMAGE}
      />
      
      <View style={styles.contentSection}>
        <DescriptionCard description={exercise.description} />
        <ExerciseStats exercise={exercise} />
        <ExerciseTips />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentSection: {
    padding: 20,
    gap: 10,
  },
});