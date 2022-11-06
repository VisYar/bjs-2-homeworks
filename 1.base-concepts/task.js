"use strict"
function solveEquation(a, b, c) {
  let arr;
  let d = Math.pow(b, 2) - 4 * a * c;
  if (d < 0) {
    arr = [];
  } else if (d === 0) {
      arr = [-b / (2 * a)]
    } else if (d > 0) {
        arr = [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)]
      }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  if (isNaN(Number(percent))) {
  return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  }
  if (isNaN(Number(contribution))) {
  return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  }
  if (isNaN(Number(amount))) {
  return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  }
  percent = Number(percent);
  contribution = Number(contribution);
  amount = Number(amount);
  date = Number(date);
  let nowDate = new Date;
  let S = amount - contribution;
  let n = Math.trunc(Math.abs(date - nowDate) / (1000 * 60 * 60 * 24 * 30));
  let P = percent / 12 / 100;
  let payment = S * (P + (P / (Math.pow(1 + P, n) - 1)));
  totalAmount = Number((payment * n).toFixed(2));
  return totalAmount;
}
