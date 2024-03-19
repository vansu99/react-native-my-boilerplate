import 'react-i18next';
import { Resource } from './i18next';

export type Language = 'en' | 'ja';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation';
    resources: Record<Language, Resource>;
  }
}
