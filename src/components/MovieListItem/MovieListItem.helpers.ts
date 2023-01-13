const truncate = (textToTruncate: string): string => {
  const desiredLength = 250;
  const textToShow = textToTruncate.substring(0, desiredLength);

  return `${textToShow}...`;
}

export { truncate };