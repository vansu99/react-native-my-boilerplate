import { TOKEN } from '../constants';
import { getItem, removeItem, setItem } from './storage';

export const getToken = () => getItem(TOKEN);
export const removeToken = () => removeItem(TOKEN);
export const setToken = (value: string) => setItem(TOKEN, value);
