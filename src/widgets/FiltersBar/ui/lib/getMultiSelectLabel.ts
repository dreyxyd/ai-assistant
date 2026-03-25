export const getMultiSelectLabel = (value: string[], placeholder: string, maxVisible: number) => {
  if (value.length === 0) {
    return placeholder;
  }

  if (value.length <= maxVisible) {
    return value.join(', ');
  }

  return `${value.slice(0, maxVisible).join(', ')} +${value.length - maxVisible}`;
};

export type SourceSelectOption = { id: number; name: string };

export const getSourceMultiSelectLabel = (
  selectedIds: number[],
  options: SourceSelectOption[],
  placeholder: string,
  maxVisible: number,
) => {
  if (selectedIds.length === 0) {
    return placeholder;
  }
  const nameById = new Map(options.map((o) => [o.id, o.name]));
  const names = selectedIds.map((id) => nameById.get(id) ?? String(id));
  if (names.length <= maxVisible) {
    return names.join(', ');
  }
  return `${names.slice(0, maxVisible).join(', ')} +${names.length - maxVisible}`;
};
