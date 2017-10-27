var nextInvestmentIndex = 0;
var nextPersonIndex = 0;
var nextTheoryIndex = 0;

class Project {
	constructor(cost, effect, efficiencyFactor) {
		this._cost = cost;
		this._effect = effect; //Effect should include name, newline, effect, newline, cost
		this._efficiencyFactor = efficiencyFactor;
	}

	getCost() {
		return this._cost;
	}
	getEffect() {
		return this._effect;
	}
	getEfficiencyFactor() {
		return this._efficiencyFactor;
	}
}

class Investment extends Project{
	_buy() {
		if (player.getKnowledge() >= this.getCost() && nextInvestmentIndex < investments.length) {
			if (nextInvestmentIndex === 0) adbot.raiseEfficiency(this.getEfficiencyFactor());

			player.raiseKnowledge(-this.getCost());
			System.displayKnowledge();
			nextInvestmentIndex++;
		}
	}
	static buyNext() {
		if (nextInvestmentIndex < investments.length) investments[nextInvestmentIndex]._buy();
	}
}

class Person extends Project{
	_buy() {
		if (player.getKnowledge() >= this.getCost() && nextPersonIndex < people.length) {
			if (nextPersonIndex === 0) {
				System.displayMessage("I used to know Larry. Good guy. Could use a haircut, though.");
				undergrad.raiseEfficiency(this.getEfficiencyFactor());
			}
			player.raiseKnowledge(-this.getCost());
			System.displayKnowledge();
			nextPersonIndex++;
		}
	}
	static buyNext() {
		if (nextPersonIndex < people.length) people[nextPersonIndex]._buy();
	}
}

class Theory extends Project{
	_buy() {
		if (player.getKnowledge() >= this.getCost() && nextTheoryIndex < theories.length) {
			if (nextTheoryIndex === 0) eniac.raiseEfficiency(this.getEfficiencyFactor());

			player.raiseKnowledge(-this.getCost());
			System.displayKnowledge();
			nextTheoryIndex++;
		}
	}
	static buyNext() {
		if (nextTheoryIndex < theories.length) theories[nextTheoryIndex]._buy();
	}
}