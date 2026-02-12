import { Circle, Square } from 'lucide-react';

export const ROUTES = {
  pictureDay: '/',
  stream: '/stream',
  article: (id: string | number) => `/article/${id}`,
} as const;

export const typeOptions = ['Пресс-Службы', 'ИА', 'СМИ'];
export const periodOptions = ['Час', '24 Часа'];
export const sourceOptions = ['source1', 'source2', 'source3'];

export const sourceIconsMap = {
  tass: <Square size={16} color="blue" fill="blue" />,
  ria: <Circle size={16} color="green" fill="green" />,
  rbk: <Circle size={16} color="orange" fill="orange" />,
  lenta: <Square size={16} color="yellow" fill="yellow" />,
};

export const sourceNamesMap = {
  tass: 'ТАСС',
  ria: 'РИА',
  rbk: 'РБК',
  lenta: 'ЛЕНТА РУ',
};

export const sourceTypesMap = {
  ia: 'ИА',
  smi: 'СМИ',
  press: 'Пресса',
};
