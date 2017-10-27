class System {
	//Eliminates unnecessary decimals
	static prettify(input) {
    	var output = Math.round(input * 1000000) / 1000000;
		return output;
	}

	static displayMoolah() {
		if (player.getMoolah() >= 1000000) {
			document.getElementById("moolah").innerHTML = "$" + System.prettify(player.getMoolah()).toExponential();
		}
		else {
			document.getElementById("moolah").innerHTML = "$" + System.prettify(player.getMoolah());
		}
	}
	static displayKnowledge() {
		if (player.getKnowledge() >= 1000000) {
			document.getElementById("knowledge").innerHTML = System.prettify(player.getKnowledge()).toExponential();
		}
		else {
			document.getElementById("knowledge").innerHTML = System.prettify(player.getKnowledge());
		}
	}
	static displayFlops() {
		if (player.getFlops() >= 1000000) {
			document.getElementById("flops").innerHTML = System.prettify(player.getFlops()).toExponential();
		}
		else {
			document.getElementById("flops").innerHTML = System.prettify(player.getFlops());
		}
	}
	static displayMoolahPerSec() {
		if (player.getMoolahPerSec() >= 1000000) {
			document.getElementById("moolahPerSec").innerHTML = "$" + System.prettify(player.getMoolahPerSec()).toExponential();
		}
		else {
			document.getElementById("moolahPerSec").innerHTML = "$" + System.prettify(player.getMoolahPerSec());
		}
	}
	static displayKnowledgePerSec() {
		if (player.getKnowledgePerSec() >= 1000000) {
			document.getElementById("knowledgePerSec").innerHTML = System.prettify(player.getKnowledgePerSec()).toExponential();
		}
		else {
			document.getElementById("knowledgePerSec").innerHTML = System.prettify(player.getKnowledgePerSec());
		}
	}
	static displayFlopsPerSec() {
		if (player.getFlopsPerSec() >= 1000000) {
			document.getElementById("flopsPerSec").innerHTML = System.prettify(player.getFlopsPerSec()).toExponential();
		}
		else {
			document.getElementById("flopsPerSec").innerHTML = System.prettify(player.getFlopsPerSec());
		}
	}

	static displayMessage(msg) {
	    document.getElementById("readout5").innerHTML = document.getElementById("readout4").innerHTML;
	    document.getElementById("readout4").innerHTML = document.getElementById("readout3").innerHTML;
	    document.getElementById("readout3").innerHTML = document.getElementById("readout2").innerHTML;
	    document.getElementById("readout2").innerHTML = document.getElementById("readout1").innerHTML;
	    document.getElementById("readout1").innerHTML = msg;
	}

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

	static updateScreen() {
		if (player.getMoolah() >= 30 && document.getElementById("research").style.display === "") {
			document.getElementById("research").style.display = "block";
		}
		if (player.getKnowledge() >= 25 && document.getElementById("computing").style.display === "") {
			document.getElementById("computing").style.display = "block";
		}

		if (player.getFlops() >= 15000 && document.getElementById("investments").style.display === "") {
			document.getElementById("investments").style.display = "block";
		}
		if (player.getFlops() >= 75000 && document.getElementById("people").style.display === "") {
			document.getElementById("people").style.display = "block";
		}
		if (player.getFlops() >= 300000 && document.getElementById("theories").style.display === "") {
			document.getElementById("theories").style.display = "block";
		}

		if (player.getFlops() >= 30000 && document.getElementById("router").style.display === "") {
			document.getElementById("routerDiv").style.display = "block";
		}
		if (player.getFlops() >= 150000 && document.getElementById("graduate").style.display === "") {
			document.getElementById("graduateDiv").style.display = "block";
		}
		if (player.getFlops() >= 600000 && document.getElementById("appleII").style.display === "") {
			document.getElementById("appleIIDiv").style.display = "block";
		}

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

		//Update perSec values of all commodities
		adbot.setInnerHtmlForInfo();
		router.setInnerHtmlForInfo();
		undergrad.setInnerHtmlForInfo();
		graduate.setInnerHtmlForInfo();
		eniac.setInnerHtmlForInfo();
		appleII.setInnerHtmlForInfo();
	}
}