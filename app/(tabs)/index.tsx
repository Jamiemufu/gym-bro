import FeatureCard from "@/components/FeatureCard";
import { ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

// Use a gym/strength photo from Unsplash as the hero background
const HERO = {
  uri: "https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <ImageBackground source={HERO} resizeMode="cover" style={styles.hero} imageStyle={styles.heroImage} blurRadius={2}>
          <View style={styles.heroOverlay} />
          <View style={styles.heroContent}>
            <Text style={styles.heroTitle}>Gym Bro.</Text>
            <Text style={styles.heroSubtitle}>Train smart. Track progress. Look great.</Text>
          </View>
        </ImageBackground>
        <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <FeatureCard icon="calendar-outline" title="Plan Mesocycles" subtitle="Create structured training blocks" />
          <FeatureCard icon="barbell-outline" title="Log a workout" subtitle="Quickly record sets, reps & weight" />
          <FeatureCard icon="analytics-outline" title="Track progress" subtitle="Graphs & PR history" />
          <FeatureCard icon="time-outline" title="View history" subtitle="Browse previous sessions" />
          <FeatureCard icon="disc-outline" title="Set goals" subtitle="Bulk • Cut • Maintain" />
          <FeatureCard icon="list-outline" title="Custom exercises" subtitle="Create and save movements" />
          <FeatureCard icon="trending-up-outline" title="Auto progression" subtitle="Auto-adjust from lift history" />
          <FeatureCard icon="book-outline" title="Programs" subtitle="Browse curated plans" />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  hero: {
    height: 220,
    width: "100%",
    justifyContent: "flex-end",
  },
  scrollContainer: {
    flex: 1,
  },
  heroImage: {},
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.55)",
  },
  heroContent: {
    paddingHorizontal: 20,
    paddingBottom: 24,
  },
  heroTitle: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "800",
    textShadowColor: "rgba(0,0,0,0.6)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
  },
  heroSubtitle: {
    color: "#fff",
    fontSize: 14,
    marginTop: 6,
    opacity: 0.95,
    textShadowColor: "rgba(0,0,0,0.6)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 4,
  },
  content: {
    // content for the scroll view
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 20, // add bottom padding for scrolling
  },
  contentBlock: {
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 14,
    width: "48%",
    marginBottom: 14,
    // ensure consistent card height and centered content
    minHeight: 110,
    justifyContent: "center",
    // subtle border
    borderWidth: 1,
    borderColor: "#f0f0f0",
    // card shadow (iOS)
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    // elevation (Android)
    elevation: 3,
  },
  bodyText: {
    fontSize: 16,
    color: "#333",
  },
  bodySubText: {
    fontSize: 12,
    color: "#666",
    marginTop: 6,
  },
});
