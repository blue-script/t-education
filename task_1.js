// Костя подключен к мобильному оператору «Мобайл». Абонентская плата Кости составляет А рублей в месяц. За эту стоимость Костя получает В мегабайт интернет-трафика. Если Костя выйдет за лимит трафика, то каждый следующий мегабайт будет стоить ему С рублей.
// Костя планирует потратить D мегабайт интернет-трафика в следующий месяц. Помогите ему сосчитать, во сколько рублей ему обойдется интернет.
// Формат входных данных
// Вводится 4 целых положительных числа A, B, C, D(1 ≤ A, B, C, D < 100) — стоимость тарифа Кости, размер тарифа Кости, стоимость каждого лишнего мегабайта, размер интернет-трафика Кости в следующем месяце. Числа во входном файле разделены пробелами.
// Формат выходных данных
// Выведите одно натуральное число суммарные расходы Кости на интернет.
// Замечание
// В первом примере Костя сначала оплатит пакет интернета, после чего потратит на 5 мегабайт больше, чем разрешено по тарифу. Следовательно, за 5 мегабайт он дополняет отдельно, получившаяся стоимость 100 + 12 × 5 = 160 рублей.
// Во втором примере Костя укладывается в тарифный план, поэтому платит только за него.

// ✅ SOLUTION

var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.on('line', function (data) {
  const [A, B, C, D] = data.split(' ').map(n=>+n);
  let cost = A

  if (D > B) {
    cost += (D-B) * C
  }

  console.log(cost)
  rl.close()
})
