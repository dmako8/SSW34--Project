const fetch = require('node-fetch');
const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client();

client.login(process.env.BOTTOKEN)
//console.log(process.env);

client.on('ready', readyDiscord);

function readyDiscord(){
    console.log('SUCCESS');
}

client.on('message', gotMessage);

async function gotMessage(msg) {
    //console.log(msg.content);
    if (msg.channel.id == '839310571161255936'){
        if (msg.content === 'hello'){
        //msg.reply('how\'s it going?');
        msg.channel.send('how\'s it going?');
        }
        else if (msg.content == '!price') {
            msg.channel.send('here\'s the price:');
            let url = `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=BTC&market=CNY&apikey=${process.env.VANTAGEAPI}`
            let response = await fetch(url);
            let json = await response.json();
            console.log(json);
        }
    }
}