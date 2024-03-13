import React, { memo } from 'react';
import { ColorValue } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { icons } from '../assets/icons';

export type IconKey = keyof typeof icons;
export type CustomIconProps = {
  color?: ColorValue;
  icon: IconKey;
  size?: number;
};

function CustomIcon({ icon, color = '#000000', size = 30 }: CustomIconProps) {
  return (
    <SvgXml
      xml={icons[icon]?.toString()}
      width={size}
      height={size}
      color={color}
    />
  );
}

export default memo(CustomIcon);
