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
  return (
    <View style={styles.inputGroup}>
      <Text style={styles.label}>
        {label} {required && "*"}
      </Text>
      <TextInput
        style={[
          styles.textInput,
          isTextArea && styles.textArea,
          style
        ]}
        placeholderTextColor="#999"
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
    color: "#333",
    marginBottom: 4,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: "#f8f9fa",
  },
  textArea: {
    height: 100,
    paddingTop: 12,
  },
});
