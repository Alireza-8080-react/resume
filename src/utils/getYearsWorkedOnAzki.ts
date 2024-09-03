import { DATE_JOINED_AZKI, DATE_LEFT_AZKI } from '@/constants/dates';

export const getYearsWorkedOnAzki = () =>
  DATE_LEFT_AZKI.getFullYear() - DATE_JOINED_AZKI.getFullYear();
