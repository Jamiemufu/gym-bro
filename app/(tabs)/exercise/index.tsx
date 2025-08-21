import EmptyState from "@/components/EmptyState";
import LoadingState from "@/components/LoadingState";
import SearchBar from "@/components/SearchBar";
import SectionHeader from "@/components/SectionHeader";
import ExerciseCard from "@/components/exercise/ExerciseCard";
import { useExercises } from "@/hooks/useExercises";
import { filterExercisesByText, createSectionsWithCustom } from "@/utils/exerciseUtils";
import { useNavigation, useRouter } from "expo-router";
import React, { useLayoutEffect, useMemo, useState } from "react";
import { Pressable, SectionList, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ExerciseScreen() {
  const [searchText, setSearchText] = useState("");
  const navigation = useNavigation();
  const router = useRouter();
  const { exercises, loading, error } = useExercises();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Exercises",
    });
  }, [navigation]);

  const sections = useMemo(() => {
    const filteredExercises = filterExercisesByText(exercises, searchText);
    return createSectionsWithCustom(filteredExercises);
  }, [exercises, searchText]);

  if (loading) {
    return <LoadingState message="Loading exercises..." />;
  }

  if (error) {
    return <EmptyState message={`Error: ${error}`} icon="alert-circle" />;
  }

  return (
    <View style={styles.container}>
      <SearchBar
        value={searchText}
        onChangeText={setSearchText}
        placeholder="Search exercises..."
      />
      
      <Pressable 
        style={styles.createButton}
        onPress={() => router.push("/exercise/create")}
      >
        <Ionicons name="add-circle" size={20} color="#fff" />
        <Text style={styles.createButtonText}>Create Exercise</Text>
      </Pressable>
      
      <SectionList
        style={styles.list}
        contentContainerStyle={styles.listContent}
        sections={sections}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item, section }) => (
          <ExerciseCard 
            exercise={item} 
            showDeleteButton={item.userCreated && section.title === "Custom"}
          />
        )}
        renderSectionHeader={({ section: { title, data } }) => (
          <SectionHeader title={title} count={data.length} />
        )}
        ListEmptyComponent={
          <EmptyState message="No exercises found" icon="barbell" />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  createButton: {
    backgroundColor: "#333",
    marginHorizontal: 16,
    marginVertical: 12,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  createButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingBottom: 40,
  },
});
