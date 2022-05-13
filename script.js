// Map
const array1 = [1, 2, 3, 4, 5];
const newArray = array1.map(function (number, index) {
	return console.log(index + ": " + number * 2);
});

//filter
const newArray2 = array1.filter(function (number) {
	return number > 2;
});

console.log(newArray2); // => newArray2 = [3, 4, 5]

//reduce
const innittialValue = 0;
const sumArray = array1.reduce(function (total, currentVL) {
	return total + currentVL;
}, innittialValue);
console.log(sumArray);

//find
const num = array1.find(function (currentVL, index) {
	return currentVL > 2; //=> 3
});
console.log(num);

//some
const bool = array1.some(function (currentVL) {
	return currentVL > 5; //=> false
});
console.log(bool);

//push
array1.push(6); // => [1, 2, 3, 4, 5, 6]
console.log(array1);

//unshift

array1.unshift(0); // => [0, 1, 2, 3, 4, 5, 6]
console.log(array1);

//splice
array1.splice(5, 2); // => [0, 1, 2, 3, 4]
console.log(array1);

// Ex - 1
var a = 5;
var b = 10;
var sum;
if (a == b) {
	sum = (a + b) * 3;
} else {
	sum = a + b;
}
console.log(sum); //=> 15

// Ex - 2
var number1 = 12;
var diff;
if (typeof number1 == typeof 19 && number1 > 19) {
	diff = (number1 - 19) * 3;
} else {
	diff = 19 - number1;
}
console.log(diff); //=> 7

// Ex - 3
function divide3(input) {
	var fLocal = input.indexOf("*");
	var count = 0;
	var result = [];

	if (fLocal >= 0) {
		for (var i = 0; i <= 9; i++) {
			reInput = input.replace("*", i);
			if (parseInt(reInput) % 3 == 0) {
				result[count] = input.replace("*", i);
				count++;
			}
		}
	} else {
		console.log("err");
	}
	console.log(result);
}
divide3("1234567890*");

// Ex - 4
function divide4(input) {
	var fLocal = input.indexOf("*");
	var count = 0;
	var result = [];

	if (fLocal >= 0) {
		for (var i = 0; i <= 9; i++) {
			reInput = input.replace("*", i);
			if (parseInt(reInput) % 6 == 0) {
				result[count] = input.replace("*", i);
				count++;
			}
		}
	} else {
		console.log("err");
	}
	console.log(result);
}
divide4("1234567890*");
