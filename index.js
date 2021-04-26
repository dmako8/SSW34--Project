const Discord = require('discord.js');
const client = new Discord.Client();
client.login('ODM2MDQ5NjY3NzE5ODIzNDYw.YIYV7Q.HbAzxreUaUhJgGRw7Em1dUgydpA'); //create a separate configuration file later for the token

client.on('ready', readyDiscord);

function readyDiscord(){
    console.log('SUCCESS');
}
