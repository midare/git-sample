
var counter = function () {
	var count = 1;
	console.log('counter is running')
	var inner = function () {
		// console.log("1: count is " + count);
		// var step = count;
		// console.log('step: ' + step);
		// count += step;
		// console.log("2: count is " + count);
		count++;
		console.log('inner is running')
		return count;
	}
	return inner;
}

var result = counter();

console.log(result);

var count = 100;

console.log( result() ); // 2
console.log( result() ); // 3

console.log('--------------')

var result2 = counter();

console.log( result2() ); // 2

console.log('--------------')

console.log( result() ); 

