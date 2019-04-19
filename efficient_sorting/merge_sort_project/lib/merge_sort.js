function merge(array1, array2) {
	let result = [];

	while(array1.length > 0 && array2.length > 0) {
		if (array1[0] < array2[0]) {
			let temp = array1.shift();
			result.push(temp);
		} else {
			let temp = array2.shift();
			result.push(temp);
		}
	}

	return result.concat(array1).concat(array2);
}

function mergeSort(array) {
	if (array.length <= 1) return array;
	let mid = Math.floor(array.length / 2);

	let left = mergeSort(array.slice(0, mid));
	let right = mergeSort(array.slice(mid));

	return merge(left, right);
}

module.exports = {
    merge,
    mergeSort
};