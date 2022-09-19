function rngLiew(min, max) {
	//------return from ed liew
	return Math.floor(Math.random() * (max - min + 1) + min);
}
function rng(min, max) {
	//
	//let getRand = Math.random(max - min) * max - 1;
	//return getRand + max;
	let rangeP1 = max - min + 1;
	return Math.random() * rangeP1 + min;
}

// Orig RNG
// console.log('one-threes');
// console.log(rng(1, 3));
// console.log(rng(1, 3));
// console.log(rng(1, 3));
// console.log('two-to fours');
// console.log(rng(2, 4));
// console.log(rng(2, 4));
// console.log(rng(2, 4));
// console.log('three to 10s');
// console.log(rng(3, 10));
// console.log(rng(3, 10));
// console.log(rng(3, 10));

// Liew RNG
const liewsArray = [];
for (i = 1; i <= 100; i++) {
	liewsArray.push(rngLiew(1, 3));
}
function countWithinFor(numOfThese) {
	return liewsArray.filter((x) => x === numOfThese).length;
}
console.log(countWithinFor(1));
console.log(countWithinFor(2));
console.log(countWithinFor(3));

//e to the function
function iCanHaz(input, eToThe = 0) {
	let myDec = parseFloat(input);
	myDec = myDec * 10 ** eToThe;
	let output = [input, eToThe, myDec];
	return output;
}
//console.log(iCanHaz(7, 0));
//console.log(iCanHaz(7, 1));
//console.log(iCanHaz(7, 3));
//console.log(iCanHaz(7, -1));

//the output for the 4 above should output
//(as part of arrays myDec)
//should output 7, 70, 7000, and 0.7
