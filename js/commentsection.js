




function render(data){
	var html = "<div class='commentBox'><div class='leftPanelImg'><img src='img/profileimg.png' width='50px' /></div><div class='rightPanel'><span>"+data.name+" </span> on <span class='date'>"+data.date+"</span><p>"+data.body+"</p></div><div class='clear'></div></div>";
	$("#commentcontainer").append(html);
}


$(document).ready(function(){
	var coment = [
	{"name" : "Harry", "date":"September 4, 2020" , "body":"My Nigga referred your site and I’m fucking impressed with your virtual card. High balance hit without error."},
	{"name" : "Akhazanzi", "date":"September 16, 2020" , "body":"Value for money well received. Thanks for the virtual card"},
	{"name" : "Thekiller2498", "date":"October 23, 2020" , "body":"Great virtual card!!Thank you so much"},
	{"name" : "twelvyy12", "date":"October 24, 2020" , "body":"I need to purchase a USA VS/MC prepaid please. I will need to know your preferred method of payment, the balance you seek, and the BTC address to send the funds to. How fast is the turn around here and I would prefer these to come with pin if available. Thanks."},
	{"name" : "donnieboy10", "date":"October 24, 2020" , "body":"You deserve a million likes for your honesty. Thank you"},
	{"name" : "Hitman", "date":"November 5, 2020" , "body":"Thank God I have found you!! I am a “new born” to carding and have been struggling to find a way to work through the virtual card of understanding. I’ve watched several youtube videos but always found something missing. FINALLY, I checked out this site and as I said at the start …. Thank God …. and thank YOU for shining the light and bring card with pin into focus for me. You are a great instructor. Thanks so much for sharing this information."},
	{"name" : "Jake", "date":"January 13, 2021" , "body":"I’m very happy and grateful about you cardingswipez you so adorable and trustworthy am doing this again and I am getting my cc from him *cardingswipez* you are the best I own you more business bro I love you for life ✅✅👍"},
	{"name" : "Rika J", "date":"February 5, 2021" , "body":"delivered with clarity and a little humour – just right! I am interested in your cc"},
	{"name" : "eric", "date":"March 2, 2021" , "body":"I never had issues with the your cards for long. you are good in this service"},
	{"name" : "JK Fullz", "date":"March 6, 2021" , "body":"Getting a legit dumps shop is very difficult i got burnt couple of time before my friend recommended this team, i’ve been sticking with them ever since thanks mates"},
	{"name" : "vainmt", "date":"March 7, 2021" , "body":"I get to wonder how they make their profit because they replace any bad cvv i have got previously and i guess same goes to every dude buying from them all the same thumbs up."},
	{"name" : "raloskii", "date":"March 7, 2021" , "body":"You guys should keep up the good work, always service us fresh dumps with pin"},
	{"name" : "psyko911", "date":"March 8, 2021" , "body":"first time on here and want to get started asap so if can get back to me id like to start making money now"},
	{"name" : "Ethanliew", "date":"March 20, 2021" , "body":"thank you so much you guys just made me sooooo much muh fokkin doe!Im here for you"},
	{"name" : "royalkombo", "date":"April 2, 2021" , "body":"I never had issues with the your dumps for long. you are good in this service"},
	{"name" : "Joe Rogen", "date":"April 3, 2021" , "body":"wow, your dumps works perfectly."},
	{"name" : "Darkhorse", "date":"April 7, 2021" , "body":"Good customer relation. I love this site and the admin explain and communicate well on purchase with much respect."},
	{"name" : "Marek Krispek", "date":"April 16, 2021" , "body":"how long does it take to receive dumps?"},
	{"name" : "Mosa Ali", "date":"April 19, 2021" , "body":"Hi.. Do the prepaid card work in Africa if yes can u help me no how.. Am interested.. Very interested"},
	{"name" : "enton", "date":"April 19, 2021" , "body":"My friend brought me to this site and was impressed with their high balance card and he recommend to me. I bought mine and it didn’t hit i report to them and they replace instantly which I got $4,000, i’m fucking impress with them. I’m fucking with y’all henceforth"},
	{"name" : "Otesh", "date":"May 2, 2021" , "body":"I had same experience too when i bought dumps + pin and it got decline. I contacted them and complained on the cards which got declined it was replace immediately. Their 72hours replacement policy is the best i have seen online."},
	{"name" : "Lexii Skye", "date":"May 3, 2021" , "body":"Please I need an Euro cvv"},
	{"name" : "khaspr", "date":"May 15, 2021" , "body":"I got an awkward experience for my first time purchase. They were out of stock for single high balance card and they gave me an alternative for 3 in 1 virtual card package as they call it, i was thinking i got scammed like the others but after i paid the fee i received 3pcs prepaid card to my email and good news!! I hit 4k on each total of 12k for dumps i paid $110. Best deal i’ve seen online so far."},
	{"name" : "Francy", "date":"May 15, 2021" , "body":"Do you have to buy something that much or you go to an ATM? How do you use it?"},
	{"name" : "Vinay", "date":"May 15, 2021" , "body":"Greetings from Florida! I’m bored to tears at work so I decided to browse your website on my iphone during lunch break. I enjoy the info you present here and can’t wait to take a look when I get home. I’m amazed at how quick your website loaded on my mobile .. I’m not even using WIFI, just 3G .. Anyways, excellent site."},
	{"name" : "Jory Pedals", "date":"May 16, 2021" , "body":"have you tried it? is this a legit seller?"},
	{"name" : "Dior Smoke", "date":"May 17, 2021" , "body":"Yes i’ve used their service however i didn’t know how to use the dumps with pin so i order the cloned card with balance of $5,000 which i received instantly after i paid. They are legit and true to their words."},
	{"name" : "khyro", "date":"May 17, 2021" , "body":"This is the best dumps with pin vendor i have come across. they don’t resell after selling out and comes with guarantee at least one can be safe dealing with them."},
	{"name" : "Sparrows", "date":"May 19, 2021" , "body":"They are te best bruh I swear down. I got a high balance dumps for 110 bucks which to be honest I hit abt 2k+ but i complain to them it’s not up to $5,000 balance like they said and I was fuckin surprise they sent me a regular dumps as compensation which i hit another $1500. You can’t get this elsewhere. I’m fucking with them henceforth"},
	{"name" : "Ricko Vallencia", "date":"May 19, 2021" , "body":"Never to be compared to none, now i know why they talk with confidence. I bought 2 for $220 and got 10k from it. you’re the real MVP"},
	{"name" : "Lucas", "date":"May 20, 2021" , "body":"Keep the good work going mate. 5 out of 5 all hit. i feel like crying"},
	{"name" : "Kyle R", "date":"May 21, 2021" , "body":"I’m a newbie at this . I live in the USA and I need to know what my basic type of card I need to buy as like a beginner one like looking to spend small amount at first then see what it gets me then go from there."},
	{"name" : "Juke56", "date":"May 21, 2021" , "body":"They have a channel for newbies but you have to pay buy dumps and pay a fee before they add you to the group, it will be beneficial to you as you will meet people there who can assist you."},
	{"name" : "abella dan", "date":"May 21, 2021" , "body":"You are the fucking best of all. your dumps is compared to none. I’m fucking with y’all"},
	{"name" : "kkev", "date":"May 24, 2021" , "body":"greaaaaaaaaaat"},
	{"name" : "Jonathanzzzz", "date":"May 24, 2021" , "body":"Getting a legit dumps vendor could be hell, i was ripped off $1750 but fake niqqa before i bumped in here and gave it a trial and he delivered asap within minutes. I strongly recommend"},
	{"name" : "Haley", "date":"May 29, 2021" , "body":"This is the only dumps vendor that is real and keep to their replacement policy. I got a high balance dumps for $110 and it declined I reported to admin and he replaced it instantly for me without delays and guess what i hit 4000 bucks from it. I am fucking with this team forever."},
	{"name" : "Hosiah", "date":"May 29, 2021" , "body":"The cards doesn’t come cheap to buy it’s actually worth the money. I paid $220 for 2 high balance cards and the admin recommended a high balance card with low security check and they hit 10k. I’m getting more next."},
	{"name" : "gummybear", "date":"June 5, 2021" , "body":"i need a dump with pin. how do i get in touch with you?"},
	{"name" : "andrews", "date":"June 5, 2021" , "body":"I could never ask for any better dumps plug since i bumped into this site. All dumps i bought keep hitting, I’m surely fucking with you guys"},
	{"name" : "killa kella", "date":"June 5, 2021" , "body":"I need a dump with pin black card how to contact you ?"},
	{"name" : "Halgurd", "date":"June 5, 2021" , "body":"I get value for every fucking money i sent them. Their stuffs are the best and it hit like fucking goodness i bought the high balance dumps for $110 and it hit $5k with it, what a deal. best site i forever fuck with you guys."},
	{"name" : "Nikki Ann", "date":"June 6, 2021" , "body":"I have lost a lot of money from these so called fake hackers online and at a point i thought they are all fake but thank goodness my friend recommended this site to me and ever since then i don’t have a single regret buying from them. I strongly recommend them too"},
	{"name" : "Podder", "date":"June 6, 2021" , "body":"im interested in using your services ASAP"},
	{"name" : "Anonymous", "date":"June 7, 2021" , "body":"I need Australian cc with cvv please contact me asap. Sick of being ripped off by sites"},
	{"name" : "Andrei", "date":"June 8, 2021" , "body":"I was having same issues and got tired of rippers online till a friend recommended this site. I’m grateful for what they did and it come through after i paid and their shits are good stuffs."},
	{"name" : "Jessy", "date":"June 8, 2021" , "body":"I got my card instantly after i paid and i used it for online shopping and it went thru. i managed to get 2k for the first day guess i have hit my limit on the card. I’m happy for this card."},
	{"name" : "Zedd", "date":"June 8, 2021" , "body":"I am a newbie and i have fallen for dumps scams online and lost about $2000 until i came to this site, they are legit vendor and the best part is they guided me through after purchase and ensure i cashed out successfully. friendly admin and good communication network."},
	{"name" : "Harlich", "date":"June 8, 2021" , "body":"can i purchase to use here in Ghana?"},
	{"name" : "patrick12", "date":"June 8, 2021" , "body":"You just got a loyal customer for life. Best seller i’ve seen online for a long while. omg you said minimum balance of 5k and i hit 4k and it pulled thru. Thx bruh"},
	{"name" : "hurlxgod", "date":"June 8, 2021" , "body":"I purchased 5 different dumps from different sites but all dead and they didn’t do anything about it, a friend recommended this site and guess what? i made the best deal with them by purchase 5 dumps and they gave me guarantee of 72 hours and offer replacement policy. I was fucking happy the first dumps hit $4k bucks second was 5k and the 1 hit about 2k+. I can bet my balls on this team. I strongly recommend"},
	{"name" : "monsterisreal", "date":"June 8, 2021" , "body":"I noticed cheap dumps are fake, i have paid for cheap dumps on several platforms and didn’t get anything and some gave me dead dumps. I contacted this site and they told me $110 for single purchase which i paid and good thing is it comes with 48 hours replacement policy. I have never seen such dedicated vendors. I am glad to say the dumps with pin i bought worked perfectly well. Thanks guys"},
	{"name" : "Reese", "date":"June 10, 2021" , "body":"Your dumps are the best man!!!"},
	{"name" : "Vincenttmx", "date":"July 3, 2021" , "body":"I have been with this team for about 2 years since from the days of freshstuff88 and cardingswipez dark web and they never disappointed me."},
	{"name" : "Katherine", "date":"July 10, 2021" , "body":"You get the value of your money with this team. I strongly recommend."},
	{"name" : "Demongod", "date":"July 15, 2021" , "body":"Since i have been in this game this is the first time i’m seeing a vendor having warranty with his dumps with a particular balance in it. I purchased 2 high balance cards Amex Centurion for $110 and Visa Black Card for $110 both hit the $5k they assured me on it. I bought another 1 which hit about 2k and got blocked and they gave me with another card. I am really impressed with this team. I’m with y’all for life"},
	{"name" : "Yussi", "date":"July 22, 2021" , "body":"WTF i just hit $5k with your high balance dumps, i thought it’s a joke lol. paid 110$ and it gave me fucking 5k bucks. I’m sticking with y’all on this."},
	{"name" : "Jayden", "date":"August 11, 2021" , "body":"I never knew such vendor exist, all fresh and guaranteed. I normally lost money dealing with my order seller for bad dumps but this dude right here give replacement. good customer relation. I’m gonna tell my guys about you"},
	{"name" : "James", "date":"August 11, 2021" , "body":"Straight to business kinda guy. got good stuffs thou"},
	{"name" : "kristy", "date":"August 11, 2021" , "body":"Ever since i have been purchasing dumps from this site it has always been as expected. i don’t regret buying your cards. I would recommend them to anyone."},
	{"name" : "KingG", "date":"August 18, 2021" , "body":"I want to buy a dump with pin"},
	{"name" : "DemiGod", "date":"August 20, 2021" , "body":"Legit!! Thanks for being real, looking forward to do more business in the future"},
	
	
	
	
	];
	
		for(var i=0; i < coment.length; i++){
				render(coment[i]);
			}
	
	$('#addComment').click(function(){
		var addObj = {
			"name" : $('#name').val(),
			"date" : $('#date').val(),
			"body" : $("#bodyText").val(),
			
		};
		
		coment.push(addObj);
		render(addObj);
		$('#name').val();
		$('#date').val();
		$('#bodyText').val();
		
		
	});
	
	
});




