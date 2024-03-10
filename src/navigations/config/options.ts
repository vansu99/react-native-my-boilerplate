import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import {
  CardStyleInterpolators,
  StackNavigationOptions,
} from '@react-navigation/stack';
import { Platform } from 'react-native';
import transition from './transition';

const navigationConfigs: StackNavigationOptions = {
  headerShown: false,
  gestureEnabled: true,
  keyboardHandlingEnabled: Platform.OS === 'ios',
  cardOverlayEnabled: true,
  cardShadowEnabled: true,
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  cardStyle: {
    backgroundColor: 'white',
  },
  transitionSpec: {
    open: transition,
    close: transition,
  },
};

export const tabScreenOptions: BottomTabNavigationOptions = {
  headerShown: false,
};

export default navigationConfigs;
