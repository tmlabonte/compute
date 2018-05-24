//Static class to represent the game system
//Contains display and update functions
//Intermediary between "frontend" and "backend"
class System {
	//Eliminates unnecessary decimals
	static prettify(input) {
    	var output = Math.floor(input);
		return output;
	}

	//Displays player moolah
	//Automatically converts to scientific notation if necessary
	static displayMoolah() {
		if (player.getMoolah() >= 1000000) {
			document.getElementById("moolah").innerHTML = "$" + player.getMoolah().toExponential(3);
		}
		else {
			document.getElementById("moolah").innerHTML = "$" + System.prettify(player.getMoolah());
		}
	}
	//Displays player knowledge
	//Automatically converts to scientific notation if necessary
	static displayKnowledge() {
		if (player.getKnowledge() >= 1000000) {
			document.getElementById("knowledge").innerHTML = player.getKnowledge().toExponential(3);
		}
		else {
			document.getElementById("knowledge").innerHTML = System.prettify(player.getKnowledge());
		}
	}
	//Displays player flops
	//Automatically converts to scientific notation if necessary
	static displayFlops() {
		if (player.getFlops() >= 1000000) {
			document.getElementById("flops").innerHTML = player.getFlops().toExponential(3);
		}
		else {
			document.getElementById("flops").innerHTML = System.prettify(player.getFlops());
		}
	}
	//Displays player moolah gained per second
	//Automatically converts to scientific notation if necessary
	static displayMoolahPerSec() {
		if (player.getMoolahPerSec() >= 1000000) {
			document.getElementById("moolahPerSec").innerHTML = "$" + player.getMoolahPerSec().toExponential(3);
		}
		else {
			document.getElementById("moolahPerSec").innerHTML = "$" + System.prettify(player.getMoolahPerSec());
		}
	}
	//Displays player knowledge gained per second
	//Automatically converts to scientific notation if necessary
	static displayKnowledgePerSec() {
		if (player.getKnowledgePerSec() >= 1000000) {
			document.getElementById("knowledgePerSec").innerHTML = player.getKnowledgePerSec().toExponential(3);
		}
		else {
			document.getElementById("knowledgePerSec").innerHTML = System.prettify(player.getKnowledgePerSec());
		}
	}
	//Displays player flops gained per second
	//Automatically converts to scientific notation if necessary
	static displayFlopsPerSec() {
		if (player.getFlopsPerSec() >= 1000000) {
			document.getElementById("flopsPerSec").innerHTML = player.getFlopsPerSec().toExponential(3);
		}
		else {
			document.getElementById("flopsPerSec").innerHTML = System.prettify(player.getFlopsPerSec());
		}
	}

	//Displays messages on the console
	//Thanks to Frank Lantz for the code, check out his game Universal Paperclips
	static displayMessage(msg) {
	    document.getElementById("readout5").innerHTML = document.getElementById("readout4").innerHTML;
	    document.getElementById("readout4").innerHTML = document.getElementById("readout3").innerHTML;
	    document.getElementById("readout3").innerHTML = document.getElementById("readout2").innerHTML;
	    document.getElementById("readout2").innerHTML = document.getElementById("readout1").innerHTML;
	    document.getElementById("readout1").innerHTML = msg;
	}

