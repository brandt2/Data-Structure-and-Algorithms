function insertionSort(arr) {
	for (let i = 1; i < arr.length; i++) {
		let curElement = arr[i];

		for (var j = i - 1; j >= 0 && curElement < arr[j]; j--) {
			arr[j+1] = arr[j];
		}
		arr[j+1] = curElement;
	}
	return arr;
}

module.exports = {
    insertionSort
};