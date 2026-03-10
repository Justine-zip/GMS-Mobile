import { Ionicons } from '@expo/vector-icons';
import { Tabs } from "expo-router";
import React from "react";

export default function RootLayout() {
  return <Tabs
    screenOptions={{
      headerShown: false,
      tabBarStyle: { backgroundColor: '#fff', borderTopWidth: 0 },
      tabBarActiveTintColor: '#146EF5',
      tabBarInactiveTintColor: 'grey'
    }}
  >

    <Tabs.Screen
      name='home'
      options={{
        title: 'Home',
        tabBarIcon: ({ color, size }) => <Ionicons name='home-outline' color={color} size={size} />
      }}
    />

    <Tabs.Screen
      name='attendance'
      options={{
        title: 'Attendance',
        tabBarIcon: ({ color, size }) => <Ionicons name='document-text-outline' color={color} size={size} />
      }}
    />

    <Tabs.Screen
      name='notification'
      options={{
        title: 'Notification',
        tabBarIcon: ({ color, size }) => <Ionicons name='notifications-outline' color={color} size={size} />
      }}
    />

    <Tabs.Screen
      name='profile'
      options={{
        title: 'Profile',
        tabBarIcon: ({ color, size }) => <Ionicons name='person-circle-outline' color={color} size={size} />
      }}
    />

  </Tabs>;
}