	//Populates a column of data for every 0.1 seconds
	static updateData() {
		var nameRowObj = player.getDataRow(0);
		nameRowObj[System.currentColumn] = System.currentColumn;

		var adbotRowObj = player.getDataRow(1);
		if (adbot.getAmount() !== 0) {
			adbotRowObj[System.currentColumn] = (adbot.getAdjustedMoolahPerDeciSec() / (adbot.getCurrentCost() * adbot.getAmount()));
		}
		else {
			adbotRowObj[System.currentColumn] = (0.1 * adbot.getInitialMoolahPerSec() * player.getHertz()) / adbot.getCurrentCost();
		}

		var routerRowObj = player.getDataRow(2);
		if (router.getAmount() !== 0) {
			routerRowObj[System.currentColumn] = (router.getAdjustedMoolahPerDeciSec() / (router.getCurrentCost() * router.getAmount()));
		}
		else {
			routerRowObj[System.currentColumn] = (0.1 * router.getInitialMoolahPerSec() * player.getHertz()) / router.getCurrentCost();
		}

		var stockbotRowObj = player.getDataRow(3);
		if (stockbot.getAmount() !== 0) {
			stockbotRowObj[System.currentColumn] = (stockbot.getAdjustedMoolahPerDeciSec() / (stockbot.getCurrentCost() * stockbot.getAmount()));
		}
		else {
			stockbotRowObj[System.currentColumn] = (0.1 * stockbot.getInitialMoolahPerSec() * player.getHertz()) / stockbot.getCurrentCost();
		}

		var crackerRowObj = player.getDataRow(4);
		if (cracker.getAmount() !== 0) {
			crackerRowObj[System.currentColumn] = (cracker.getAdjustedMoolahPerDeciSec() / (cracker.getCurrentCost() * cracker.getAmount()));
		}
		else {
			crackerRowObj[System.currentColumn] = (0.1 * cracker.getInitialMoolahPerSec() * player.getHertz()) / cracker.getCurrentCost();
		}

		var algorithmRowObj = player.getDataRow(5);
		if (algorithm.getAmount() !== 0) {
			algorithmRowObj[System.currentColumn] = (algorithm.getAdjustedMoolahPerDeciSec() / (algorithm.getCurrentCost() * algorithm.getAmount()));
		}
		else {
			algorithmRowObj[System.currentColumn] = (0.1 * algorithm.getInitialMoolahPerSec() * player.getHertz()) / algorithm.getCurrentCost();
		}

		var eniacRowObj = player.getDataRow(6);
		if (eniac.getAmount() !== 0) {
			eniacRowObj[System.currentColumn] = (eniac.getAdjustedMoolahPerDeciSec() / (eniac.getCurrentCost() * eniac.getAmount()));
		}
		else {
			eniacRowObj[System.currentColumn] = (0.1 * eniac.getInitialMoolahPerSec() * player.getHertz()) / eniac.getCurrentCost();
		}

		var appleRowObj = player.getDataRow(7);
		if (apple.getAmount() !== 0) {
			appleRowObj[System.currentColumn] = (apple.getAdjustedMoolahPerDeciSec() / (apple.getCurrentCost() * apple.getAmount()));
		}
		else {
			appleRowObj[System.currentColumn] = (0.1 * apple.getInitialMoolahPerSec() * player.getHertz()) / apple.getCurrentCost();
		}

		var tsdeltaRowObj = player.getDataRow(8);
		if (tsdelta.getAmount() !== 0) {
			tsdeltaRowObj[System.currentColumn] = (tsdelta.getAdjustedMoolahPerDeciSec() / (tsdelta.getCurrentCost() * tsdelta.getAmount()));
		}
		else {
			tsdeltaRowObj[System.currentColumn] = (0.1 * tsdelta.getInitialMoolahPerSec() * player.getHertz()) / tsdelta.getCurrentCost();
		}

		var tianheRowObj = player.getDataRow(9);
		if (tianhe.getAmount() !== 0) {
			tianheRowObj[System.currentColumn] = (tianhe.getAdjustedMoolahPerDeciSec() / (tianhe.getCurrentCost() * tianhe.getAmount()));
		}
		else {
			tianheRowObj[System.currentColumn] = (0.1 * tianhe.getInitialMoolahPerSec() * player.getHertz()) / tianhe.getCurrentCost();
		}

		var dwaveRowObj = player.getDataRow(10);
		if (dwave.getAmount() !== 0) {
			dwaveRowObj[System.currentColumn] = (dwave.getAdjustedMoolahPerDeciSec() / (dwave.getCurrentCost() * dwave.getAmount()));
		}
		else {
			dwaveRowObj[System.currentColumn] = (0.1 * dwave.getInitialMoolahPerSec() * player.getHertz()) / dwave.getCurrentCost();
		}

		System.currentColumn++;
	}

	//Consolidates update functions
	static updateValues() {
		player.updateTotalMoolah();
		player.updateTotalKnowledge();
		player.updateTotalFlops();

		System.displayMoolah();
		System.displayKnowledge();
		System.displayFlops();
		System.displayMoolahPerSec();
		System.displayKnowledgePerSec();
		System.displayFlopsPerSec();
	}

