"use strict"
function solveEquation(a, b, c) {
	let arr;
	const discriminant = Math.pow(b, 2) - 4 * a * c;
		if (discriminant < 0) {
		arr = [];
		} else if (discriminant === 0) {
			arr = [-b / (2 * a)]
			} else if (discriminant > 0) {
				arr = [(-b + Math.sqrt(discriminant)) / (2 * a), (-b - Math.sqrt(discriminant)) / (2 * a)]
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
	let loanBody = amount - contribution;
	let numberOfMonths = Math.trunc(Math.abs(date - nowDate) / (1000 * 60 * 60 * 24 * 30));
	let twelfthPartOfInterestRate = percent / 12 / 100;
	let payment = loanBody * (twelfthPartOfInterestRate + (twelfthPartOfInterestRate / (Math.pow(1 + twelfthPartOfInterestRate, numberOfMonths) - 1)));
	totalAmount = Number((payment * numberOfMonths).toFixed(2));
	return totalAmount;
}
