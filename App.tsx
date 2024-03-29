import { THEMES } from './src/themes';
import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from './src/redux/store';
import { StyleSheet, StatusBar, ActivityIndicator } from 'react-native';
import NetworkState from './src/components/network-state';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './src/navigations/scene/root-scene';
import { navigationRef } from './src/navigations/navigation-service';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import DropdownAlert from 'react-native-dropdownalert';
import AlertHelper from './src/utils/alert';
import { PersistGate } from 'redux-persist/integration/react';
import { loadLocale } from '@/locales/i18next';

function App() {
  const onBeforeLift = () => {
    loadLocale();
  };

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <Suspense fallback={null}>
        <GestureHandlerRootView style={styles.root}>
          <Provider store={store}>
            <PersistGate
              loading={<ActivityIndicator />}
              persistor={persistor}
              onBeforeLift={onBeforeLift}>
              <NetworkState />
              <NavigationContainer
                ref={navigationRef}
                theme={{ ...DefaultTheme, colors: { ...DefaultTheme.colors } }}>
                <Navigation />
              </NavigationContainer>
              <DropdownAlert
                tapToCloseEnabled
                useNativeDriver
                ref={ref => AlertHelper.setDropDown(ref)}
                onClose={() => AlertHelper.invokeOnClose()}
                zIndex={THEMES.zIndexTopLevel}
                containerStyle={styles.dropdownAlertContainer}
              />
            </PersistGate>
          </Provider>
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
  dropdownAlertContainer: {
    zIndex: THEMES.zIndexTopLevel,
    elevation: 10,
  },
});

export default App;
