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
Project.nextInvestmentIndex = 0;
Project.nextPersonIndex = 0;
Project.nextTheoryIndex = 0;

//Class to represent investment projects
//Child class of Project
class Investment extends Project{
	//If player has enough knowledge, buys investment
	//Private function so players can't buy investments out of order
	_buy() {
		//Checks if the player has enough knowledge
		if (player.getKnowledge() >= this.getCost()) {
			//Raises efficiency of an object based on investment index, displays message if appropriate
			if (Project.nextInvestmentIndex === 0) {
				System.displayMessage("Let's not go near that whole Russia thing.");
				adbot.raiseEfficiency(this.getEfficiencyFactor());
			}
			if (Project.nextInvestmentIndex === 1) {
				System.displayMessage("Feels good to be back online.");
				router.raiseEfficiency(this.getEfficiencyFactor());
			}
			if (Project.nextInvestmentIndex === 2) {
				System.displayMessage("Crime? What crime?");
				stockbot.raiseEfficiency(this.getEfficiencyFactor());
			}
			if (Project.nextInvestmentIndex === 3) cracker.raiseEfficiency(this.getEfficiencyFactor());
			if (Project.nextInvestmentIndex === 4) algorithm.raiseEfficiency(this.getEfficiencyFactor());

			//Decreases knowledge, displays new knowledge, increments investment index
			player.raiseKnowledge(-this.getCost());
			System.displayKnowledge();
			Project.nextInvestmentIndex++;
		}
	}
	//Attempts to buy next investment, if one exists
	static buyNext() {
		if (Project.nextInvestmentIndex < investments.length) investments[Project.nextInvestmentIndex]._buy();
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
			if (Project.nextPersonIndex === 0) {
				System.displayMessage("I used to know Larry. Good guy. Could use a haircut, though.");
				undergrad.raiseEfficiency(this.getEfficiencyFactor());
			}
			if (Project.nextPersonIndex === 1) graduate.raiseEfficiency(this.getEfficiencyFactor());
			if (Project.nextPersonIndex === 2) {
				System.displayMessage("The IV drip is 80% caffeine, 20% LSD. Why? Because I thought it would be funny.");
				postdoc.raiseEfficiency(this.getEfficiencyFactor());
			}
			if (Project.nextPersonIndex === 3) {
				System.displayMessage("Breaking news: the world of academia rejoices.");
				prof.raiseEfficiency(this.getEfficiencyFactor());
			}
			if (Project.nextPersonIndex === 4) nobel.raiseEfficiency(this.getEfficiencyFactor());

			//Decreases knowledge, displays new knowledge, increments person index
			player.raiseKnowledge(-this.getCost());
			System.displayKnowledge();
			Project.nextPersonIndex++;
		}
	}
	//Attempts to buy next person, if one exists
	static buyNext() {
		if (Project.nextPersonIndex < people.length) people[Project.nextPersonIndex]._buy();
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
			if (Project.nextTheoryIndex === 0) eniac.raiseEfficiency(this.getEfficiencyFactor());
			if (Project.nextTheoryIndex === 1) {
				System.displayMessage("It's not hacking, it's...innovation.");
				apple.raiseEfficiency(this.getEfficiencyFactor());
			}
			if (Project.nextTheoryIndex === 2) tsdelta.raiseEfficiency(this.getEfficiencyFactor());
			if (Project.nextTheoryIndex === 3) {
				System.displayMessage("This tech is commonly known as 'Tofu'. I swear I'm not making this up.");
				tianhe.raiseEfficiency(this.getEfficiencyFactor());
			}
			if (Project.nextTheoryIndex === 4) {
				System.displayMessage("Had to change the name because we got sued for calling it 'Absolut Zero'.");
				dwave.raiseEfficiency(this.getEfficiencyFactor());
			}
			if (Project.nextTheoryIndex === 5) {
				Project.nextTheoryIndex++;
				System.updateScreen();
				System.transitionToFuture();
			}

			//Decreases knowledge, displays new knowledge, increments theory index
			player.raiseKnowledge(-this.getCost());
			System.displayKnowledge();
			Project.nextTheoryIndex++;
		}
	}
	//Attempts to buy next theory, if one exists
	static buyNext() {
		if (Project.nextTheoryIndex < theories.length) theories[Project.nextTheoryIndex]._buy();
	}
}