var currentColumn = 1;

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
		nameRowObj[currentColumn] = currentColumn;

		var adbotRowObj = player.getDataRow(1);
		if (adbot.getAmount() !== 0) {
			adbotRowObj[currentColumn] = (adbot.getAdjustedMoolahPerDeciSec() / (adbot.getCurrentCost() * adbot.getAmount()));
		}
		else {
			adbotRowObj[currentColumn] = (0.1 * adbot.getInitialMoolahPerSec() * player.getHertz()) / adbot.getCurrentCost();
		}

		var routerRowObj = player.getDataRow(2);
		if (router.getAmount() !== 0) {
			routerRowObj[currentColumn] = (router.getAdjustedMoolahPerDeciSec() / (router.getCurrentCost() * router.getAmount()));
		}
		else {
			routerRowObj[currentColumn] = (0.1 * router.getInitialMoolahPerSec() * player.getHertz()) / router.getCurrentCost();
		}

		var stockbotRowObj = player.getDataRow(3);
		if (stockbot.getAmount() !== 0) {
			stockbotRowObj[currentColumn] = (stockbot.getAdjustedMoolahPerDeciSec() / (stockbot.getCurrentCost() * stockbot.getAmount()));
		}
		else {
			stockbotRowObj[currentColumn] = (0.1 * stockbot.getInitialMoolahPerSec() * player.getHertz()) / stockbot.getCurrentCost();
		}

		var crackerRowObj = player.getDataRow(4);
		if (cracker.getAmount() !== 0) {
			crackerRowObj[currentColumn] = (cracker.getAdjustedMoolahPerDeciSec() / (cracker.getCurrentCost() * cracker.getAmount()));
		}
		else {
			crackerRowObj[currentColumn] = (0.1 * cracker.getInitialMoolahPerSec() * player.getHertz()) / cracker.getCurrentCost();
		}

		var algorithmRowObj = player.getDataRow(5);
		if (algorithm.getAmount() !== 0) {
			algorithmRowObj[currentColumn] = (algorithm.getAdjustedMoolahPerDeciSec() / (algorithm.getCurrentCost() * algorithm.getAmount()));
		}
		else {
			algorithmRowObj[currentColumn] = (0.1 * algorithm.getInitialMoolahPerSec() * player.getHertz()) / algorithm.getCurrentCost();
		}

		var eniacRowObj = player.getDataRow(6);
		if (eniac.getAmount() !== 0) {
			eniacRowObj[currentColumn] = (eniac.getAdjustedMoolahPerDeciSec() / (eniac.getCurrentCost() * eniac.getAmount()));
		}
		else {
			eniacRowObj[currentColumn] = (0.1 * eniac.getInitialMoolahPerSec() * player.getHertz()) / eniac.getCurrentCost();
		}

		var appleRowObj = player.getDataRow(7);
		if (apple.getAmount() !== 0) {
			appleRowObj[currentColumn] = (apple.getAdjustedMoolahPerDeciSec() / (apple.getCurrentCost() * apple.getAmount()));
		}
		else {
			appleRowObj[currentColumn] = (0.1 * apple.getInitialMoolahPerSec() * player.getHertz()) / apple.getCurrentCost();
		}

		var tsdeltaRowObj = player.getDataRow(8);
		if (tsdelta.getAmount() !== 0) {
			tsdeltaRowObj[currentColumn] = (tsdelta.getAdjustedMoolahPerDeciSec() / (tsdelta.getCurrentCost() * tsdelta.getAmount()));
		}
		else {
			tsdeltaRowObj[currentColumn] = (0.1 * tsdelta.getInitialMoolahPerSec() * player.getHertz()) / tsdelta.getCurrentCost();
		}

		var tianheRowObj = player.getDataRow(9);
		if (tianhe.getAmount() !== 0) {
			tianheRowObj[currentColumn] = (tianhe.getAdjustedMoolahPerDeciSec() / (tianhe.getCurrentCost() * tianhe.getAmount()));
		}
		else {
			tianheRowObj[currentColumn] = (0.1 * tianhe.getInitialMoolahPerSec() * player.getHertz()) / tianhe.getCurrentCost();
		}

		var dwaveRowObj = player.getDataRow(10);
		if (dwave.getAmount() !== 0) {
			dwaveRowObj[currentColumn] = (dwave.getAdjustedMoolahPerDeciSec() / (dwave.getCurrentCost() * dwave.getAmount()));
		}
		else {
			dwaveRowObj[currentColumn] = (0.1 * dwave.getInitialMoolahPerSec() * player.getHertz()) / dwave.getCurrentCost();
		}

		currentColumn++;
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
		//Display cracker when player reaches 200,000,000 flops
		if (player.getFlops() >= 2e8 && document.getElementById("crackerDiv").style.display === "") {
			document.getElementById("crackerDiv").style.display = "block";
		}
		//Display algorithm when player reaches 1,500,000,000 flops
		if (player.getFlops() >= 1.5e9 && document.getElementById("algorithmDiv").style.display === "") {
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
		//Display nobel when player reaches 2,500,000,000 flops
		if (player.getFlops() >= 2.5e9 && document.getElementById("nobelDiv").style.display === "") {
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
		//Display dwave when player reaches 5,000,000,000 flops
		if (player.getFlops() >= 5e9 && document.getElementById("dwaveDiv").style.display === "") {
			document.getElementById("dwaveDiv").style.display = "block";
		}

		//Displays next projects, if they exist
		if (nextInvestmentIndex === investments.length) {
			document.getElementById("nextInvestment").innerHTML = "";
		}
		else {
			document.getElementById("nextInvestment").innerHTML = investments[nextInvestmentIndex].getEffect();
		}
		if (nextPersonIndex === people.length) {
			document.getElementById("nextPerson").innerHTML = "";
		}
		else {
			document.getElementById("nextPerson").innerHTML = people[nextPersonIndex].getEffect();
		}
		if (nextTheoryIndex === theories.length) {
			document.getElementById("nextTheory").innerHTML = "";
		}
		else {
			document.getElementById("nextTheory").innerHTML = theories[nextTheoryIndex].getEffect();
		}

		//Update cost and perSec display values of all commodities
		adbot.setInnerHtmlForInfo();
		router.setInnerHtmlForInfo();
		stockbot.setInnerHtmlForInfo();
		cracker.setInnerHtmlForInfo();
		algorithm.setInnerHtmlForInfo();

		undergrad.setInnerHtmlForInfo();
		graduate.setInnerHtmlForInfo();
		postdoc.setInnerHtmlForInfo();
		prof.setInnerHtmlForInfo();
		nobel.setInnerHtmlForInfo();

		eniac.setInnerHtmlForInfo();
		apple.setInnerHtmlForInfo();
		tsdelta.setInnerHtmlForInfo();
		tianhe.setInnerHtmlForInfo();
		dwave.setInnerHtmlForInfo();
	}

	/*static save() {
		var savedata = {

		}
	}*/
}