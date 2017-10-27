var currentCost = 0;
var nextCost = 0;

class Commodity {
	constructor(name, initialCost) {
		this._name = name;
		this._initialCost = initialCost;
		this._amount = 0;
		this._efficiency = 1;
	}

	getName() {
		return this._name;
	}
	getInitialCost() {
		return this._initialCost;
	}
	getAmount() {
		return this._amount;
	}
	raiseAmount(num) {
		this._amount += num;
	}
	getEfficiency() {
		return this._efficiency;
	}
	raiseEfficiency(factor) {
		this._efficiency *= factor;
	}
	setInnerHtmlForInfo() {
		//this is an abstract method
	}

	buy(num) {
		currentCost = Math.floor(this.getInitialCost() * Math.pow(1.1, this.getAmount()));

		if (player.getMoolah() >= currentCost) {
			this.raiseAmount(1);
			player.raiseMoolah(-currentCost);

			document.getElementById(this.getName()).innerHTML = this.getAmount();
			System.displayMoolah();
			this.setInnerHtmlForInfo();

			if (this.getName() === "adbot" && this.getAmount() === 1) System.displayMessage("You gotta start somewhere, I guess.");
			if (this.getName() === "eniac" && this.getAmount() === 1) System.displayMessage("Old school, huh? Figures.");
		}
	}
}

class Business extends Commodity {
	constructor(name, initialCost, initialMoolahPerSec) {
		super(name, initialCost);
		this._initialMoolahPerSec = initialMoolahPerSec;
	}

	getInitialMoolahPerSec() {
		return this._initialMoolahPerSec;
	}
	getAdjustedMoolahPerDeciSec() {
		return 0.1 * this.getInitialMoolahPerSec() * this.getAmount() * this.getEfficiency() * player.getHertz();
	}
	getAdjustedMoolahPerAmountPerSec() {
		return this.getInitialMoolahPerSec() * this.getEfficiency() * player.getHertz();
	}

	setInnerHtmlForInfo() {
		nextCost = Math.floor(this.getInitialCost() * Math.pow(1.1, this.getAmount()));
		document.getElementById(this.getName() + "Info").innerHTML = "$" + System.prettify(nextCost) + ", " + System.prettify(this.getAdjustedMoolahPerAmountPerSec()) + "M/s";
	}
}
class Research extends Commodity {
	constructor(name, initialCost, initialKnowledgePerSec) {
		super(name, initialCost);
		this._initialKnowledgePerSec = initialKnowledgePerSec;
	}

	getInitialKnowledgePerSec() {
		return this._initialKnowledgePerSec;
	}
	getAdjustedKnowledgePerDeciSec() {
		return 0.1 * this.getInitialKnowledgePerSec() * this.getAmount() * this.getEfficiency() * player.getHertz();
	}
	getAdjustedKnowledgePerAmountPerSec() {
		return this.getInitialKnowledgePerSec() * this.getEfficiency() * player.getHertz();
	}

	setInnerHtmlForInfo() {
		nextCost = Math.floor(this.getInitialCost() * Math.pow(1.11, this.getAmount()));
		document.getElementById(this.getName() + "Info").innerHTML = "$" + System.prettify(nextCost) + ", " + System.prettify(this.getAdjustedKnowledgePerAmountPerSec()) + "K/s";
	}
}
class Computing extends Commodity{
	constructor(name, initialCost, initialMoolahPerSec, initialFlopsPerSec) {
		super(name, initialCost);
		this._initialMoolahPerSec = initialMoolahPerSec;
		this._initialFlopsPerSec = initialFlopsPerSec;
	}

	getInitialMoolahPerSec() {
		return this._initialMoolahPerSec;
	}
	getAdjustedMoolahPerDeciSec() {
		return 0.1 * this.getInitialMoolahPerSec() * this.getAmount() * this.getEfficiency() * player.getHertz();
	}
	getAdjustedMoolahPerAmountPerSec() {
		return this.getInitialMoolahPerSec() * this.getEfficiency() * player.getHertz();
	}

	getInitialFlopsPerSec() {
		return this._initialFlopsPerSec;
	}
	getAdjustedFlopsPerDeciSec() {
		return 0.1 * this.getInitialFlopsPerSec() * this.getAmount() * this.getEfficiency() * player.getHertz();
	}
	getAdjustedFlopsPerAmountPerSec() {
		return this.getInitialFlopsPerSec() * this.getEfficiency() * player.getHertz();
	}

	setInnerHtmlForInfo() {
		nextCost = Math.floor(this.getInitialCost() * Math.pow(1.1, this.getAmount()));
		document.getElementById(this.getName() + "Info").innerHTML = "$" + System.prettify(nextCost) + ", " + System.prettify(this.getAdjustedMoolahPerAmountPerSec()) + " M/s, " + System.prettify(this.getAdjustedFlopsPerAmountPerSec()) + " F/s";
	}
}