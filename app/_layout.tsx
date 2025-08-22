import ThemeToggleHeader from "@/components/ThemeToggleHeader";
import { ThemeProvider, useTheme } from "@/contexts/ThemeContext";
import { useAppInit } from "@/hooks/useAppInit";
import { Slot } from "expo-router";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function RootLayoutContent() {
  const { isInitialized, initError } = useAppInit();
  const { theme } = useTheme();

  // Show loading screen while app initializes
  if (!isInitialized) {
    return (
      <SafeAreaView style={[styles.loadingContainer, { backgroundColor: theme.colors.surface }]}>
        <View style={styles.loadingContent}>
          <ActivityIndicator size="large" color={theme.colors.primary} />
          <Text style={[styles.loadingText, { color: theme.colors.textSecondary }]}>
            Initializing Gymbro...
          </Text>
          {initError && (
            <Text style={[styles.errorText, { color: theme.colors.destructive }]}>
              Error: {initError}
            </Text>
          )}
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView 
      style={[{ flex: 1 }, { backgroundColor: theme.colors.background }]} 
      edges={["top"]}
    >
      <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
        <View style={[styles.header, { borderBottomColor: theme.colors.border }]}>
          <Text style={[styles.title, { color: theme.colors.text }]}>Gymbro</Text>
          <ThemeToggleHeader />
        </View>

        {/* nested routes (including (tabs)) will render here */}
        <View style={styles.content}>
          <Slot />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <RootLayoutContent />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingContent: {
    alignItems: "center",
    padding: 20,
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    fontWeight: "500",
  },
  errorText: {
    marginTop: 12,
    fontSize: 14,
    textAlign: "center",
    paddingHorizontal: 20,
  },
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    backgroundColor: "transparent", // let container show through
  },
});