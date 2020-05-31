const request = require('request');
const cheerio = require('cheerio');

request('https://www.goodreads.com/quotes/',(error,response,html)=>{
    if(!error && response.statusCode == 200){
        const $ = cheerio.load(html);
        const quotes = $('.quoteText');
        // console.log(siteHeading.html());
        // console.log(siteHeading.text());
        // const output = quotes.find('span').text();
        // console.log(output);
        $('.quoteText span').each((i,el)=>{
            const item = $(el).text();
            console.log(item);
        })
    }
});

