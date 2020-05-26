export const getRandomNum = (min, max) => Math.floor(min + Math.random() * (max + 1 - min)) + 1;

export const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

export const getYesOrNo = (variable) => {
  if (variable) {
    return 'yes';
  }
  return 'no';
};
