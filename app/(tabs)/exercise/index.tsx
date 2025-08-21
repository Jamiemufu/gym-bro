import EmptyState from "@/components/EmptyState";
import LoadingState from "@/components/LoadingState";
import SearchBar from "@/components/SearchBar";
import SectionHeader from "@/components/SectionHeader";
import ExerciseCard from "@/components/exercise/ExerciseCard";
import { useExercises } from "@/hooks/useExercises";
import { exerciseGroupsToSections, filterExercisesByText, groupExercisesByGroup } from "@/utils/exerciseUtils";
import { useNavigation } from "expo-router";
import React, { useLayoutEffect, useMemo, useState } from "react";
import { SectionList, StyleSheet, View } from "react-native";

export default function ExerciseScreen() {
  const [searchText, setSearchText] = useState("");
  const navigation = useNavigation();
  const { exercises, loading, error } = useExercises();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Exercises",
    });
  }, [navigation]);

  const sections = useMemo(() => {
    const filteredExercises = filterExercisesByText(exercises, searchText);
    const groups = groupExercisesByGroup(filteredExercises);
    return exerciseGroupsToSections(groups);
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
      
      <SectionList
        style={styles.list}
        contentContainerStyle={styles.listContent}
        sections={sections}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <ExerciseCard exercise={item} />}
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
  list: {
    flex: 1,
  },
  listContent: {
    paddingBottom: 40,
  },
});
