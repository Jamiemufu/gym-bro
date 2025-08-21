import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarItemStyle: {
          paddingVertical: 10,
        },
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
          tabBarIcon: () => <Ionicons name="fitness-outline" size={24} color="black" />,
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
        name="exercise/index"
        options={{
          title: "Exercises",
          tabBarIcon: () => <Ionicons name="barbell-outline" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="history/index"
        options={{
          title: "History",
          tabBarIcon: () => <Ionicons name="clipboard-outline" size={24} color="black" />,
        }}
      />
    </Tabs>
  );
}
