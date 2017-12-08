//arguments object no longer bound
const add = (a,b) => {
	//console.log(arguments);
	return a + b;
};

console.log(add(55, 1));

// this keyword - no longer bound

const user = {
	name: 'Andrew',
	cities: ['Philadelphia', 'New York', 'Dublin'],
	printPlacesLived: function () {

		const cityMessages = this.cities.map((city) => {
			return city + '!';
		});
		return cityMessages;
		// this.cities.forEach((city) => {
		// 	console.log(this.name + ' ' + 'has lived in' + city );
		// });
	}
};

console.log(user.printPlacesLived());

// Challenge

const multiplier = {
	//numbers - array of numbers
	// multiplyBy - single number
	// multiply - return a new array where the number have been multiplied
	numbers: [2, 4 ,7],
	multiplyBy: 2,
	multiply() {
		return this.numbers.map((number) => number * this.multiplyBy);
	}
};

console.log(multiplier.multiply());