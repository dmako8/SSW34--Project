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
    if (msg.channel.id == '839310571161255936'){ //change this later to allow bot in all channels
        let tokens = msg.content.split(" ");

        if (tokens[0] == "hello"){
        //msg.reply('how\'s it going?');
        msg.channel.send('how\'s it going?');
        }
        else if (tokens[0] == '!price') {
            //get today's date and time:
            var today = new Date();
            var yyyy = today.getFullYear();
            var mm = String(today.getMonth() + 1).padStart(2, '0');
            var dd = String(today.getDate()).padStart(2, '0');
            today = yyyy + '-' + mm + '-' + dd;
            var timeElapsed = Math.floor(Date.now() / 1000);
            var secElapsedToday = timeElapsed % 86400;
            var hour = Math.floor(secElapsedToday / 3600);
            var minute = Math.floor((secElapsedToday - hour*3600)/60);
            var currentTime = hour.toString() + ':' + minute.toString() + ':00';

            msg.channel.send('here\'s the price of ' + tokens[1] + ':');
            let url = `https://www.alphavantage.co/query?function=CRYPTO_INTRADAY&symbol=${tokens[1]}&market=USD&interval=1min&apikey=${process.env.VANTAGEAPI}`
            let response = await fetch(url);
            let json = await response.json();
            console.log(json["Time Series Crypto (1min)"][today + " " + currentTime]["1. open"]);
            //console.log(currentTime);
            msg.channel.send('$'+json["Time Series Crypto (1min)"][today + " " + currentTime]["1. open"]);
        }
    }
}