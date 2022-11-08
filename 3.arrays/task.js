function compareArrays(arr1, arr2) {
	let result;
	if (arr1.length !== arr2.length) {
		return false;
	} else {
		result = arr1.every((e, index) => e === arr2[index]);
	}
	return result; // boolean
}

function advancedFilter(arr) {
	let resultArr;
	resultArr = arr.filter(e => e > 0).filter(e => e % 3 === 0).map(e => e * 10);
	return resultArr; // array
}
