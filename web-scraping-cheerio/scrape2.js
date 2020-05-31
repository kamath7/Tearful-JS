const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const writeStream = fs.createWriteStream('lalle.txt');

writeStream.write('Quote,Author\n');

request('https://www.goodreads.com/quotes/',(error,response,html)=>{
    if(!error && response.statusCode == 200){
        const $ = cheerio.load(html);
        $(".quotes").each((i,el)=>{
            const quote = $(el).find('.quoteText').text().replace(/\s\s+/g,'');
            const author = $(el).find('.authorOrTitle').text();

            writeStream.write(`${quote},${author}\n`);

        })
    }
});

 