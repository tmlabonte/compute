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
var inv0 = new Investment(300, "Targeted Ads<br><br>AdBot effectiveness x2<br><br>300 Knowledge", 2);
var investments = [inv0];

var per0 = new Person(1500, "Larry the TA<br><br>Undergrad effectiveness x2<br><br>1500 Knowledge", 2);
var people = [per0];

var the0 = new Theory(6000, "Magnetic Memory<br><br>ENIAC effectiveness x2<br><br>6000 Knowledge", 2);
var theories = [the0];

//Window refresh every 0.1 seconds with updated values and displays
window.setInterval(function(){
	System.updateValues();
	System.updateScreen();
}, 100 * player.getHertz());

//Cheat function for testing
function cheat() {
	player.raiseMoolah(1000000);
	player.raiseKnowledge(1000000);
	player.raiseFlops(1000000);
}