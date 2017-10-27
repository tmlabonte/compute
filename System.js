//Static class to represent the game system
//Contains display and update functions
//Intermediary between "frontend" and "backend"
class System {
	//Eliminates unnecessary decimals
	static prettify(input) {
    	var output = Math.floor(input * 100) / 100;
		return output;
	}

	//Displays player moolah
	//Automatically converts to scientific notation if necessary
	static displayMoolah() {
		if (player.getMoolah() >= 10000) {
			document.getElementById("moolah").innerHTML = "$" + player.getMoolah().toExponential(3);
		}
		else {
			document.getElementById("moolah").innerHTML = "$" + System.prettify(player.getMoolah());
		}
	}
	//Displays player knowledge
	//Automatically converts to scientific notation if necessary
	static displayKnowledge() {
		if (player.getKnowledge() >= 10000) {
			document.getElementById("knowledge").innerHTML = player.getKnowledge().toExponential(3);
		}
		else {
			document.getElementById("knowledge").innerHTML = System.prettify(player.getKnowledge());
		}
	}
	//Displays player flops
	//Automatically converts to scientific notation if necessary
	static displayFlops() {
		if (player.getFlops() >= 10000) {
			document.getElementById("flops").innerHTML = player.getFlops().toExponential(3);
		}
		else {
			document.getElementById("flops").innerHTML = System.prettify(player.getFlops());
		}
	}
	//Displays player moolah gained per second
	//Automatically converts to scientific notation if necessary
	static displayMoolahPerSec() {
		if (player.getMoolahPerSec() >= 10000) {
			document.getElementById("moolahPerSec").innerHTML = "$" + player.getMoolahPerSec().toExponential(3);
		}
		else {
			document.getElementById("moolahPerSec").innerHTML = "$" + System.prettify(player.getMoolahPerSec());
		}
	}
	//Displays player knowledge gained per second
	//Automatically converts to scientific notation if necessary
	static displayKnowledgePerSec() {
		if (player.getKnowledgePerSec() >= 10000) {
			document.getElementById("knowledgePerSec").innerHTML = player.getKnowledgePerSec().toExponential(3);
		}
		else {
			document.getElementById("knowledgePerSec").innerHTML = System.prettify(player.getKnowledgePerSec());
		}
	}
	//Displays player flops gained per second
	//Automatically converts to scientific notation if necessary
	static displayFlopsPerSec() {
		if (player.getFlopsPerSec() >= 10000) {
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
		//Display people when player reaches 75,000 flops
		if (player.getFlops() >= 75000 && document.getElementById("people").style.display === "") {
			document.getElementById("people").style.display = "block";
		}
		//Display theories when player reaches 300,000 flops
		if (player.getFlops() >= 300000 && document.getElementById("theories").style.display === "") {
			document.getElementById("theories").style.display = "block";
		}

		//Display router when player reaches 30,000 flops
		if (player.getFlops() >= 30000 && document.getElementById("router").style.display === "") {
			document.getElementById("routerDiv").style.display = "block";
		}
		//Display investments when player reaches 150,000 flops
		if (player.getFlops() >= 150000 && document.getElementById("graduate").style.display === "") {
			document.getElementById("graduateDiv").style.display = "block";
		}
		//Display investments when player reaches 600,000 flops
		if (player.getFlops() >= 600000 && document.getElementById("appleII").style.display === "") {
			document.getElementById("appleIIDiv").style.display = "block";
		}

		//Displays next projects, if they exist
		if (nextInvestmentIndex === investments.length) {
			document.getElementById("nextInvestment").innerHTML = "";
		}
		else {
			document.getElementById("nextInvestment").innerHTML = investments[nextInvestmentIndex].getEffect();
		}
		if (nextPersonIndex === people.length) {
			document.getElementById("nextPerson").innerHTML = "\n";
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
		undergrad.setInnerHtmlForInfo();
		graduate.setInnerHtmlForInfo();
		eniac.setInnerHtmlForInfo();
		appleII.setInnerHtmlForInfo();
	}
}