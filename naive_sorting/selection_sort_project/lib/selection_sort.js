function swap(arr, index1, index2) {
	let temp = arr[index1];
	arr[index1] = arr[index2];
	arr[index2] = temp;
}

function selectionSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		let minIndex = i; // sets i to the minimum index

		for (let j = i + 1; j < arr.length; j++) {
			if (arr[minIndex] > arr[j]) { // iterates through to look for the index with the smallest number
				minIndex = j; // sets the minIndex to the new index
			}
		}

		swap(arr, i, minIndex); // swaps the position of i and the minIndex
	}
	return arr; // returns the array
}

module.exports = {
    selectionSort,
    swap
};