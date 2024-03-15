import { DATE_FORMAT } from '../constants';
import dayjs from 'dayjs';
import 'dayjs/locale/ja';

dayjs.locale('ja');

export const formatDate = (
  date: Date | string | number,
  defaultFormat = DATE_FORMAT.DATE_JP,
) => {
  if (!date) return '';
  return `${dayjs(date).format(defaultFormat)}`;
};
