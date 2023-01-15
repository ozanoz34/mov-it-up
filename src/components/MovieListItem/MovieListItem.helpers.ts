const truncate = (textToTruncate: string): string => {
  const desiredLength = 200;
  const textToShow = textToTruncate.substring(0, desiredLength);

  return textToTruncate.length > 195 ?  `${textToShow}...` : textToTruncate;
};

const calculateKey = (list: number[], id: number): boolean => {
  const isAlreadyAdded = list.includes(id);

  return isAlreadyAdded ? false : true;
};

export { truncate, calculateKey };