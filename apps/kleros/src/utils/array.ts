export const uniqueArray = (array: Array<any>) => {
  const uniqueArr: Array<any> = array.reduce((acc, cur) => {
    if (!acc.includes(cur)) {
      acc.push(cur);
    }
    return acc;
  }, []);
  return uniqueArr;
};
