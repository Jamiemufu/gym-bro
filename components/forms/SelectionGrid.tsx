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
  return (
    <View style={styles.inputGroup}>
      <Text style={styles.label}>
        {label} {required && "*"}
      </Text>
      <View style={styles.selectionGrid}>
        {options.map((option) => (
          <Pressable
            key={option}
            style={[
              styles.selectionItem,
              selectedValue === option && styles.selectionItemActive,
            ]}
            onPress={() => onValueChange(option)}
          >
            <Text
              style={[
                styles.selectionText,
                selectedValue === option && styles.selectionTextActive,
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
    color: "#333",
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
    borderColor: "#e0e0e0",
    backgroundColor: "#f8f9fa",
  },
  selectionItemActive: {
    backgroundColor: "#333",
    borderColor: "#333",
  },
  selectionText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#666",
    textTransform: "capitalize",
  },
  selectionTextActive: {
    color: "#fff",
  },
});
