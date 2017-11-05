//Player instantiation
var player = new Player();

//Commodity instantiation
var adbot = new Business("adbot", 10, 1);
var router = new Business("router", 500, 10);
var stockbot = new Business("stockbot", 25000, 100);
var cracker = new Business("cracker", 1.25e6, 1000);
var algorithm = new Business("algorithm", 6.25e7, 10000);

var undergrad = new Research("undergrad", 50, 1);
var graduate = new Research("graduate", 2500, 10);
var postdoc = new Research("postdoc", 125000, 100);
var prof = new Research("prof", 6.25e6, 1000);
var nobel = new Research("nobel", 3e8, 10000);

var eniac = new Computing("eniac", 200, 5, 500);
var apple = new Computing("apple", 10000, 50, 5000);
var tsdelta = new Computing("tsdelta", 500000, 500, 50000);
var tianhe = new Computing("tianhe", 2.5e7, 5000, 500000);
var dwave = new Computing("dwave", 1.25e9, 50000, 5e6);

//Project instantiation	
//Projects are added to an array as they are created
var inv0 = new Investment(300, "Targeted Ads<br><br>AdBot efficiency x3<br><br>300 Knowledge", 3);
var inv1 = new Investment(15000, "Gigabit Ethernet<br><br>Router efficiency x3<br><br>15,000 Knowledge", 3); 
var inv2 = new Investment(500000, "Insider Trading<br><br>StockBot efficiency x3<br><br>500,000 Knowledge", 3);
var inv3 = new Investment(1.25e7, "Prime Finding<br><br>CryptoCracker efficiency x3<br><br>1.25e+7 Knowledge", 3);
var inv4 = new Investment(6.25e8, "Internet of Things<br><br>Predictive Algorithm efficiency x3<br><br>6.25e+8 Knowledge", 3);
var investments = [inv0, inv1, inv2, inv3, inv4];

var per0 = new Person(1500, "Larry the TA<br><br>Undergrad efficiency x3<br><br>1,500 Knowledge", 3);
var per1 = new Person(40000, "Principal Investigator<br><br>Graduate efficiency x3<br><br>40,000 Knowledge", 3);
var per2 = new Person(1e6, "Intravenous Caffeine Drip<br><br>Postdoc efficiency x3<br><br>1.00e+6 Knowledge", 3);
var per3 = new Person(2.5e7, "Grants That Write Themselves<br><br>Professor efficiency x3<br><br>2.5e+7 Knowledge", 3);
var per4 = new Person(1.25e9, "Top Secret Clearance<br><br>Nobel Laureate efficiency x3<br><br>1.25e+9 Knowledge", 3);
var people = [per0, per1, per2, per3, per4];

var the0 = new Theory(6000, "Magnetic Memory<br><br>ENIAC efficiency x3<br><br>6,000 Knowledge", 3);
var the1 = new Theory(200000, "Zip GSX Accelerator Card<br><br>Apple II efficiency x3<br><br>200,000 Knowledge", 3);
var the2 = new Theory(3e6, "PUMA Lightweight Kernel<br><br>TS Delta efficiency x3<br><br>3.00e+6 Knowledge", 3);
var the3 = new Theory(1e8, "Torus Fusion (Tofu) Interconnect<br><br>Tianhe 1A efficiency x3<br><br>1.00e+8 Knowledge", 3);
var the4 = new Theory(6.25e9, "Cryogenic Capacitor<br><br>D-Wave 2000Q efficiency x3<br><br>6.25e+9 Knowledge", 3);
var theories = [the0, the1, the2, the3, the4];

//Window refreshes every 0.1 seconds with updated values and displays; also updates data
window.setInterval(function(){
	System.updateValues();
	System.updateScreen();
	System.updateData();
}, 100);

//Cheat function for testing
function cheat(x) {
	player.raiseMoolah(x);
	player.raiseKnowledge(x);
	player.raiseFlops(x);
}