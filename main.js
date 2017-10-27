//Player instantiation
var player = new Player();

//Commodity instantiation
var adbot = new Business("adbot", 10, 1);
var router = new Business("router", 500, 10);

var undergrad = new Research("undergrad", 50, 1);
var graduate = new Research("graduate", 2500, 10);

var eniac = new Computing("eniac", 200, 5, 500);
var appleII = new Computing("appleII", 10000, 50, 5000);

//Project instantiation
//Projects are added to an array as they are created
var inv0 = new Investment(300, "Targeted Ads<br><br>AdBot efficiency x2<br><br>300 Knowledge", 2);
var inv1 = new Investment(15000, "Gigabit Ethernet<br><br>Router efficiency x2<br><br>15,000 Knowledge", 2);
var investments = [inv0, inv1];

var per0 = new Person(1500, "Larry the TA<br><br>Undergrad efficiency x2<br><br>1,500 Knowledge", 2);
var per1 = new Person(40000, "Principal Investigator<br><br>Graduate efficiency x2<br><br>40,000 Knowledge", 2);
var people = [per0, per1];

var the0 = new Theory(6000, "Magnetic Memory<br><br>ENIAC efficiency x2<br><br>6,000 Knowledge", 2);
var the1 = new Theory(200000, "Zip GSX Accelerator Card<br><br>Apple II efficiency x2<br><br>200,000 Knowledge", 2);
var theories = [the0, the1];

//Window refreshes every 0.1 seconds with updated values and displays
window.setInterval(function(){
	System.updateValues();
	System.updateScreen();
}, 100);

//Cheat function for testing
function cheat() {
	player.raiseMoolah(1000000);
	player.raiseKnowledge(1000000);
	player.raiseFlops(1000000);
}

//Cheat function for testing
function megaCheat() {
	player.raiseMoolah(1000000000000);
	player.raiseKnowledge(1000000000000);
	player.raiseFlops(1000000000000);
}