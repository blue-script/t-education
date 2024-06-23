// ❓ У Кости есть бумажка, на которой написано п чисел. Также у него есть возможность не больше, чем к раз, взять любое число с бумажки, после чего закрасить одну из старых цифр, а на ее месте
// написать новую произвольную цифру.
// На какое максимальное значение Костя сможет увеличить сумму всех чисел на листочке?
// Формат входных данных
// В первой строке входного файла даны два целых числа n, k — количество чисел на бумажке и ограничение на число операций.
// (1 ≤ n < 1000,1 ≤ k ≤ 104).
// Во второй строке записано п чисел а — числа на бумажке (1 ≤ a; < 10o)
// Формат выходных данных
// В выходной файл выведите одно число — максимальную разность между конечной и начальной суммой.
// Замечание
// В первом примере Костя может изменить две единицы на две девятки, в результате чего сумма чисел увеличится на 16.
// Во втором примере Костя меняет число 85 на 95.
// В третьем примере можно ничего не менять.
// Обратите внимание, что ответ может превышать вместимость 32-битного типа данных.

// ✅ SOLUTION

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', (line) => {
  input.push(line);
  if (input.length === 2) {
    rl.close();
  }
});

rl.on('close', () => {
  const [n, k] = input[0].split(/\s+/).map(Number)
  const numbers = input[1].split(/\s+/)

  function maxIncrease(num) {
    const digits = num.split('').map(Number);
    let maxIncrease = [];

    for (let i = 0; i < digits.length; i++) {
      const newDigit = 9
      if (newDigit > digits[i]) {
        const increase = (newDigit - digits[i]) * Math.pow(10, digits.length - i - 1)
        maxIncrease.push(increase)
      }
    }

    return maxIncrease;
  }


  let increases = []
  numbers.forEach(n => increases = increases.concat(maxIncrease(n)))
  increases.sort((a, b) => b - a)


  let totalIncrease = 0
  for (let i = 0; i < Math.min(k, increases.length); i++) {
    totalIncrease += increases[i]
  }

  console.log(totalIncrease)
})
