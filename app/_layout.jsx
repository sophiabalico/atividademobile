import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#000000",
        tabBarInactiveTintColor: "#fff",
        tabBarStyle: {
          backgroundColor: "#e65503",
          borderTopWidth: 1,
          borderTopColor: "#E0E0E0",
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 5,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="news"
        options={{
          title: "Notícias",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="newspaper-sharp" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );    
}