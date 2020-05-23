export const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min)) + 1;

export const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

export const getYesOrNo = (func) => {
  if (func) {
    return 'yes';
  }
  return 'no';
};
