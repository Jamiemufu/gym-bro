import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import { useTheme } from "@/contexts/ThemeContext";

export default function RootLayout() {
  const { theme } = useTheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.textSecondary,
        tabBarStyle: {
          backgroundColor: theme.colors.background,
          borderTopColor: theme.colors.border,
        },
        tabBarItemStyle: {
          paddingVertical: 10,
        },
        animation: "shift",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <Ionicons name="home-outline" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="workout/index"
        options={{
          title: "Workout",
          tabBarIcon: ({ color }) => <Ionicons name="pulse-outline" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="mesocycle/index"
        options={{
          title: "Mesocycle",
          tabBarIcon: ({ color }) => <Ionicons name="disc-outline" size={24} color={color} />,
        }}
      />

      <Tabs.Screen
        name="progress/index"
        options={{
          title: "Progress",
          tabBarIcon: ({ color }) => <Ionicons name="trending-up-outline" size={24} color={color} />,
        }}
      />

      <Tabs.Screen
        name="exercise"
        options={{
          title: "Exercises",
          tabBarIcon: ({ color }) => <Ionicons name="barbell-outline" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
