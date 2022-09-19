const myArr = [4, 5, 5, 5, 5, 5, 6, 6, 7];

function countWithinFor(numOfThese) {
	return myArr.filter((x) => x === numOfThese).length;
}
console.log(countWithinFor(5));
// comment
