import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#000",
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
          tabBarIcon: () => <Ionicons name="home-outline" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="workout/index"
        options={{
          title: "Workout",
          tabBarIcon: () => <Ionicons name="pulse-outline" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="mesocycle/index"
        options={{
          title: "Mesocycle",
          tabBarIcon: () => <Ionicons name="disc-outline" size={24} color="black" />,
        }}
      />

      <Tabs.Screen
        name="progress/index"
        options={{
          title: "Progress",
          tabBarIcon: () => <Ionicons name="trending-up-outline" size={24} color="black" />,
        }}
      />

      <Tabs.Screen
        name="exercise"
        options={{
          title: "Exercises",
          tabBarIcon: () => <Ionicons name="barbell-outline" size={24} color="black" />,
        }}
      />
    </Tabs>
  );
}
