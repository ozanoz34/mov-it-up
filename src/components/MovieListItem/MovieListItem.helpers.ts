const truncate = (textToTruncate: string): string => {
  const desiredLength = 200;
  const textToShow = textToTruncate.substring(0, desiredLength);

  return textToTruncate.length > 195 ?  `${textToShow}...` : textToTruncate;
}

export { truncate };