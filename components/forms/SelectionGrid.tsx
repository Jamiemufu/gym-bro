import { useTheme } from "@/contexts/ThemeContext";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface SelectionGridProps<T extends string> {
  label: string;
  required?: boolean;
  options: readonly T[];
  selectedValue: T | "";
  onValueChange: (value: T) => void;
}

export default function SelectionGrid<T extends string>({ 
  label, 
  required = false,
  options, 
  selectedValue, 
  onValueChange 
}: SelectionGridProps<T>) {
  const { theme } = useTheme();

  return (
    <View style={styles.inputGroup}>
      <Text style={[styles.label, { color: theme.colors.text }]}>
        {label} {required && "*"}
      </Text>
      <View style={styles.selectionGrid}>
        {options.map((option) => (
          <Pressable
            key={option}
            style={[
              styles.selectionItem,
              {
                borderColor: theme.colors.border,
                backgroundColor: theme.colors.surface,
              },
              selectedValue === option && {
                backgroundColor: theme.colors.primary,
                borderColor: theme.colors.primary,
              },
            ]}
            onPress={() => onValueChange(option)}
          >
            <Text
              style={[
                styles.selectionText,
                { color: theme.colors.textSecondary },
                selectedValue === option && { color: theme.colors.buttonText }
              ]}
            >
              {option}
            </Text>
          </Pressable>
        ))}
      </View>
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
  selectionGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  selectionItem: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
  },
  selectionText: {
    fontSize: 14,
    fontWeight: "500",
    textTransform: "capitalize",
  },
  selectionTextActive: {
    color: "#fff",
  },
});
