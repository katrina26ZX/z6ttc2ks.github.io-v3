var xmlhttp = new XMLHttpRequest();
var url = "https://api.cryptonator.com/api/ticker/doge-usd";
            
            
xmlhttp.onreadystatechange = function(){
		if (this.readyState == 4 && this.status ==200) {
			var json = JSON.parse(this.responseText);
		parseJson_doge(json);
	}
};
xmlhttp.open("GET", url, true);
xmlhttp.send();
            
function parseJson_doge(json){


		var usdValue = json["ticker"]["price"];

		//var gbpValue = json["bpi"]["GBP"]["rate"];

		//var euroValue = json["bpi"]["EUR"]["rate"];

		var usdPrice = 50/parseFloat(usdValue.replace(",",""));

		//var gbpPrice = 100/parseFloat(gbpValue.replace(",",""));

		//var euroPrice = 100/parseFloat(euroValue.replace(",",""));

		var usdPrice_round = usdPrice.toFixed(5);

		//var gbpPrice_round = gbpPrice.toFixed(5);

		//var euroPrice_round = euroPrice.toFixed(5);
		var productPrice = parseFloat(usdValue.replace(",",""))*usdPrice_round;

	document.getElementById("orderprice_doge").innerHTML = usdPrice_round + "  DOGE" + "<br /><br />";
	document.getElementById("orderprice_doge1").innerHTML = " &#8776 " + productPrice.toFixed(2) + "  USD";
	//+ "<br />" + gbpPrice_round + "<br />" + euroPrice_round;
}
