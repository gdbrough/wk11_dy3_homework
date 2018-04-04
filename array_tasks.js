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
		for (let index = 0; index < arr.length; index++){
			if (arr[index] === itemToFind){
				posArr.push(index);
			}
		}
		return posArr;


		// var posArr = [];
		// var newArr = arr;
		// for (element of newArr){
		// 	if (element === itemToFind){
		// 		posArr.push(newArr.indexOf(element));
		// 		newArr.splice()
		// 	};
		// };
		// return posArr;
		//
		// return this.accounts.find(function(account){
		// 		return account.name === name;
		// });




	},

	// sumOfAllEvenNumbersSquared: function (arr) {

	// }

}

module.exports = arrayTasks
