// Задание 1
function getArrayParams(arr) {
	let min = Infinity;
	let max = -Infinity;
	let sum = 0;
	let avg = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < min) {
			min = arr[i];
		}
		if (arr[i] > max) {
			max = arr[i];
		}
		sum += arr[i];
	}
	avg = Number((sum / arr.length).toFixed(2));
	return { min: min, max: max, avg: avg };
	}

// Задание 2
function worker(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}

function makeWork(arrOfArr, func) {
	let max = -Infinity;
	for (let i = 0; i < arrOfArr.length; i++) {
		const funcResult = func(arrOfArr[i]);
		if (funcResult > max) {
			max = func(arrOfArr[i]);
		}
	}
	return max;
}

// Задание 3
function worker2(arr) {
	const result = getArrayParams(arr);
	return Math.abs(result.max - result.min);
}
