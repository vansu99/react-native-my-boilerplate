import CustomTouchable from '../../components/custom-touchable';
import React from 'react';
import Image from 'react-native-fast-image';
import { Text, View, StyleSheet, Platform } from 'react-native';

const StyledTabBar = ({ state, descriptors, navigation }: any) => {
  return (
    <View style={styles.tabContainer}>
      {state?.routes?.map((route: any, index: any) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <CustomTouchable
            accessibilityRole="button"
            accessibilityLabel={options.tabBarAccessibilityLabel}
            onPress={onPress}
            onLongPress={onLongPress}
            key={route.key}
            customStyle={[styles.tabButton]}>
            <Image
              source={options?.icon}
              resizeMode="contain"
              style={[styles.tabIcon]}
            />
            <Text style={styles.tabLabel}>{options?.title || ''}</Text>
          </CustomTouchable>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    height: '8%',
    borderTopWidth: 1,
    borderTopColor: '#DEE2E6',
    justifyContent: 'space-around',
    alignItems: Platform.OS === 'ios' ? 'flex-end' : 'center',
  },
  tabButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabIcon: {
    width: 22,
    height: 22,
    marginBottom: 1,
  },
  tabLabel: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '500',
  },
});

export default StyledTabBar;