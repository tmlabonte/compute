var nextInvestmentIndex = 0;
var nextPersonIndex = 0;
var nextTheoryIndex = 0;

//Class to represent projects (i.e., upgrades)
//Parent class of Investment, Person, and Theory
class Project {
	//Initializes variables
	constructor(cost, effect, efficiencyFactor) {
		//Initial cost
		this._cost = cost;
		//Effect (i.e., description)
		//Format: name, newline, effect, newline, cost
		this._effect = effect;
		//Factor by which project increases commodity efficiency
		this._efficiencyFactor = efficiencyFactor;
	}

	//Returns cost
	getCost() {
		return this._cost;
	}
	//Returns effect
	getEffect() {
		return this._effect;
	}
	//Returns efficiency factor
	getEfficiencyFactor() {
		return this._efficiencyFactor;
	}
}

//Class to represent investment projects
//Child class of Project
class Investment extends Project{
	//If player has enough knowledge, buys investment
	//Private function so players can't buy investments out of order
	_buy() {
		//Checks if the player has enough knowledge
		if (player.getKnowledge() >= this.getCost()) {
			//Raises efficiency of an object based on investment index, displays message if appropriate
			if (nextInvestmentIndex === 0) adbot.raiseEfficiency(this.getEfficiencyFactor());
			if (nextInvestmentIndex === 1) {
				System.displayMessage("Feels good to be back online.");
				router.raiseEfficiency(this.getEfficiencyFactor());
			}
			if (nextInvestmentIndex === 2) stockbot.raiseEfficiency(this.getEfficiencyFactor());
			if (nextInvestmentIndex === 3) cracker.raiseEfficiency(this.getEfficiencyFactor());
			if (nextInvestmentIndex === 4) algorithm.raiseEfficiency(this.getEfficiencyFactor());

			//Decreases knowledge, displays new knowledge, increments investment index
			player.raiseKnowledge(-this.getCost());
			System.displayKnowledge();
			nextInvestmentIndex++;
		}
	}
	//Attempts to buy next investment, if one exists
	static buyNext() {
		if (nextInvestmentIndex < investments.length) investments[nextInvestmentIndex]._buy();
	}
}

//Class to represent person projects
//Child class of Project
class Person extends Project{
	//If player has enough knowledge, buys person
	//Private function so players can't buy people out of order
	_buy() {
		//Checks if the player has enough knowledge
		if (player.getKnowledge() >= this.getCost()) {
			//Raises efficiency of an object based on person index, displays message if appropriate
			if (nextPersonIndex === 0) {
				System.displayMessage("I used to know Larry. Good guy. Could use a haircut, though.");
				undergrad.raiseEfficiency(this.getEfficiencyFactor());
			}
			if (nextPersonIndex === 1) graduate.raiseEfficiency(this.getEfficiencyFactor());
			if (nextPersonIndex === 2) postdoc.raiseEfficiency(this.getEfficiencyFactor());
			if (nextPersonIndex === 3) prof.raiseEfficiency(this.getEfficiencyFactor());
			if (nextPersonIndex === 4) nobel.raiseEfficiency(this.getEfficiencyFactor());

			//Decreases knowledge, displays new knowledge, increments person index
			player.raiseKnowledge(-this.getCost());
			System.displayKnowledge();
			nextPersonIndex++;
		}
	}
	//Attempts to buy next person, if one exists
	static buyNext() {
		if (nextPersonIndex < people.length) people[nextPersonIndex]._buy();
	}
}

//Class to represent theory projects
//Child class of Project
class Theory extends Project{
	//If player has enough knowledge, buys theory
	//Private function so players can't buy theories out of order
	_buy() {
		//Checks if the player has enough knowledge
		if (player.getKnowledge() >= this.getCost()) {
			//Raises efficiency of an object based on theory index, displays message if appropriate
			if (nextTheoryIndex === 0) eniac.raiseEfficiency(this.getEfficiencyFactor());
			if (nextTheoryIndex === 1) {
				System.displayMessage("It's not hacking, it's...innovation.");
				apple.raiseEfficiency(this.getEfficiencyFactor());
			}
			if (nextTheoryIndex === 2) tsdelta.raiseEfficiency(this.getEfficiencyFactor());
			if (nextTheoryIndex === 3) tianhe.raiseEfficiency(this.getEfficiencyFactor());
			if (nextTheoryIndex === 4) dwave.raiseEfficiency(this.getEfficiencyFactor());

			//Decreases knowledge, displays new knowledge, increments theory index
			player.raiseKnowledge(-this.getCost());
			System.displayKnowledge();
			nextTheoryIndex++;
		}
	}
	//Attempts to buy next theory, if one exists
	static buyNext() {
		if (nextTheoryIndex < theories.length) theories[nextTheoryIndex]._buy();
	}
}