	//Updates screen display elements
	static updateScreen() {
		//Display research when player reaches 30 moolah
		if (player.getMoolah() >= 30 && document.getElementById("research").style.display === "") {
			document.getElementById("research").style.display = "block";
		}
		//Display computing when player reaches 25 knowledge
		if (player.getKnowledge() >= 25 && document.getElementById("computing").style.display === "") {
			document.getElementById("computing").style.display = "block";
		}

		//Display investments when player reaches 15,000 flops
		if (player.getFlops() >= 15000 && document.getElementById("investments").style.display === "") {
			document.getElementById("investments").style.display = "block";
		}
		//Display people when player reaches 50,000 flops
		if (player.getFlops() >= 50000 && document.getElementById("people").style.display === "") {
			document.getElementById("people").style.display = "block";
		}
		//Display theories when player reaches 100,000 flops
		if (player.getFlops() >= 100000 && document.getElementById("theories").style.display === "") {
			document.getElementById("theories").style.display = "block";
		}

		//Display router when player reaches 30,000 flops
		if (player.getFlops() >= 30000 && document.getElementById("routerDiv").style.display === "") {
			document.getElementById("routerDiv").style.display = "block";
		}
		//Display stockbot when player reaches 5,000,000 flops
		if (player.getFlops() >= 5e6 && document.getElementById("stockbotDiv").style.display === "") {
			document.getElementById("stockbotDiv").style.display = "block";
		}
		//Display cracker when player reaches 175,000,000 flops
		if (player.getFlops() >= 1.75e8 && document.getElementById("crackerDiv").style.display === "") {
			document.getElementById("crackerDiv").style.display = "block";
		}
		//Display algorithm when player reaches 1,000,000,000 flops
		if (player.getFlops() >= 1e9 && document.getElementById("algorithmDiv").style.display === "") {
			document.getElementById("algorithmDiv").style.display = "block";
		}

		//Display graduate when player reaches 150,000 flops
		if (player.getFlops() >= 150000 && document.getElementById("graduateDiv").style.display === "") {
			document.getElementById("graduateDiv").style.display = "block";
		}
		//Display postdoc when player reaches 15,000,000 flops
		if (player.getFlops() >= 1.5e7 && document.getElementById("postdocDiv").style.display === "") {
			document.getElementById("postdocDiv").style.display = "block";
		}
		//Display prof when player reaches 250,000,000 flops
		if (player.getFlops() >= 2.5e8 && document.getElementById("profDiv").style.display === "") {
			document.getElementById("profDiv").style.display = "block";
		}
		//Display nobel when player reaches 2,000,000,000 flops
		if (player.getFlops() >= 2e9 && document.getElementById("nobelDiv").style.display === "") {
			document.getElementById("nobelDiv").style.display = "block";
		}

		//Display apple when player reaches 600,000 flops
		if (player.getFlops() >= 600000 && document.getElementById("appleDiv").style.display === "") {
			document.getElementById("appleDiv").style.display = "block";
		}
		//Display tsdelta when player reaches 60,000,000 flops
		if (player.getFlops() >= 6e7 && document.getElementById("tsdeltaDiv").style.display === "") {
			document.getElementById("tsdeltaDiv").style.display = "block";
		}
		//Display tianhe when player reaches 350,000,000 flops
		if (player.getFlops() >= 3.5e8 && document.getElementById("tianheDiv").style.display === "") {
			document.getElementById("tianheDiv").style.display = "block";
		}
		//Display dwave when player reaches 3,000,000,000 flops
		if (player.getFlops() >= 3e9 && document.getElementById("dwaveDiv").style.display === "") {
			document.getElementById("dwaveDiv").style.display = "block";
		}

		//Displays next projects, if they exist
		if (Project.nextInvestmentIndex >= investments.length) {
			document.getElementById("nextInvestment").innerHTML = "";
		}
		else {
			document.getElementById("nextInvestment").innerHTML = investments[Project.nextInvestmentIndex].getEffect();
		}
		if (Project.nextPersonIndex >= people.length) {
			document.getElementById("nextPerson").innerHTML = "";
		}
		else {
			document.getElementById("nextPerson").innerHTML = people[Project.nextPersonIndex].getEffect();
		}
		if (Project.nextTheoryIndex >= theories.length) {
			document.getElementById("nextTheory").innerHTML = "";
		}
		else {
			document.getElementById("nextTheory").innerHTML = theories[Project.nextTheoryIndex].getEffect();
		}

		//Update cost and perSec display values of all commodities
		for (var i=0; i<15; i++) {
			commodities[i].setInnerHtmlForInfo();
		}
	}

