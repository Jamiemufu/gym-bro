import { CreateExerciseHero, FormTextInput, LoadingState, SelectionGrid, SubmitButton } from "@/components";
import { useTheme } from "@/contexts/ThemeContext";
import { useCreateExercise } from "@/hooks/useExercises";
import { EQUIPMENT_TYPES, MUSCLE_GROUPS, transformFormDataForSubmission, validateExerciseForm, type ExerciseFormData } from "@/utils";
import { useNavigation, useRouter } from "expo-router";
import React, { useLayoutEffect, useState } from "react";
import { Alert, Keyboard, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, TouchableWithoutFeedback, View } from "react-native";

export default function CreateExerciseScreen() {
  const navigation = useNavigation();
  const router = useRouter();
  const { createExercise, loading: isSubmitting } = useCreateExercise();
  const { theme } = useTheme();
  const [formData, setFormData] = useState<ExerciseFormData>({
    name: "",
    description: "",
    group: "",
    equipment: "",
  });

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Create Exercise",
      headerBackTitle: "Exercises",
      headerStyle: {
        backgroundColor: theme.colors.background,
      },
      headerTintColor: theme.colors.text,
    });
  }, [navigation, theme]);

  const handleSubmit = async () => {
    // Validate form using utility function
    const validationError = validateExerciseForm(formData);
    if (validationError) {
      Alert.alert("Error", validationError);
      return;
    }

    try {
      const exerciseData = transformFormDataForSubmission(formData);
      await createExercise(exerciseData);

      Alert.alert("Success", "Exercise created successfully!", [
        {
          text: "OK",
          onPress: () => router.back(),
        },
      ]);
    } catch (error) {
      console.error("Failed to create exercise:", error);
      Alert.alert("Error", "Failed to create exercise. Please try again.");
    }
  };

  if (isSubmitting) {
    return <LoadingState message="Creating exercise..." />;
  }

  return (
        <KeyboardAvoidingView style={[styles.container, { backgroundColor: theme.colors.background }]} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          <CreateExerciseHero />

          <View style={styles.formSection}>
            <FormTextInput label="Exercise Name" required value={formData.name} onChangeText={(text: string) => setFormData({ ...formData, name: text })} placeholder="e.g., Bench Press" returnKeyType="next" />

            <FormTextInput label="Description" required isTextArea value={formData.description} onChangeText={(text: string) => setFormData({ ...formData, description: text })} placeholder="Describe how to perform this exercise..." />

            <SelectionGrid label="Muscle Group" required options={MUSCLE_GROUPS} selectedValue={formData.group} onValueChange={(group) => setFormData({ ...formData, group })} />

            <SelectionGrid label="Equipment" required options={EQUIPMENT_TYPES} selectedValue={formData.equipment} onValueChange={(equipment) => setFormData({ ...formData, equipment })} />

            <SubmitButton title="Create Exercise" onPress={handleSubmit} disabled={isSubmitting} />
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  formSection: {
    padding: 20,
    gap: 24,
    paddingBottom: 40, // Extra padding for keyboard
  },
});
