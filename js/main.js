/**
 * Возвращает случайное целое число из переданного диапазона включительно
 * или NaN, eсли значение «до» меньше, чем значение «от».
 */
function getRandomIntInclusive (min, max) {
  min = Math.ceil(Math.abs(min));
  max = Math.floor(Math.abs(max));

  return max < min ? NaN : Math.floor(Math.random() * (max - min + 1)) + min;
}


/**
 * Возвращает случайное число с плавающей точкой из переданного диапазона включительно
 * или NaN, eсли значение «до» меньше, чем значение «от».
 */
function getRandomFloatInclusive (min, max, digits) {
  min = Math.abs(min);
  max = Math.abs(max);

  return max < min ? NaN : (Math.random() * (max - min) + min).toFixed(digits);
}


getRandomIntInclusive(1, 175);
getRandomFloatInclusive(1.1, 1.2, 4);
