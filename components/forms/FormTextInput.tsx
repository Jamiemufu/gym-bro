import { useTheme } from "@/contexts/ThemeContext";
import React from "react";
import { StyleSheet, Text, TextInput, TextInputProps, View } from "react-native";

interface FormTextInputProps extends TextInputProps {
  label: string;
  required?: boolean;
  isTextArea?: boolean;
}

export default function FormTextInput({ 
  label, 
  required = false, 
  isTextArea = false,
  style,
  ...textInputProps 
}: FormTextInputProps) {
  const { theme } = useTheme();

  return (
    <View style={styles.inputGroup}>
      <Text style={[styles.label, { color: theme.colors.text }]}>
        {label} {required && "*"}
      </Text>
      <TextInput
        style={[
          styles.textInput,
          {
            borderColor: theme.colors.border,
            backgroundColor: theme.colors.surface,
            color: theme.colors.text,
          },
          isTextArea && styles.textArea,
          style
        ]}
        placeholderTextColor={theme.colors.textSecondary}
        {...textInputProps}
        {...(isTextArea && {
          multiline: true,
          numberOfLines: 4,
          textAlignVertical: "top" as const,
          returnKeyType: "done" as const,
        })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputGroup: {
    gap: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  textArea: {
    height: 100,
    paddingTop: 12,
  },
});
