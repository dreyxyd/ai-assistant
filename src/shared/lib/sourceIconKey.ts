import type { sourceIconsMap } from '../../../shared/consts.tsx';

export type SourceIconKey = keyof typeof sourceIconsMap;

/** Сопоставление названия источника с ключом иконки в sourceIconsMap */
export function getSourceIconKey(name: string): SourceIconKey {
  const n = name.toLowerCase();
  if (n.includes('тасс') || n.includes('tass')) return 'tass';
  if (n.includes('риа') || n.includes('ria')) return 'ria';
  if (n.includes('рбк') || n.includes('rbk')) return 'rbk';
  if (n.includes('лента') || n.includes('lenta')) return 'lenta';
  return 'ria';
}
