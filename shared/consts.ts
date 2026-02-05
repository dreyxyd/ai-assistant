export const ROUTES = {
  pictureDay: '/',
  stream: '/stream',
  article: (id: string | number) => `/article/${id}`,
} as const;

export const typeOptions = ['Пресс-Службы', 'ИА', 'СМИ'];
export const periodOptions = ['Час', '24 Часа'];
export const sourceOptions = ['source1', 'source2', 'source3'];
