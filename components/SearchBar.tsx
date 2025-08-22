import { useTheme } from "@/contexts/ThemeContext";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

export default function SearchBar({ value, onChangeText, placeholder = "Search..." }: SearchBarProps) {
  const { theme } = useTheme();
  
  return (
    <View style={[styles.searchContainer, { 
      backgroundColor: theme.colors.background, 
    }]}>
      <Ionicons name="search" size={20} color={theme.colors.icon} />
      <TextInput 
        placeholder={placeholder} 
        placeholderTextColor={theme.colors.textSecondary}
        value={value} 
        onChangeText={onChangeText} 
        style={[styles.input, { color: theme.colors.text }]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  input: {
    flex: 1,
  },
});
