import { TransitionSpec } from '@react-navigation/stack/lib/typescript/src/types';

const transition: TransitionSpec = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    mass: 3,
    damping: 100,
    overshootClamping: true,
    restSpeedThreshold: 0.01,
    restDisplacementThreshold: 0.01,
  },
};
export default transition;
