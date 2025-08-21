import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

export default function SearchBar({ value, onChangeText, placeholder = "Search..." }: SearchBarProps) {
  return (
    <View style={styles.searchContainer}>
      <Ionicons name="search" size={20} color="#999" />
      <TextInput 
        placeholder={placeholder} 
        value={value} 
        onChangeText={onChangeText} 
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    padding: 20,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  input: {
    flex: 1,
  },
});
