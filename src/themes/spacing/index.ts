import { Dimensions } from 'react-native';

export const SPACINGS = {
  HEADER_HEIGHT: 50,
  TAB_HEIGHT: 60,
  WINDOW_WIDTH: Dimensions.get('window').width,
  WINDOW_HEIGHT: Dimensions.get('window').height,
} as const;
