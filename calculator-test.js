it('should calculate the monthly rate correctly', function() {
	const values = {
		//created variable of values so my code looks cleaner
		amount: 200000, //must remember to put "," at the end of each line, otherwise errors are thrown immediately
		years: 20,
		rate: 3.5
	};
	expect(calculateMonthlyPayment(values)).toEqual('1159.92');
});

it('should return a result with 2 decimal places', function() {
	// I want to ensure the decimals still show even if the number is a whole number
	const values = {
		amount: 100000,
		years: 10,
		rate: 3.737
	};
	expect(calculateMonthlyPayment(values)).toEqual('1000.00');
});

//perhaps it is because I am still new to this but I do not know what else to test for this site
/// etc
