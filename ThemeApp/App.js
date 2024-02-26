import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper'; // Assuming you're using PaperProvider from react-native-paper
import MainAppBar from './components/MainAppBar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home'; // Assuming Home component is defined in 'Home.js'
import Settings from './screens/Settings'; // Assuming Settings component is defined in 'Settings.js'
import { ThemeContext } from './context/ThemeContext';
import ThemeProvider from "./context/ThemeProvider"

export default function App() {
  const Stack = createNativeStackNavigator()

  return (
    <PaperProvider>
      <ThemeProvider>
      <NavigationContainer>
        <StatusBar backgroundColor="#666" barStyle="light-content" />
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            header: (props) => (
              <MainAppBar
                {...props}
                backgroundColor="#666"
                icon="cog"
                color="#fff"
              />
            ),
          }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
      </NavigationContainer>
      </ThemeProvider>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
