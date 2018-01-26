//Class to represent stock
class Stock {
	//Initializes variables
	constructor() {
		//Name of the stock
		this._name = this.randomName();
		//Rank is 1, 2, 3, or 4, from most likely to earn to least
		this._rank = this.randomRank();
		//Initial value of the stock
		this._value = this.randomValue();
		//Cycles this stock has been held
		this._cycles = 0;
	}
 
	//Returns name
	getName() {
		return this._name;
	}
	//Returns a random name of length 4
	randomName() {
		var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
		var name = [];
		for (var i=0; i<4; i++) {
			var letter = alphabet[Math.floor(Math.random()*alphabet.length)];
			name.push(letter);
		}
		return name.join("");
	}
	//Returns rank
	getRank() {
		return this._rank;
	}
	//Returns a random rank
	randomRank() {
		var ranks = [1, 2, 3, 4];
		return ranks[Math.floor(Math.random()*ranks.length)];
	}
	//Returns value
	getValue() {
		return this._value;
	}
	//Returns a random value
	randomValue() {
		return Math.floor(Math.random() * 20) + 5;
	}
	//Sets value
	setValue(num) {
		this._value = num;
	}
	//Returns cycles
	getCycles() {
		return this._cycles;
	}
	//Raises cycles by 1
	raiseCycles() {
		this._cycles++;
	}
}