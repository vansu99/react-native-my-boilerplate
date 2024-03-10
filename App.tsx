import React, { Suspense } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar translucent backgroundColor={'transparent'} />
      <Suspense fallback={null}>
        <GestureHandlerRootView style={styles.root}></GestureHandlerRootView>
      </Suspense>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default App;
