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
    if (msg.channel.id == '839310571161255936' || msg.channel.id == '839652759279370240'){ //change this later to allow bot in all channels
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
            var dd = String(today.getUTCDate()).padStart(2, '0');
            today = yyyy + '-' + mm + '-' + dd;
            var timeElapsed = Math.floor(Date.now() / 1000);
            var secElapsedToday = timeElapsed % 86400;
            var hour = String(Math.floor(secElapsedToday / 3600)).padStart(2, '0');
            var minute = String(Math.floor((secElapsedToday - hour*3600)/60)).padStart(2, '0');
            var currentTime = hour + ':' + minute + ':00';
            
            let url = `https://www.alphavantage.co/query?function=CRYPTO_INTRADAY&symbol=${tokens[1]}&market=USD&interval=1min&apikey=${process.env.VANTAGEAPI}`
            let response = await fetch(url);
            let json = await response.json();
            msg.channel.send('here\'s the price of ' + json["Meta Data"]["3. Digital Currency Name"] + ':');
            console.log(json["Time Series Crypto (1min)"][today + " " + currentTime]["1. open"]);
            console.log(today);
            console.log(currentTime);
            console.log(today + ' ' + currentTime);
            msg.channel.send('$'+json["Time Series Crypto (1min)"][today + " " + currentTime]["1. open"]);

            //today + " " + currentTime
        }
    }
}