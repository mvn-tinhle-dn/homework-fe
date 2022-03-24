/**
 * Javascript ES6 Exercise
 * Convert the code below from ES5 to ES6 and answer the question
 */

//1. Define a variable
const MAX_SIZE = 25 * 1024 * 1024;
let title = "Hello World";
title = "Hello ES6";

/**
 * - Question: Let and Const – What's the Difference?
 * Sự khác biệt:
 * - const:
 * 	+ Không thể cập nhật lại giá trị.
 * 	+ Phải gán giá trị khi khai báo.
 * - let:
 * 	+ Có thể cập nhật lại giá trị.
 * 	+	Có thể khai báo mà không cần gán giá trị.
 */

//2. String Interpolation
const user = { name: "David" };
const card = { amount: 7, product: "Bar", unitprice: 42 };
let message1 = `Hello ${user.name},
want to buy ${card.amount} ${card.product} for
a total of ${card.amount * card.unitprice} bucks?`;
console.log(`Result ex 1: 
${message1}`);

//3. Rest Parameter
function foo(x, y, ...rest) {
	const a = rest;
	return (x + y) * a.length;
}
console.log(`Result ex 2: ${foo(1, 2, "hello", true, 7) === 9}`); //result: true

//4. Default Parameter Values
// have default
function sum(x, y = 4, z = 6) {
	if (y === undefined) {
		y = 7;
	}
	if (z === undefined) {
		z = 42;
	}
	return x + y + z;
}
console.log(`Result ex 3: ${sum(2)}`); //result: 12

//do not have default
function sum2(x, y, z) {
	if (y === undefined) {
		y = 7;
	}
	if (z === undefined) {
		z = 42;
	}
	return x + y + z;
}
console.log(`Result ex 3: ${sum2(2)}`); //result: 51

//5. Arrow Functions
const evens = [1, 2, 3, 4, 5, 6];
const odds = evens.map((v) => v + 1);
const pairs = evens.map((v) => ({ even: v, odd: v + 1 }));
const nums = evens.map((v, i) => v + i);
let fives = [];
nums.forEach((v) => {
	if (v % 5 === 0) {
		fives.push(v);
	}
});
console.log("Result ex 4:");
console.log(fives); //result: [5]

//6. Classes
class Shape {
	constructor(id, x, y) {
		this.id = id;
		this.move(x, y);
	}
	move(x, y) {
		this.x = x;
		this.y = y;
	}
}

//7. Modules
//8. Promise
function showMessAfterTimeout(msg, who, timeout) {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(`${msg} Hi ${who}!`), timeout);
	});
}

showMessAfterTimeout('', 'Foo', 1000)
	.then((msg) => showMessAfterTimeout(msg, 'Bar', 2000))
	.then((msg) => console.log(`Result ex 8: Finish after 3000ms: ${msg}`)
);

//9. Loops
//for...of
const Nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const eNum = [];
for (const curVL of Nums) {
	if (curVL % 2 == 0) {
		eNum.push(curVL);
	}
}
console.log("Result ex 9 (for...of):");
console.log(eNum); // result: [2, 4, 6, 8]

//findIndex()
var person = [
	{
		name: "Tinh",
		job: "student",
	},
	{
		name: "Viet",
		job: "IT",
	},
	{
		name: "An",
		job: "DJ",
	},
	{
		name: "Phuc",
		job: "IT",
	},
];

const isIT = (person) => {
	return person.job === "IT";
};
console.log(`Result ex 9 (findIndex):`);
console.log(person[person.findIndex(isIT)]); // result : {name: 'Viet', job: 'IT'}
