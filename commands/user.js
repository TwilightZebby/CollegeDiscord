const Discord = require('discord.js');
const { client } = require('../mybot.js');

module.exports = {
    name: 'user',
    description: 'Prints information about a user',
    usage: '<@user>',
    aliases: ['userinfo'],
    args: true,
    execute(message, args) {
      console.log(`${message.author.username} ran the User command.`)
      /****GRABBING THE INFORMATION****/
      function getUserFromMention(mention) {
	       const matches = mention.match(/^<@!?(\d+)>$/);
	       // The id is the first and only match found by the RegEx.
	       // However the first element in the matches array will be the entire mention, not just the ID,
	       // so use index 1.
	       const id = matches[1];
	       return message.client.users.get(id);
      };

      if(args[0]) {
        const userPing = getUserFromMention(args[0]);
        if(!userPing) {
          return message.reply(`Please use a proper User mention.`);
        }
        const uName = userPing.username;
        const uAvatarURL = userPing.displayAvatarURL;
        const uBotCheck = userPing.bot;
        const uCreation = userPing.createdAt;
        const uLastMsg = userPing.lastMessage;
        const uStatus = userPing.presence.status;

        /****EMBED FOR INFORMATION****/
        const infoEmbed = new Discord.RichEmbed()
          .setColor('#07e6ea') //Aqua (or light blue)
          .setAuthor(`${uName}`, `${uAvatarURL}`)
          .setThumbnail(`${uAvatarURL}`)
          .addField(`User`, `${userPing}`)
          .addField(`Status`, `${uStatus}`, true)
          .addField(`Is a Bot`, `${uBotCheck}`, true)
          .addField(`Account Creation Date`, `${uCreation}`, true)
          .addField(`Last Message Sent`, `${uLastMsg}`)

        return message.channel.send(infoEmbed);
      }
    },
};
