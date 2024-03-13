import React, { FunctionComponent } from 'react';
import {
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import throttle from 'lodash-es/throttle';

interface StyledTouchableProps extends TouchableOpacityProps {
  customStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
  onPress?(): void;
  onPressIn?(): void;
  onPressOut?(): void;
  onLongPress?(): void;
  children?: any;
  throttleTime?: number;
}

const configThrottle = { trailing: false };
const onPressDefault = () => null;

const CustomTouchable: FunctionComponent<StyledTouchableProps> = (
  props: Omit<StyledTouchableProps, 'style'>,
) => {
  const {
    customStyle,
    disabled,
    children,
    throttleTime = 1000,
    onPress = onPressDefault,
  } = props;

  const handlePress = throttle(onPress, throttleTime, configThrottle);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      disabled={disabled}
      style={customStyle}
      {...props}
      onPress={handlePress}>
      {children}
    </TouchableOpacity>
  );
};

export default CustomTouchable;
