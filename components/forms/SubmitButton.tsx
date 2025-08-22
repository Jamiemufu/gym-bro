import { useTheme } from "@/contexts/ThemeContext";
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
  const { theme } = useTheme();

  return (
    <Pressable 
      style={[
        styles.submitButton, 
        { backgroundColor: theme.colors.primary },
        disabled && { backgroundColor: theme.colors.textSecondary }
      ]} 
      onPress={onPress}
      disabled={disabled}
    >
      <Ionicons name={iconName} size={20} color={theme.colors.background} />
      <Text style={[styles.submitButtonText, { color: theme.colors.background }]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  submitButton: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    marginTop: 20,
  },
  submitButtonText: {
    fontSize: 16,
    fontWeight: "600",
  },
});
