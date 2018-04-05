var arrayTasks = {

	concat: function (arr1, arr2) {
		return arr1.concat(arr2);
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd);
		return arr;
	},

	square: function (arr) {
		squareArr = [];
		squareArr = arr.map(x => Math.pow(x, 2));
		return squareArr;
	},

	sum: function (arr) {
		const reducer = (accumulator, currentValue) => accumulator + currentValue;
		return arr.reduce(reducer);
	},

	findDuplicates: function (arr) {
		var duplicates = [];
		for (element of arr){
			if (arr.indexOf(element) !== arr.lastIndexOf(element)){
				if (!duplicates.includes(element)){
					duplicates.push(element);
				}
			}
		}
		return duplicates;
	},

	removeAndClone: function (arr, valueToRemove) {
		var newArr = arr.filter(number => number !== valueToRemove);
		return newArr;
	},

	findIndexesOf: function (arr, itemToFind) {
		var posArr = [];
		for (index in arr){
			if (arr[index] === itemToFind){
				posArr.push(parseInt(index));
			}
		}
		return posArr;
	},

	sumOfAllEvenNumbersSquared: function (arr) {
		var evenArr = arr.filter(number => number %2 === 0)
		var squareArr = this.square(evenArr);
		return this.sum(squareArr);
	}
}

module.exports = arrayTasks
