import { createStackNavigator } from '@react-navigation/stack';
import { Host } from 'react-native-portalize';
import navigationConfigs from '../config/options';
import { APP_ROUTE } from '../config/routes';
import MainTabContainer from './tab-scene';

export type RootStackParamList = Record<string, any>;
const MainStack = createStackNavigator<RootStackParamList>();

const AppStack = () => (
  <Host>
    <MainStack.Navigator screenOptions={navigationConfigs}>
      <MainStack.Screen
        name={APP_ROUTE.MAIN_TAB}
        component={MainTabContainer}
      />
    </MainStack.Navigator>
  </Host>
);

const Navigation: React.FunctionComponent = () => {
  return <AppStack />;
};

export default Navigation;
