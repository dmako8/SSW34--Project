const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client();
client.login(bot_token); //create a separate configuration file later for the token
const bot_token = process.env.DISCORD_KEY;

//console.log(process.env);

client.on('ready', readyDiscord);

function readyDiscord(){
    console.log('SUCCESS');
}