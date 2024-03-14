import { IconKey } from '../components/custom-icon';
import { JSX } from 'react';

export type RootTabTypes = {
  name: string;
  title: string;
  component: () => JSX.Element;
  icon: IconKey;
};
