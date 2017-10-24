var money = 0;

function raiseMoney(num) {
	money += num;
	document.getElementById("money").innerHTML = "$" + money;
}