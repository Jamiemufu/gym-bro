import { HERO_IMAGE } from "@/utils/constants";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

interface CreateExerciseHeroProps {
  title?: string;
  subtitle?: string;
  iconName?: keyof typeof Ionicons.glyphMap;
}

export default function CreateExerciseHero({ 
  title = "Create New Exercise",
  subtitle = "Add a custom exercise to your library",
  iconName = "add-circle"
}: CreateExerciseHeroProps) {
  return (
    <ImageBackground source={HERO_IMAGE} resizeMode="cover" style={styles.heroSection} blurRadius={2}>
      <View style={styles.heroOverlay} />
      <View style={styles.heroContent}>
        <Ionicons name={iconName} size={48} color="white" />
        <Text style={styles.heroTitle}>{title}</Text>
        <Text style={styles.heroSubtitle}>{subtitle}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  heroSection: {
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  heroContent: {
    alignItems: "center",
    zIndex: 1,
  },
  heroTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#fff",
    textAlign: "center",
    marginTop: 12,
    marginBottom: 8,
  },
  heroSubtitle: {
    fontSize: 16,
    color: "rgba(255, 255, 255, 0.8)",
    textAlign: "center",
  },
});
