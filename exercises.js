/*
	1. Given the following list of numbers 21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40

    What is the resulting list that will be sorted after 3 recursive calls to mergesort?
    What is the resulting list that will be sorted after 16 recursive calls to mergesort?
    What are the first 2 lists to be merged?
    Which two lists would be merged on the 7th merge?

	1. [21, 1]
	2. [16, 49, 39, 27, 43, 34, 46, 40]
	3. [21] and [1]
	4. [16, 49]
	const arr = [21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40]

	console.log(16 - Math.floor(arr.length / 2) / 2 / 2 / 2);
*/

/*
	2. Understanding quicksort
		1) Suppose you are debugging a quicksort implementation that is supposed to sort an array in ascending order.
		After the first partition step has been completed, the contents of the array is in the following order: 3 9 1 14 17 24 22 20.
		Which of the following statements is correct about the partition step? Explain your answer.

    (X)The pivot could have been 17, but could not have been 14

		The pivot could have been either 14 or 17

			17 and 14 are in their respective sorted positions

		(X)Neither 14 nor 17 could have been the pivot
    (X)The pivot could have been 14, but could not have been 17

		2) Given the following list of numbers 14, 17, 13, 15, 19, 10, 3, 16, 9, 12 show the resulting list after the second partitioning according to the quicksort algorithm.

    When using the last item on the list as a pivot
			[3, 9, 10, 12, 19, 14, 17, 16, 13, 15]

    When using the first item on the list as a pivot
*/
/*
		3. Implementing quicksort
			Write a function qSort that sorts a dataset using the quicksort algorithm.
*/

const data = {
	// oneEl: [1],
	twoEl: [3, 2],
	// dup: [3, 4, 2, 3],
	threeEl: [3,2,1,],
	// fourEl: [4,1,2,3],
	fiveEl: [4,5,2,3,1], 
	// sixEl: [5, 2 , 34, 0, 3, 1],
	sevenEl: [5, 2, 34, 98, 0, 3, 1],
}
// data =
// '89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5'
// .split(' ');
function qSort(arr, start = 0, end = arr.length) {
	if (start >= end) return arr;
	 const middle = partition(arr, start, end);
	 const arrL = qSort(arr, start, middle);
	 if (middle + 1 >= end){ const arrR = qSort(arr, middle + 1, end);}
	 if (start - middle == 1 &&  middle + 1 - end == 1) {
		 if (arr[middle] >= arr[middle + 1]) _swap(arr, middle, middle + 1);
		 if (arr[middle] <= arr[middle - 1]) _swap(arr, middle, middle - 1);
	}
	 return arr;
}

function partition(arr, start, end) {
	const pivot = arr[start];
	let leftIdx = start;
	let rightIdx = end;
	while (leftIdx < rightIdx) {
		do {
			leftIdx ++;
		} while (arr[leftIdx] >= pivot);
		do {
			rightIdx --;
		} while (arr[rightIdx] < pivot);
		// if (arr[leftIdx] > arr[leftIdx  - 1]) {
			// _swap(arr, leftIdx, leftIdx - 1)
		// } else {
			_swap(arr, leftIdx, rightIdx);
		// }
	}
	
	if (leftIdx > rightIdx) {
		_swap(arr, start, leftIdx);
	 }
	return rightIdx;
}

// function partition(arr, left, right) {
// 	const pivot = left;
// 	while (left <= right) {
// 		while (arr[left] < pivot) left++;
// 		while (arr[right] > pivot) right--;
// 		if (left <= right) {
// 			_swap(arr, left, right);
// 			left++;
// 			right--;
// 		}
// 	}
// 	return left;
// }
// [ 2, 5, 3, 1, 0]

//[ 1, 0, 2, 5, 3]

function _swap(arr, a, b) {
	const t = arr[a];
	arr[a] = arr[b];
	arr[b] = t;
}

for (let key in data) {
	qSort(data[key])
	console.log(key + ' ' + data[key]);
}
