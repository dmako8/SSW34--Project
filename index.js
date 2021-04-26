const Discord = require('discord.js');
const client = new Discord.Client();
client.login('BOT TOKEN'); //create a separate configuration file later for the token

client.on('ready', readyDiscord);

function readyDiscord(){
    console.log('SUCCESS');
}