import React, { Suspense } from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './src/navigations/scene/root-scene';
import { navigationRef } from './src/navigations/navigation-service';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle='dark-content' backgroundColor='transparent' />
      <Suspense fallback={null}>
        <GestureHandlerRootView style={styles.root}>
          <NavigationContainer
            ref={navigationRef}
            theme={{ ...DefaultTheme, colors: { ...DefaultTheme.colors } }}>
            <Navigation />
          </NavigationContainer>
        </GestureHandlerRootView>
      </Suspense>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
