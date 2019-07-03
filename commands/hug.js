const Discord = require("discord.js"); //Bringing in Discord.js
const { client } = require('../mybot.js');

module.exports = {
    name: 'hug',
    description: 'Hugs a person!',
    usage: '<@user>',
    args: true,
    execute(message, args) {
      console.log(`${message.author.username} ran the Hug command.`)
      /*Grabs the User Mention*/
      function getUserFromMention(mention) {
        const matches = mention.match(/^<@!?(\d+)>$/);
        // The id is the first and only match found by the RegEx.
        // However the first element in the matches array will be the entire mention, not just the ID,
        // so use index 1.
        const id = matches[1];

        return message.client.users.get(id);
      };

      /*The Output from the Command*/
      const user = getUserFromMention(args[0]);
      if (!user) {
        return message.reply('Please use a proper mention if you want to hug someone.');
      };
      message.delete();
      message.reply(`hugs ${user}.`);
    },
};
