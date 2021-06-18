

const quotes = [
{
	quote: 'img/wallet1.jpg',
	author: '1Hp7whsfaFHRSTAcagfmUk1ixjAqYeQMrP',
    ordernum: 'Order ID: #23A4WX6029'
},
    
{
	quote: 'img/wallet2.jpg',
	author: '18wcVRr6NP2onmEHfqD1XFrPsy4BbK5ETn',
    ordernum: 'Order ID: #45H5AK7756'
},
    
{
	quote: 'img/wallet3.jpg',
	author: '1NXWctmARVF2XUJ7sXvC2CywwrHYWyV341',
    ordernum: 'Order ID: #69J5BH8655'
},	
	
{
	quote: 'img/wallet4.jpg',
	author: '1BSfJuYVHt3XM1dXdhzUXdj9yRknaN8yp9',
    ordernum: 'Order ID: #83U3JI9033'
},	
	
{
	quote: 'img/wallet5.jpg',
	author: '14Doipk7Av8CgFiWEK2dEbjsuPhFWMcVBK',
    ordernum: 'Order ID: #32Q4KL0922'
},	
	
{
	quote: 'img/wallet6.jpg',
	author: '1ENpAX1ziQ7YmE3uxx3NPWWXabRG4XTT7j',
    ordernum: 'Order ID: #83E5YU9809'
},	

{
	quote: 'img/wallet7.jpg',
	author: '12Eg43d4hnpZccYvVDJ6hcjx25BxFEF4bN',
    ordernum: 'Order ID: #67W5ER8234'
},	
	
{
	quote: 'img/wallet8.jpg',
	author: '1BgHt1RohEuFdjfQ2WLpquPNKct66vc5fN',
    ordernum: 'Order ID: #67D5EE9844'
},	
	
{
	quote: 'img/wallet9.jpg',
	author: '17qKnizjX43bivTHpQyVTdQu9yebJ8TwBe',
    ordernum: 'Order ID: #70X5EK7809'
},	
	
{
	quote: 'img/wallet10.jpg',
	author: '17cNJ6Ny1W3B5mqiXqirr2YYPzNGvdNZRG',
    ordernum: 'Order ID: #39Z5QA8099'
},	
	
{
	quote: 'img/wallet11.jpg',
	author: '15wh1g6ga5drBmF6URngcrKBNVQYnVhdMQ',
    ordernum: 'Order ID: #89J6DD2056'
},	

{
	quote: 'img/wallet12.jpg',
	author: '12vYUTcTbev5ShGjtjmhA8LEDa8qJh225W',
    ordernum: 'Order ID: #45X6FS8233'
},	
	
{
	quote: 'img/wallet13.jpg',
	author: '19cyQutR6GLeJhfAWC5W2hNdqCb49r4Lod',
    ordernum: 'Order ID: #90L7QA8900'
},	
	
{
	quote: 'img/wallet14.jpg',
	author: '1JbPTX31g44qviXF7wYQrrBr7EGhMkCZF8',
    ordernum: 'Order ID: #55U3MN9023'
},	
	
{
	quote: 'img/wallet15.jpg',
	author: '1Bfhzz6Mm6GVGunAYKbbsuTWKqEPLk4N27',
    ordernum: 'Order ID: #74G6VV8392'
},	
	
{
	quote: 'img/wallet16.jpg',
	author: '1KE5qcNbyMJJgjjMsjDKuy4ZWyTMU4xFr9',
    ordernum: 'Order ID: #73H6QH9302'
},	

{
	quote: 'img/wallet17.jpg',
	author: '1CEwuq94DGvsABsMrWiXif7QwkXEpZ3Vja',
    ordernum: 'Order ID: #90C6DH2225'
},	

{
	quote: 'img/wallet18.jpg',
	author: '1LJQSdk6jTQ3PBdARKB27tQC55jcTyKZoT',
    ordernum: 'Order ID: #56B7LP7711'
},	
	
	
]

const quoteBtn = document.getElementById('quote-btn');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const ordernum = document.querySelector('.ordernum');

function bitcoinqr() {
	let random = Math.floor(Math.random() * quotes.length);
	
	quote.getElementsByTagName("IMG")[0].src = quotes[random].quote;
	author.innerHTML = quotes[random].author;
    ordernum.innerHTML = quotes[random].ordernum;
}