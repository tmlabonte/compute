//Class to represent commodities
//Parent class of Business, Research, and Computing
class Commodity {
	//Initializes variables
	constructor(name, initialCost) {
		//Unique identifier
		this._name = name;
		//Initial cost
		this._initialCost = initialCost;
		//Current cost
		this._currentCost = initialCost;
		//Next cost
		this._nextCost = initialCost;
		//Initial amount
		this._amount = 0;
		//Initial efficiency (increased by projects)
		this._efficiency = 1;

		//List of all possible messages for commodities
		this._msgMap = {
			"adbot": "You gotta start somewhere, I guess.",
			"router": "IPv4 is for chumps. This message not sponsored by Cisco.",
			"stockbot": "'Free market' is relative.",
			"cracker": "",
			"algorithm": "What does it do? Whatever you want.",
			"undergrad": "",
			"graduate": "Graduate school: Less cute girls, more old men.",
			"postdoc": "",
			"prof": "I still don't understand tenure.",
			"nobel": "",
			"eniac": "Old school, huh? Figures.",
			"apple": "Color by Technicolor.",
			"tsdelta": "",
			"tianhe": "River of the Heavens is a sweet name for a supercomputer.",
			"dwave": "WE'RE GOING QUANTUM BABY"
		};
	}

	//Returns name
	getName() {
		return this._name;
	}
	//Returns initial cost
	getInitialCost() {
		return this._initialCost;
	}
	//Returns current cost
	getCurrentCost() {
		return this._currentCost;
	}
	//Sets current cost
	setCurrentCost(cost) {
		this._currentCost = cost;
	}
	//Returns next cost
	getNextCost() {
		return this._nextCost;
	}
	//Sets next cost
	setNextCost(cost) {
		this._nextCost = cost;
	}
	//Returns current amount
	getAmount() {
		return this._amount;
	}
	//Raises amount by a number
	raiseAmount(num) {
		this._amount += num;
	}
	//Returns current efficiency
	getEfficiency() {
		return this._efficiency;
	}
	//Raises efficiency by a factor (this is multiplicative)
	raiseEfficiency(factor) {
		this._efficiency *= factor;
	}
	getMsgMap() {
		return this._msgMap;
	}
	//Sets HTML of commodity information
	setInnerHtmlForInfo() {
		//This is an abstract method
	}

	//Calculates cost of a commodity, and if the player has enough moolah, buys a number of them
	//WILL REQUIRE UPDATES FOR EXPANDED PARAMETER FUNCTIONALITY
	buy(num) {
		//Cost of a commodity is the floor of the initial cost times 1.1^(amount of the commodity)
		//Price increases slowly at first, but then faster and faster
		this.setCurrentCost(Math.floor(this.getInitialCost() * Math.pow(1.1, this.getAmount())));

		//If the player has enough moolah, make the purchase
		if (player.getMoolah() >= this.getCurrentCost()) {
			//Increase amount and decrease moolah
			this.raiseAmount(num);
			player.raiseMoolah(-this.getCurrentCost());

			//Update displays
			document.getElementById(this.getName()).innerHTML = this.getAmount();
			System.displayMoolah();
			this.setInnerHtmlForInfo();

			//Display messages and update datasheet cells if appropriate
			var msg = this.getMsgMap()[this.getName()];
			if (msg !== "" && this.getAmount() === 1) System.displayMessage(msg);
		}
	}
}

//Class to represent business commodities
//Child class of Commodity
class Business extends Commodity {
	//Initializes Commodity variables plus initial moolah per second
	constructor(name, initialCost, initialMoolahPerSec) {
		super(name, initialCost);
		this._initialMoolahPerSec = initialMoolahPerSec;
	}

	//Returns initial moolah per second
	getInitialMoolahPerSec() {
		return this._initialMoolahPerSec;
	}
	//Returns moolah gained per decisecond adjusted for amount, efficiency, and hertz
	//Used for calculation
	getAdjustedMoolahPerDeciSec() {
		return 0.1 * this.getInitialMoolahPerSec() * this.getAmount() * this.getEfficiency() * player.getHertz();
	}
	//Returns moolah gained by one business unit per second
	//Used for display, uses scientific notation if necessary
	getAdjustedMoolahPerAmountPerSec() {
		var tempAmount = this.getInitialMoolahPerSec() * this.getEfficiency() * player.getHertz();
		if (tempAmount >= 1000000) {
			return tempAmount.toExponential(2);
		}
		else {
			return Math.round(tempAmount);
		}
	}

