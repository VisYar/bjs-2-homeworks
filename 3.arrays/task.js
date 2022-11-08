function compareArrays(arr1, arr2) {
	let result;
	result = arr1.length === arr2.length && arr1.every((item, index) => item === arr2[index]);
	return result; // boolean
}

function advancedFilter(arr) {
	let resultArr;
	resultArr = arr.filter(e => e > 0).filter(e => e % 3 === 0).map(e => e * 10);
	return resultArr; // array
}
