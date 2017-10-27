class Player {
	constructor() {
		this._moolah = 0;
		this._knowledge = 0;
		this._flops = 0;
		this._moolahPerSec = 0;
		this._knowledgePerSec = 0;
		this._flopsPerSec = 0;
		this._hertz = 1;
		this._nextHertzMsgAllowed = false;
		this._nextHertzMsgCount = 1;
	}

	getMoolah() {
		return this._moolah;
	}
	//Raises moolah by a number and returns that number
	raiseMoolah(num) {
		this._moolah += num;
		System.displayMoolah();
		return num;
	}
	getKnowledge() {
		return this._knowledge;
	}
	//Raises knowledge by a number and returns that number
	raiseKnowledge(num) {
		this._knowledge += num;
		System.displayKnowledge();
		return num;
	}
	getFlops() {
		return this._flops;
	}
	//Raises flops by a number and returns that number
	raiseFlops(num) {
		this._flops += num;
		System.displayFlops();
		return num;
	}

	getMoolahPerSec() {
		return this._moolahPerSec;
	}
	getKnowledgePerSec() {
		return this._knowledgePerSec;
	}
	getFlopsPerSec() {
		return this._flopsPerSec;
	}

	getHertz() {
		return this._hertz;
	}
	raiseHertz(num) {
		this._hertz += num;
		return num;
	}
	getNextHertzMsgAllowed() {
		return this._nextHertzMsgAllowed;
	}
	getNextHertzMsgCount() {
		return this._nextHertzMsgCount;
	}
	checkForNextHertzUpdate() {
		if (this.getFlops() >= 300000 * Math.exp(this.getNextHertzMsgCount())) {
			this._nextHertzMsgAllowed = true;
		}
		if (this.getNextHertzMsgAllowed() === true) {
			this._hertz += 0.05;
			System.displayMessage("Hertz increased to " + System.prettify(this.getHertz()) + ". Global production increased by 5%.");
			this._nextHertzMsgAllowed = false;
			this._nextHertzMsgCount++;
		}
	}

	//Updates total moolah, sets M/s
	updateTotalMoolah() {
		var moolahRaised = 0;
 
		moolahRaised += this.raiseMoolah(adbot.getAdjustedMoolahPerDeciSec());
		moolahRaised += this.raiseMoolah(router.getAdjustedMoolahPerDeciSec());

		moolahRaised += this.raiseMoolah(eniac.getAdjustedMoolahPerDeciSec());
		moolahRaised += this.raiseMoolah(appleII.getAdjustedMoolahPerDeciSec());

		this._moolahPerSec = 10 * moolahRaised;
	}
	//Updates total knowledge, sets K/s
	updateTotalKnowledge() {
		var knowledgeRaised = 0;

		knowledgeRaised += this.raiseKnowledge(undergrad.getAdjustedKnowledgePerDeciSec());
		knowledgeRaised += this.raiseKnowledge(graduate.getAdjustedKnowledgePerDeciSec());

		this._knowledgePerSec = 10 * knowledgeRaised;
	}
	//Updates total flops, sets F/s and Hz
	updateTotalFlops() {
		var flopsRaised = 0;

		flopsRaised += this.raiseFlops(eniac.getAdjustedFlopsPerDeciSec());
		flopsRaised += this.raiseFlops(appleII.getAdjustedFlopsPerDeciSec());

		this.checkForNextHertzUpdate();

		this._flopsPerSec = 10 * flopsRaised;
	}
}