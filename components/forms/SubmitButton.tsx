import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

interface SubmitButtonProps {
  onPress: () => void;
  title?: string;
  iconName?: keyof typeof Ionicons.glyphMap;
  disabled?: boolean;
}

export default function SubmitButton({ 
  onPress, 
  title = "Submit",
  iconName = "checkmark-circle",
  disabled = false
}: SubmitButtonProps) {
  return (
    <Pressable 
      style={[styles.submitButton, disabled && styles.submitButtonDisabled]} 
      onPress={onPress}
      disabled={disabled}
    >
      <Ionicons name={iconName} size={20} color="#fff" />
      <Text style={styles.submitButtonText}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  submitButton: {
    backgroundColor: "#333",
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    marginTop: 20,
  },
  submitButtonDisabled: {
    backgroundColor: "#999",
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
