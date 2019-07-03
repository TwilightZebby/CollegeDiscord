const Discord = require('discord.js');

module.exports = {
    name: 'info',
    description: 'Prints information about this Bot',
    usage: ' ',
    aliases: ['bot', 'information', 'botinfo'],
    execute(message, args) {
      console.log(`${message.author.username} ran the Info command.`)
      /****EMBED FOR INFORMATION****/
      const infoEmbed = new Discord.RichEmbed()
        .setColor('#07e6ea') //Aqua (or light blue)
        .setAuthor('CollegeCrewBot', 'https://discordapp.com/assets/322c936a8c8be1b803cd94861bdfa868.png')
        .setDescription('A small bot, for a small group of College peeps.')
        .setThumbnail(`https://discordapp.com/assets/322c936a8c8be1b803cd94861bdfa868.png`)
        .addField(`Bot Version`, `1.3.0-beta_5`, true)
        .addField(`Discord.js Version`, `11.4.2`, true)
        .addField(`Help Command`, `%help`, true)
        .addField(`Bot Developer`, `<@156482326887530498>`, true)
        .addField(`Amount of commands`, `12`, true)
        .addBlankField(true)
        .setTimestamp()

      message.channel.send(infoEmbed);
    },
};
