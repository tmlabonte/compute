var currentCost = 0;
var nextCost = 0;
var tempAmount = 0;

//Class to represent commodities
//Parent class of Business, Research, and Computing
class Commodity {
	//Initializes variables
	constructor(name, initialCost) {
		//Unique identifier
		this._name = name;
		//Initial cost
		this._initialCost = initialCost;
		//Initial amount
		this._amount = 0;
		//Initial efficiency (increased by projects)
		this._efficiency = 1;
	}

	//Returns name
	getName() {
		return this._name;
	}
	//Returns initial cost
	getInitialCost() {
		return this._initialCost;
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
	//Sets HTML of commodity information
	setInnerHtmlForInfo() {
		//This is an abstract method
	}

	//Calculates cost of a commodity, and if the player has enough moolah, buys a number of them
	buy(num) {
		//Cost of a commodity is the floor of the initial cost times 1.1^(amount of the commodity)
		//Price increases slowly at first, but then faster and faster
		currentCost = Math.floor(this.getInitialCost() * Math.pow(1.1, this.getAmount()));

		//If the player has enough moolah, make the purchase
		if (player.getMoolah() >= currentCost) {
			//Increase amount and decrease moolah
			this.raiseAmount(num);
			player.raiseMoolah(-currentCost);

			//Update displays
			document.getElementById(this.getName()).innerHTML = this.getAmount();
			System.displayMoolah();
			this.setInnerHtmlForInfo();

			//Display messages if appropriate
			if (this.getName() === "adbot" && this.getAmount() === 1) System.displayMessage("You gotta start somewhere, I guess.");
			if (this.getName() === "eniac" && this.getAmount() === 1) System.displayMessage("Old school, huh? Figures.");
			//possible IPv6 is the future joke then when we travel to the future they're using IPv6
			if (this.getName() === "router" && this.getAmount() === 1) System.displayMessage("IPv4 is for chumps. This message not sponsored by Cisco.");
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
		tempAmount = this.getInitialMoolahPerSec() * this.getEfficiency() * player.getHertz();
		if (tempAmount >= 10000) {
			return tempAmount.toExponential(2);
		}
		else {
			return Math.round(tempAmount);
		}
	}

	//Sets HTML for business information
	setInnerHtmlForInfo() {
		nextCost = Math.floor(this.getInitialCost() * Math.pow(1.1, this.getAmount()));
		if (nextCost > 10000) {
			nextCost = nextCost.toExponential(2);
		}
		else {
			nextCost = Math.ceil(nextCost);
		}
		document.getElementById(this.getName() + "Info").innerHTML = "$" + nextCost + ", " + this.getAdjustedMoolahPerAmountPerSec() + "M/s";
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
		tempAmount = this.getInitialKnowledgePerSec() * this.getEfficiency() * player.getHertz();
		if (tempAmount >= 10000) {
			return tempAmount.toExponential(2);
		}
		else {
			return Math.round(tempAmount);
		}
	}

	//Sets HTML for research information
	setInnerHtmlForInfo() {
		nextCost = Math.floor(this.getInitialCost() * Math.pow(1.1, this.getAmount()));
		if (nextCost > 10000) {
			nextCost = nextCost.toExponential(2);
		}
		else {
			nextCost = Math.ceil(nextCost);
		}
		document.getElementById(this.getName() + "Info").innerHTML = "$" + nextCost + ", " + this.getAdjustedKnowledgePerAmountPerSec() + "K/s";
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
		tempAmount = this.getInitialMoolahPerSec() * this.getEfficiency() * player.getHertz();
		if (tempAmount >= 10000) {
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
		tempAmount = this.getInitialFlopsPerSec() * this.getEfficiency() * player.getHertz();
		if (tempAmount >= 10000) {
			return tempAmount.toExponential(2);
		}
		else {
			return Math.round(tempAmount);
		}
	}

	//Sets HTML for computing information
	setInnerHtmlForInfo() {
		nextCost = Math.floor(this.getInitialCost() * Math.pow(1.1, this.getAmount()));
		if (nextCost > 10000) {
			nextCost = nextCost.toExponential(2);
		}
		else {
			nextCost = Math.ceil(nextCost);
		}
		document.getElementById(this.getName() + "Info").innerHTML = "$" + nextCost + ", " + this.getAdjustedMoolahPerAmountPerSec() + " M/s, " + this.getAdjustedFlopsPerAmountPerSec() + " F/s";
	}
}