import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

interface ExerciseHeroProps {
  exerciseName: string;
  exerciseGroup: string;
  backgroundImage: { uri: string };
}

export default function ExerciseHero({ exerciseName, exerciseGroup, backgroundImage }: ExerciseHeroProps) {
  return (
    <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.heroSection} blurRadius={2}>
      <View style={styles.heroOverlay} />
      <View style={styles.heroContent}>
        <Text style={styles.heroTitle}>{exerciseName}</Text>
        <View style={styles.groupBadge}>
          <Text style={styles.groupBadgeText}>{exerciseGroup}</Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  heroSection: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  heroContent: {
    alignItems: 'center',
    zIndex: 1,
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: "800",
    color: '#fff',
    textAlign: 'center',
    marginBottom: 12,
    textTransform: "capitalize",
    textShadowColor: 'rgba(0,0,0,0.7)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  groupBadge: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  groupBadgeText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
});