	static save() {
		var saveData = {
			moolah: player.getMoolah(),
			knowledge: player.getKnowledge(),
			flops: player.getFlops(),

			adbotCurrentCost: adbot.getCurrentCost(),
			adbotAmount: adbot.getAmount(),
			adbotEfficiency: adbot.getEfficiency(),

			routerCurrentCost: router.getCurrentCost(),
			routerAmount: router.getAmount(),
			routerEfficiency: router.getEfficiency(),

			stockbotCurrentCost: stockbot.getCurrentCost(),
			stockbotAmount: stockbot.getAmount(),
			stockbotEfficiency: stockbot.getEfficiency(),

			crackerCurrentCost: cracker.getCurrentCost(),
			crackerAmount: cracker.getAmount(),
			crackerEfficiency: cracker.getEfficiency(),

			algorithmCurrentCost: algorithm.getCurrentCost(),
			algorithmAmount: algorithm.getAmount(),
			algorithmEfficiency: algorithm.getEfficiency(),

			nextInvestmentIndex: Project.nextInvestmentIndex,
			nextPersonIndex: Project.nextPersonIndex,
			nextTheoryIndex: Project.nextTheoryIndex,

			future: System.future
		};
		localStorage.setItem("saveData", JSON.stringify(saveData));
	}
	static deleteSave() {
		localStorage.removeItem("saveData");
		location.reload();
	}
	static load() {
		var savegame = JSON.parse(localStorage.getItem("saveData"));

		if (typeof savegame.moolah !== "undefined") player.raiseMoolah(savegame.moolah);
		if (typeof savegame.knowledge !== "undefined") player.raiseKnowledge(savegame.knowledge);
		if (typeof savegame.flops !== "undefined") player.raiseFlops(savegame.flops);

		if (typeof savegame.adbotCurrentCost !== "undefined") adbot.setCurrentCost(savegame.adbotCurrentCost);
		if (typeof savegame.adbotAmount !== "undefined") {
			adbot.raiseAmount(savegame.adbotAmount);
			document.getElementById("adbot").innerHTML = adbot.getAmount();
		}
		if (typeof savegame.adbotEfficiency !== "undefined") adbot.raiseEfficiency(savegame.adbotEfficiency);

		if (typeof savegame.routerCurrentCost !== "undefined") router.setCurrentCost(savegame.routerCurrentCost);
		if (typeof savegame.routerAmount !== "undefined") {
			router.raiseAmount(savegame.routerAmount);
			document.getElementById("router").innerHTML = router.getAmount();
		}
		if (typeof savegame.routerEfficiency !== "undefined") router.raiseEfficiency(savegame.routerEfficiency);

		if (typeof savegame.stockbotCurrentCost !== "undefined") stockbot.setCurrentCost(savegame.stockbotCurrentCost);
		if (typeof savegame.stockbotAmount !== "undefined") {
			stockbot.raiseAmount(savegame.stockbotAmount);
			document.getElementById("stockbot").innerHTML = stockbot.getAmount();
		}
		if (typeof savegame.stockbotEfficiency !== "undefined") stockbot.raiseEfficiency(savegame.stockbotEfficiency);

		if (typeof savegame.crackerCurrentCost !== "undefined") cracker.setCurrentCost(savegame.crackerCurrentCost);
		if (typeof savegame.crackerAmount !== "undefined") {
			cracker.raiseAmount(savegame.crackerAmount);
			document.getElementById("cracker").innerHTML = cracker.getAmount();
		}
		if (typeof savegame.crackerEfficiency !== "undefined") cracker.raiseEfficiency(savegame.crackerEfficiency);

		if (typeof savegame.algorithmCurrentCost !== "undefined") algorithm.setCurrentCost(savegame.algorithmCurrentCost);
		if (typeof savegame.algorithmAmount !== "undefined") {
			algorithm.raiseAmount(savegame.algorithmAmount);
			document.getElementById("algorithm").innerHTML = algorithm.getAmount();
		}
		if (typeof savegame.algorithmEfficiency !== "undefined") algorithm.raiseEfficiency(savegame.algorithmEfficiency);

		if (typeof savegame.nextInvestmentIndex !== "undefined") Project.nextInvestmentIndex = savegame.nextInvestmentIndex;
		if (typeof savegame.nextPersonIndex !== "undefined") Project.nextPersonIndex = savegame.nextPersonIndex;
		if (typeof savegame.nextTheoryIndex !== "undefined") Project.nextTheoryIndex = savegame.nextTheoryIndex;

		if (typeof savegame.future !== "undefined") System.future = savegame.future;
	}

	static transitionToFuture() {
		System.displayMessage("Clock is set for October 21, 3015. Here we go!");
		System.amountAtTransition = {
			"adbot": adbot.getAmount(),
			"router": router.getAmount(),
			"stockbot": stockbot.getAmount(),
			"cracker": cracker.getAmount(),
			"algorithm": algorithm.getAmount(),

			"undergrad": undergrad.getAmount(),
			"graduate": graduate.getAmount(),
			"postdoc": postdoc.getAmount(),
			"prof": prof.getAmount(),
			"nobel": nobel.getAmount(),

			"eniac": eniac.getAmount(),
			"apple": apple.getAmount(),
			"tsdelta": tsdelta.getAmount(),
			"tianhe": tianhe.getAmount(),
			"dwave": dwave.getAmount(),

			"moolah": player.getMoolah(),
			"knowledge": player.getKnowledge(),
			"flops": player.getFlops(),
		};
		System.transition = true;
		document.getElementById("envelope").className += "shake-opacity";
	}

	static decreaseForFuture(index) {
		var obj = commodities[index];
		var amountToDecrease = Math.ceil(System.amountAtTransition[obj.getName()] / 50);
		if (obj.getAmount() - amountToDecrease >= 0 && obj.getAmount() > 0) {
			obj.raiseAmount(-amountToDecrease);
		}
		else {
			obj.raiseAmount(0 - obj.getAmount());
			document.getElementById(obj.getName() + "Div").style.display = "none";
		}
		document.getElementById(obj.getName()).innerHTML = obj.getAmount();
	}
}
System.currentColumn = 1;
System.transition = false;
System.future = false;