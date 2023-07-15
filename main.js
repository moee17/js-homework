var fruitArray = ["Apple", "Banana", "Orange", "Mango", "Grapes", "Banana"];

// ---------------------------khởi tạo filter2---------------------------
Array.prototype.filter2 = function (cb) {
	let result = [];
	for (let i in this) {
		if (this.hasOwnProperty(i)) {
			let ketQua = cb(this[i], i, this);
			if (ketQua) {
				result.push(this[i]);
			}
		}
	}
	return result;
};

let findBanana = fruitArray.filter2(function (fruits) {
	return fruits.length > 5;
});

console.log(findBanana);

//

// var sample = ["Chanel", "LouisVuton", "Nike", "Adias", "Chanel"]; // yeah same array
// // es5
// var result = sample.filter2(function (elem) {
// 	return elem.length < 7;
// });
// console.log(result);

// =====================khởi tạo phương thức map2=====================

var fruitArray = ["Appleasa", "Banana", "Orange", "Mango", "Grapes", "Banana"];

Array.prototype.map2 = function (callBack) {
	let outPut = [];
	let mapedLength = this.length;
	for (let i = 0; i < mapedLength; i++) {
		let result = callBack(this[i], i);
		outPut.push(result);
	}
	return outPut;
};

let mappedFruits = fruitArray.map2(function (fruit) {
	return fruit.length;
});

// console.log(mappedFruits);

// ---------------------khởi tạo phương thức reduce2---------------------

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

Array.prototype.reduce2 = function (callBack, initial) {
	// let result = [];
	for (let i = 0; i < this.length; i++) {
		initial = callBack(initial, this[i], i, this);
		// result.push(initial);
	}
	return initial;
};

let sum = numbers.reduce2(function (accum, number) {
	return accum + number;
}, 0);

// console.log(sum);

// ----------khởi tạo phương thức forEach2============

var fruitArray = ["Apple", "Banana", "Orange", "Mango", "Grapes", "Banana"];

Array.prototype.forEach2 = function (callBack) {
	let result = [];
	for (let i = 0; i < this.length; i++) {
		result.push(callBack(this[i], i, this));
	}
	return result;
};

let total = fruitArray.forEach2(function (elem, index) {
	return elem + " come at " + index;
});

// console.log(total);

// var sample = [1, 2, 3];
// // es5
// sample.forEach2(function (elem, index) {
// 	console.log(elem + " comes at " + index);
// });
