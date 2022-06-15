export const getCleanedNumber = (formattedString: string) => +formattedString.replace(/\s/gi, '').replace(/рублей/gi, '');

export const getFormattedValue = (string: string) => {
  if (!string) {
    return '';
  }
  if (+string.slice(0, 2) === 21) {
    return `${string} год`;
  }
  if (+string.slice(0, 2) === 22 || +string.slice(0, 2) === 23 || +string.slice(0, 2) === 24) {
    return `${string} года`;
  }
  return `${string} лет`;
};
