'use strict';

function average(numbers) {
	// sum all the numbers
	// divid the total sum by the amount of numbers in the array

	// let total = 0;

	// for (num of numbers){
	//   total += num;
	// }

	// return total / numbers.length;

	/* **********************
        Using Reducer
*************************/
	// return numbers.reduce((accum, current) => accum + current) / numbers.length;

	/* **********************
        Using ForEach
*************************/
	let total = 0;
	numbers.forEach(num => {
		total += num;
	});

	return total / numbers.length;
}

/* From here down, you are not expected to 
   understand.... for now :)  
   
   
   Nothing to see here!
   
*/

// tests

function testFunctionWorks(fn, input, expected) {
	if (fn(input) === expected) {
		console.log('SUCCESS: `' + fn.name + '` works on `[' + input + ']`');
		return true;
	} else {
		console.log(
			'FAILURE: `' +
				fn.name +
				'([' +
				input +
				'])` should be ' +
				expected +
				' but was ' +
				fn(input)
		);
		return false;
	}
}

(function runTests() {
	const numList1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	const correctAns1 = 5.5;
	const numList2 = [0, -1, 1];
	const correctAns2 = 0;

	const testResults = [
		testFunctionWorks(average, numList1, correctAns1),
		testFunctionWorks(average, numList2, correctAns2)
	];
	const numPassing = testResults.filter(function(result) {
		return result;
	}).length;
	console.log(numPassing + ' out of ' + testResults.length + ' tests passing.');
})();
