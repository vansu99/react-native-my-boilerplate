import React, { memo } from 'react';
import { goBack } from '../navigations/navigation-service';
import { View, StyleSheet, StyleProp, ViewProps, ViewStyle, Text } from 'react-native';
import CustomTouchable from './custom-touchable';
import isEqual from 'react-fast-compare';
import CustomIcon from './custom-icon';
import { SPACINGS, COLORS } from '../themes';

export interface CustomHeaderProps extends ViewProps {
  isBack?: boolean;
  title?: string;
  iconAction?: any;
  customStyle?: StyleProp<ViewStyle>;
  onPressAction?(): void;
  isShadow?: boolean;
  customHandleBackPress?(): void;
}

function CustomHeader({
  isBack = true,
  title,
  iconAction,
  customStyle,
  onPressAction,
  isShadow = true,
  customHandleBackPress,
}: CustomHeaderProps) {
  const onBack = () => {
    if (customHandleBackPress) {
      customHandleBackPress();
      return;
    }
    goBack();
  };

  return (
    <View style={[styles.container, customStyle, isShadow && styles.shadow]}>
      <View style={styles.inner}>
        {isBack ? (
          <CustomTouchable
            onPress={onBack}
            customStyle={styles.btnBack}
          >
            <CustomIcon
              icon="ic_back"
              size={21}
            />
          </CustomTouchable>
        ) : (
          <View style={styles.btnBack} />
        )}
        <Text
          numberOfLines={1}
          style={styles.title}
        >
          {title || ''}
        </Text>
        {iconAction ? (
          <CustomTouchable
            onPress={onPressAction}
            customStyle={styles.btnAction}
          ></CustomTouchable>
        ) : (
          <View style={styles.btnAction} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    height: SPACINGS.HEADER_HEIGHT,
  },
  inner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 15,
  },
  shadow: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.17,
    shadowRadius: 5.49,
    elevation: 5,
  },
  btnBack: {
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnAction: {
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.black,
    maxWidth: '80%',
  },
});

export default memo(CustomHeader, isEqual);
