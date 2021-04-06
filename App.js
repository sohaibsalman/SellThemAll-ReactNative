import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, View } from "react-native";
import AppButton from "./app/components/AppButton";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <AppButton title="Login" onPress={() => console.log("tapped")} />
    </View>
  );
}
