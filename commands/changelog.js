const Discord = require('discord.js');

module.exports = {
    name: 'changelog',
    description: 'Prints the latest changelog for this Bot',
    usage: ' ',
    aliases: ['version'],
    execute(message, args) {
      console.log(`${message.author.username} ran the Changelog command.`)
      message.channel.send(`**Version 1.4.0:**\n-Added a bunch of commands for the two Cults we have on the server.`);
    },
};
