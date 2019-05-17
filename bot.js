const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
    if(message.channel.id === "578922162602246144")
    {
        message.delete(1);
        client.channels.get("578997034682417166").send(message.author.toString() + " " + message.content);
    }
    if(message.channel.id === "578922065080352769")
    {
        message.delete(1);
        client.channels.get("579001804721750046").send(message.author.toString() + " " + message.content);
    }
})
client.login(process.env.BOT_TOKEN);