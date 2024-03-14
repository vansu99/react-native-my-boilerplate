import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import navigationConfigs, { tabScreenOptions } from '../config/options';
import { TAB_NAVIGATION_ROOT } from '../config/routes';
import HomeScreen from '../../screens/home';
import AccountScreen from '../../screens/account';
import StyledTabBar from '../components/styled-tab-bar';
import type { RootTabTypes } from '../../types/route';

const MainStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

const HomeStack = () => (
  <MainStack.Navigator screenOptions={navigationConfigs}>
    <MainStack.Screen
      name={TAB_NAVIGATION_ROOT.HOME_ROUTE.HOME}
      component={HomeScreen}
    />
  </MainStack.Navigator>
);

const AccountStack = () => (
  <MainStack.Navigator screenOptions={navigationConfigs}>
    <MainStack.Screen
      name={TAB_NAVIGATION_ROOT.ACCOUNT_ROUTE.ACCOUNT}
      component={AccountScreen}
    />
  </MainStack.Navigator>
);

const MainTabContainer = () => {
  const tabList: RootTabTypes[] = [
    {
      name: TAB_NAVIGATION_ROOT.HOME_ROUTE.ROOT,
      title: 'Home',
      component: HomeStack,
      icon: 'ic_home',
    },
    {
      name: TAB_NAVIGATION_ROOT.ACCOUNT_ROUTE.ROOT,
      title: 'Account',
      component: AccountStack,
      icon: 'ic_person',
    },
  ];

  return (
    <MainTab.Navigator
      screenOptions={tabScreenOptions}
      tabBar={(props: BottomTabBarProps) => <StyledTabBar {...props} />}>
      {tabList.map((item, index) => (
        <MainTab.Screen key={`tab_${index}`} options={{ ...item }} {...item} />
      ))}
    </MainTab.Navigator>
  );
};

export default MainTabContainer;