	//Sets HTML for business information
	setInnerHtmlForInfo() {
		this.setNextCost(Math.floor(this.getInitialCost() * Math.pow(1.1, this.getAmount())));
		if (this.getNextCost() >= 1000000) {
			this.setNextCost(this.getNextCost().toExponential(2));
		}
		else {
			this.setNextCost(Math.ceil(this.getNextCost()));
		}
		document.getElementById(this.getName() + "Info").innerHTML = "$" + this.getNextCost() + ", " + this.getAdjustedMoolahPerAmountPerSec() + "M/s";
	}
}

//Class to represent research commodities
//Child class of Commodity
class Research extends Commodity {
	//Initializes Commodity variables plus initial knowledge per second
	constructor(name, initialCost, initialKnowledgePerSec) {
		super(name, initialCost);
		this._initialKnowledgePerSec = initialKnowledgePerSec;
	}

	//Returns initial knowledge per second
	getInitialKnowledgePerSec() {
		return this._initialKnowledgePerSec;
	}
	//Returns knowledge gained per decisecond adjusted for amount, efficiency, and hertz
	//Used for calculation
	getAdjustedKnowledgePerDeciSec() {
		return 0.1 * this.getInitialKnowledgePerSec() * this.getAmount() * this.getEfficiency() * player.getHertz();
	}
	//Returns knowledge gained by one research unit per second
	//Used for display, uses scientific notation if necessary
	getAdjustedKnowledgePerAmountPerSec() {
		var tempAmount = this.getInitialKnowledgePerSec() * this.getEfficiency() * player.getHertz();
		if (tempAmount >= 1000000) {
			return tempAmount.toExponential(2);
		}
		else {
			return Math.round(tempAmount);
		}
	}

	//Sets HTML for research information
	setInnerHtmlForInfo() {
		this.setNextCost(Math.floor(this.getInitialCost() * Math.pow(1.1, this.getAmount())));
		if (this.getNextCost() >= 1000000) {
			this.setNextCost(this.getNextCost().toExponential(2));
		}
		else {
			this.setNextCost(Math.ceil(this.getNextCost()));
		}
		document.getElementById(this.getName() + "Info").innerHTML = "$" + this.getNextCost() + ", " + this.getAdjustedKnowledgePerAmountPerSec() + "K/s";
	}
}

//Class to represent computing commodities
//Child class of Commodity
class Computing extends Commodity{
	//Initializes Commodity variables plus initial moolah per second and initial flops per second
	constructor(name, initialCost, initialMoolahPerSec, initialFlopsPerSec) {
		super(name, initialCost);
		this._initialMoolahPerSec = initialMoolahPerSec;
		this._initialFlopsPerSec = initialFlopsPerSec;
	}

	//Returns initial moolah per second
	getInitialMoolahPerSec() {
		return this._initialMoolahPerSec;
	}
	//Returns moolah gained per decisecond adjusted for amount, efficiency, and hertz
	//Used for calculation
	getAdjustedMoolahPerDeciSec() {
		return 0.1 * this.getInitialMoolahPerSec() * this.getAmount() * this.getEfficiency() * player.getHertz();
	}
	//Returns moolah gained by one computing unit per second
	//Used for display, uses scientific notation if necessary
	getAdjustedMoolahPerAmountPerSec() {
		var tempAmount = this.getInitialMoolahPerSec() * this.getEfficiency() * player.getHertz();
		if (tempAmount >= 1000000) {
			return tempAmount.toExponential(2);
		}
		else {
			return Math.round(tempAmount);
		}
	}

	//Returns initial flops per second
	getInitialFlopsPerSec() {
		return this._initialFlopsPerSec;
	}
	//Returns flops gained per decisecond adjusted for amount, efficiency, and hertz
	//Used for calculation
	getAdjustedFlopsPerDeciSec() {
		return 0.1 * this.getInitialFlopsPerSec() * this.getAmount() * this.getEfficiency() * player.getHertz();
	}
	//Returns flops gained by one computing unit per second
	//Used for display
	getAdjustedFlopsPerAmountPerSec() {
		var tempAmount = this.getInitialFlopsPerSec() * this.getEfficiency() * player.getHertz();
		if (tempAmount >= 1000000) {
			return tempAmount.toExponential(2);
		}
		else {
			return Math.round(tempAmount);
		}
	}

	//Sets HTML for computing information
	setInnerHtmlForInfo() {
		this.setNextCost(Math.floor(this.getInitialCost() * Math.pow(1.1, this.getAmount())));
		if (this.getNextCost() >= 1000000) {
			this.setNextCost(this.getNextCost().toExponential(2));
		}
		else {
			this.setNextCost(Math.ceil(this.getNextCost()));
		}
		document.getElementById(this.getName() + "Info").innerHTML = "$" + this.getNextCost() + ", " + this.getAdjustedMoolahPerAmountPerSec() + " M/s, " + this.getAdjustedFlopsPerAmountPerSec() + " F/s";
	}
}