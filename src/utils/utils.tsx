export const getCleanedNumber = (formattedString: string) => +formattedString.replace(/\s/gi, '').replace(/рублей/gi, '');
