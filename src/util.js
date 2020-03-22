// Максимум и минимум включаются
const getRandomIntInclusive = (min, max) => {
  if (max === undefined) {
    throw new Error('Функция должна содержать 2 аргумента');
  }

  const minNumber = Math.ceil(min);
  const maxNumber = Math.floor(max);

  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
};

const getNumberDividers = (number) => {
  const absoluteNumber = Math.abs(number);
  const dividers = [];

  for (let i = 1; i <= absoluteNumber; i += 1) {
    if (absoluteNumber % i === 0) {
      dividers.push(i);
    }
  }

  return dividers;
};

export {
  getRandomIntInclusive,
  getNumberDividers,
};
