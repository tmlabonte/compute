var moolah = 0;
var knowledge = 0;
var flops = 0;
var moolahPerSec = 0;
var knowledgePerSec = 0;
var flopsPerSec = 0;

var typeNum = 0;
var initialCost = 0;
var currentCost = 0;
var nextCost = 0;

var adbot = 0;

var undergrad = 0;

var eniac = 0;

//Eliminates unnecessary decimals
function prettify(input){
    var output = Math.round(input * 1000000)/1000000;
	return output;
}

//Raises moolah by a number and returns that number
function raiseMoolah(num) {
	moolah += num;
	if (moolah >= 1000000) {
		document.getElementById("moolah").innerHTML = "$" + prettify(moolah).toExponential();
	}
	else {
		document.getElementById("moolah").innerHTML = "$" + prettify(moolah);
	}
	return num;
}

//Raises knowledge by a number and returns that number
function raiseKnowledge(num) {
	knowledge += num;
	if (knowledge >= 1000000) {
		document.getElementById("knowledge").innerHTML = prettify(knowledge).toExponential();
	}
	else {
		document.getElementById("knowledge").innerHTML = prettify(knowledge);
	}
	return num;
}

//Raises flops by a number and returns that number
function raiseFlops(num) {
	flops += num;
	if (flops >= 1000000) {
		document.getElementById("flops").innerHTML = prettify(flops).toExponential();
	}
	else {
		document.getElementById("flops").innerHTML = prettify(flops);
	}
	return num;
}

function buy(typeString, num) {
	if (typeString === "adbot") {
		typeNum = adbot;
		initialCost = 10;
	}
	if (typeString === "undergrad") {
		typeNum = undergrad;
		initialCost = 50;
	}
	if (typeString === "eniac") {
		typeNum = eniac;
		initialCost = 500;
	}

	currentCost = Math.floor(initialCost * Math.pow(1.1, typeNum));

	if (moolah >= currentCost) {
		typeNum++;
		if (typeString === "adbot") adbot++;
		if (typeString === "undergrad") undergrad++;
		if (typeString === "eniac") eniac++;
		moolah -= currentCost;

		document.getElementById(typeString).innerHTML = typeNum;
		if (moolah >= 1000000) {
			document.getElementById("moolah").innerHTML = "$" + prettify(moolah).toExponential();
		}
		else {
			document.getElementById("moolah").innerHTML = "$" + prettify(moolah);
		}

		nextCost = Math.floor(initialCost * Math.pow(1.1, typeNum));
		document.getElementById(typeString + "Cost").innerHTML = "$" + prettify(nextCost);
	}
}

//Update total moolah and return M/s
function updateMoolah() {
	var moolahRaised = 0;

	moolahRaised += raiseMoolah(0.1 * adbot);

	moolahRaised += raiseMoolah(0.5 * eniac);

	return 10 * moolahRaised;
}

//Update total knowledge and return K/s
function updateKnowledge() {
	var knowledgeRaised = 0;

	knowledgeRaised += raiseKnowledge(0.01 * undergrad);

	return 10 * knowledgeRaised;
}

//Update total FLOPs and return F/s
function updateFlops() {
	var flopsRaised = 0;

	flopsRaised += raiseFlops(500 * eniac);

	return 10 * flopsRaised;
}

function updateValues() {
	moolahPerSec = updateMoolah();
	knowledgePerSec = updateKnowledge();
	flopsPerSec = updateFlops();

	if (moolahPerSec >= 1000000) {
		document.getElementById("moolahPerSec").innerHTML = "$" + prettify(moolahPerSec).toExponential();
	}
	else {
		document.getElementById("moolahPerSec").innerHTML = "$" + prettify(moolahPerSec);
	}

	if (knowledgePerSec >= 1000000) {
		document.getElementById("knowledgePerSec").innerHTML = prettify(knowledgePerSec).toExponential();
	}
	else {
		document.getElementById("knowledgePerSec").innerHTML = prettify(knowledgePerSec);
	}

	if (flopsPerSec >= 1000000) {
		document.getElementById("flopsPerSec").innerHTML = prettify(flopsPerSec).toExponential();
	}
	else {
		document.getElementById("flopsPerSec").innerHTML = prettify(flopsPerSec);
	}
}

function updateScreen() {
	if (moolah >= 10) {
		document.getElementById("middleColumn").style.display = "block";
	}
	if (knowledge >= 25) {
		document.getElementById("rightColumn").style.display = "block";
	}
}

window.setInterval(function(){
	updateValues();
	updateScreen();
}, 100);