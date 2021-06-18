var xmlhttp = new XMLHttpRequest();
            var url = "https://api.coindesk.com/v1/bpi/currentprice.json";
            
            
            xmlhttp.onreadystatechange = function(){
                if (this.readyState == 4 && this.status ==200) {
                    var json = JSON.parse(this.responseText);
                parseJson(json);
            }
        };
            xmlhttp.open("GET", url, true);
            xmlhttp.send();
            
            function parseJson(json){
                    var time="<b>Last Updated: " + json["time"]["updated"] + "</b>";
                    
                    var usdValue = json["bpi"]["USD"]["rate"];
                
                    //var gbpValue = json["bpi"]["GBP"]["rate"];
                
                    //var euroValue = json["bpi"]["EUR"]["rate"];
                
                    var usdPrice = 110/parseFloat(usdValue.replace(",",""));
                
                    //var gbpPrice = 100/parseFloat(gbpValue.replace(",",""));
                
                    //var euroPrice = 100/parseFloat(euroValue.replace(",",""));
                    
                    var usdPrice_round = usdPrice.toFixed(5);
                
                    //var gbpPrice_round = gbpPrice.toFixed(5);
                
                    //var euroPrice_round = euroPrice.toFixed(5);
                    var productPrice = parseFloat(usdValue.replace(",",""))*usdPrice_round;
                
                document.getElementById("orderprice").innerHTML = time + "<br /><br />" + usdPrice_round + "  BTC" + "<br /><br />" +"≈" + productPrice.toFixed(2) + "  USD";
                //+ "<br />" + gbpPrice_round + "<br />" + euroPrice_round;
            }