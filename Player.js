//Class to represent player
class Player {
	//Initializes variables
	constructor() {
		//Resource quantities
		this._moolah = 0;
		this._knowledge = 0;
		this._flops = 0;

		//Resource gain rates
		this._moolahPerSec = 0;
		this._knowledgePerSec = 0;
		this._flopsPerSec = 0;

		//Hertz checks
		this._hertz = 1;
		this._nextHertzMsgAllowed = false;
		this._nextHertzMsgCount = 1;
	}

	//Returns current moolah
	getMoolah() {
		return this._moolah;
	}
	//Raises moolah by a number and returns that number
	raiseMoolah(num) {
		this._moolah += num;
		System.displayMoolah();
		return num;
	}
	//Returns current knowledge
	getKnowledge() {
		return this._knowledge;
	}
	//Raises knowledge by a number and returns that number
	raiseKnowledge(num) {
		this._knowledge += num;
		System.displayKnowledge();
		return num;
	}
	//Returns current flops
	getFlops() {
		return this._flops;
	}
	//Raises flops by a number and returns that number
	raiseFlops(num) {
		this._flops += num;
		System.displayFlops();
		return num;
	}

	//Returns current moolah gained per second
	getMoolahPerSec() {
		return this._moolahPerSec;
	}
	//Returns current knowledge gained per second
	getKnowledgePerSec() {
		return this._knowledgePerSec;
	}
	//Returns current flops gained per second
	getFlopsPerSec() {
		return this._flopsPerSec;
	}

	//Returns current hertz
	getHertz() {
		return this._hertz;
	}
	//Raises hertz by a number
	raiseHertz(num) {
		this._hertz += num;
		return num;
	}
	//Returns true or false depending on if the next hertz increase message is allowed
	//Used to prevent message spam
	getNextHertzMsgAllowed() {
		return this._nextHertzMsgAllowed;
	}
	//Returns the count number of the next hertz message
	getNextHertzMsgCount() {
		return this._nextHertzMsgCount;
	}
	//Checks if the next hertz increase is allowed, executes if it is
	nextHertzUpdate() {
		//Hertz is increased every 300,000e^(number of the next hertz message) flops
		if (this.getFlops() >= 300000 * Math.exp(this.getNextHertzMsgCount())) {
			this._nextHertzMsgAllowed = true;
		}
		//Increases hertz by 5%, displays value, updates check variables
		if (this.getNextHertzMsgAllowed() === true) {
			this._hertz += this._hertz * 0.05;
			System.displayMessage("Hertz increased to " + System.prettify(this.getHertz()) + ". Global production increased by 5%.");
			this._nextHertzMsgAllowed = false;
			this._nextHertzMsgCount++;
		}
	}

	//Updates total moolah, sets M/s
	updateTotalMoolah() {
		var moolahRaised = 0;
 		
 		//Moolah is raised by the moolah per decisecond of business commodities
		moolahRaised += this.raiseMoolah(adbot.getAdjustedMoolahPerDeciSec());
		moolahRaised += this.raiseMoolah(router.getAdjustedMoolahPerDeciSec());

		//Moolah is raised by the moolah per decisecond of computing commodities
		moolahRaised += this.raiseMoolah(eniac.getAdjustedMoolahPerDeciSec());
		moolahRaised += this.raiseMoolah(appleII.getAdjustedMoolahPerDeciSec());

		//Displays moolah per second
		this._moolahPerSec = 10 * moolahRaised;
	}
	//Updates total knowledge, sets K/s
	updateTotalKnowledge() {
		var knowledgeRaised = 0;

		//Knowledge is raised by the knowledge per decisecond of research commodities
		knowledgeRaised += this.raiseKnowledge(undergrad.getAdjustedKnowledgePerDeciSec());
		knowledgeRaised += this.raiseKnowledge(graduate.getAdjustedKnowledgePerDeciSec());

		//Displays knowledge per second
		this._knowledgePerSec = 10 * knowledgeRaised;
	}
	//Updates total flops, sets F/s and Hz
	updateTotalFlops() {
		var flopsRaised = 0;

		//Flops is raised by the flops per decisecond of computing commodities
		flopsRaised += this.raiseFlops(eniac.getAdjustedFlopsPerDeciSec());
		flopsRaised += this.raiseFlops(appleII.getAdjustedFlopsPerDeciSec());

		//Checks for next hertz update, and if the flops goal is reached, increases hertz by 5%
		this.nextHertzUpdate();

		//Displays flops per second
		this._flopsPerSec = 10 * flopsRaised;
	}
}