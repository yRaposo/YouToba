import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { darkTheme } from "../styles/globals";

import VideoPage from "./public/videoPage";
import Home from "./public/home";
import { Icon } from "@rneui/base";
import Profile from "./private/profile";
import Subscriptions from "./private/subscriptions";
import ShortsScreen from "./public/shorts";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;
            let color;
            if (route.name === "Home") {
              iconName = "home";
              color = focused
                ? darkTheme.colors.textPrimary
                : darkTheme.colors.textSecondary;
            }
            return <Icon name={iconName} color={color} size={24} />;
          },
          headerShown: false,
          tabBarStyle: {
            backgroundColor: darkTheme.colors.backgroundPrimary,
            borderColor: darkTheme.colors.backgroundSecondary,
          },
          tabBarActiveTintColor: darkTheme.colors.textPrimary,
          tabBarInactiveTintColor: darkTheme.colors.textSecondary,
        })}
      >
        <Stack.Screen name="Home" component={TabNavigator} />
        <Stack.Screen name="VideoPage" component={VideoPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          let color;
          if (route.name === "Home") {
            iconName = "home";
            color = focused
              ? darkTheme.colors.textPrimary
              : darkTheme.colors.textSecondary;
          }
          if (route.name === "Você") {
            iconName = "person";
            color = focused
              ? darkTheme.colors.textPrimary
              : darkTheme.colors.textSecondary;
          }
          if (route.name === "Inscrições") {
            iconName = "subscriptions";
            color = focused
              ? darkTheme.colors.textPrimary
              : darkTheme.colors.textSecondary;
          }
          if (route.name === "Shorts") {
            iconName = "play-circle";
            color = focused
              ? darkTheme.colors.textPrimary
              : darkTheme.colors.textSecondary;
          }
          return <Icon name={iconName} color={color} size={24} />;
        },
        headerShown: false,
        tabBarStyle: {
          backgroundColor: darkTheme.colors.backgroundPrimary,
          borderColor: darkTheme.colors.backgroundSecondary,
        },
        tabBarActiveTintColor: darkTheme.colors.textPrimary,
        tabBarInactiveTintColor: darkTheme.colors.textSecondary,
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Shorts" component={ShortsScreen} />
      <Tab.Screen name="Inscrições" component={Subscriptions} />
      <Tab.Screen name="Você" component={Profile} />
    </Tab.Navigator>
  );
}
