// Максимум и минимум включаются
const getRandomIntInclusive = (min, max) => {
  if (max === undefined) {
    throw new Error('Функция должна содержать 2 аргумента');
  }

  const minNumber = Math.ceil(min);
  const maxNumber = Math.floor(max);

  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
};

export default getRandomIntInclusive;
