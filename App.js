import React from "react";
import { NavigationContainer } from "@react-navigation/native";
// Navigation
import TabNavigator from './src/Navigation/TabNavigator'

const App = () => {
  return (
    <NavigationContainer>
      <TabNavigator/>
    </NavigationContainer>
  )
}
export default App;
