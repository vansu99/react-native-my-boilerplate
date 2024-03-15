import { Dimensions } from 'react-native';

const guidelineBaseWidth = 350;
const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

const [shortDimension] =
  WINDOW_WIDTH < WINDOW_HEIGHT
    ? [WINDOW_WIDTH, WINDOW_HEIGHT]
    : [WINDOW_HEIGHT, WINDOW_WIDTH];

export const scaleSize = (size: number, type = 'fontSize', factor = 0.5) => {
  let appSize = size;
  switch (type) {
    case 'fontSize':
      appSize -= 2;
      break;
    case 'padding':
      appSize -= 4;
      break;
    case 'icon':
      appSize -= 2;
      break;
    case 'height':
      break;
    default:
      break;
  }

  const extraSize = 2;
  const scale = (shortDimension / guidelineBaseWidth) * appSize;
  return appSize + (scale - appSize) * factor + extraSize;
};
