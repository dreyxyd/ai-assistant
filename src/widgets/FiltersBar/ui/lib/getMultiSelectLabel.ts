export const getMultiSelectLabel = (value: string[], placeholder: string, maxVisible: number) => {
  if (value.length === 0) {
    return placeholder;
  }

  if (value.length <= maxVisible) {
    return value.join(', ');
  }

  return `${value.slice(0, maxVisible).join(', ')} +${value.length - maxVisible}`;
};
