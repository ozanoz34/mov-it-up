const calculateKey = (list: number[], id: number): boolean => {
  const isAlreadyAdded = list.includes(id);

  return isAlreadyAdded ? false : true;
};

export { calculateKey };