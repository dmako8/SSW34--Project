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

function gotMessage(msg) {
    //console.log(msg.content);
    if (msg.channel.id == '839310571161255936' && msg.content === 'hello'){
        //msg.reply('how\'s it going?');
        msg.channel.send('how\'s it going?');
    }
}