import { db } from "@/db/db-init";
import { exercisesTable } from "@/db/schema";
import type { Exercise } from "@/types";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function ExerciseScreen() {
  const [exercises, setExercises] = useState<Exercise[]>([]);

  useEffect(() => {
    db.select().from(exercisesTable).then(setExercises);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={exercises}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.desc}>{item.description}</Text>
          </View>
        )}
        ListEmptyComponent={<Text>No exercises yet</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  item: { paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: "#eee" },
  title: { fontWeight: "600", marginBottom: 4 },
  desc: { color: "#666" },
});