const Discord = require('discord.js');

module.exports = {
    name: 'cult',
    description: 'A bunch of commands for Joe\'s and Dom\'s Cult Channels',
    usage: ' ',
    guildOnly: true,
    aliases: ['c'],
    extraInfo: 'Run the command \`%cult\` to get the list of sub-commands!',
    execute(message, args) {
      console.log(`${message.author.username} ran the Cult Command.`);

      /***********************************************************************
      *** NO ARGUEMENTS GIVEN
      *** List of Sub-Commands
      ************************************************************************/

      if(!args[0]) {
        const cultCmdsEmbed = new Discord.RichEmbed()
          .setColor('#c13307')
          .setTitle('Cult Leader Only Commands:')
          .setDescription('These Sub-Commands can only be used by the Cult Leaders')
          .addField(`Role colour <\#hex value>`, `Changes the Colour of the Cult's Role.`)
          .addField(`Role name <newName>`, `Changes the Cult's Role name.`)
          .addField(`Kick <@user>`, `Kicks the mentioned User from the Cult.`)
          //.addField('Invite <@user>', 'Sends a ping to the mentioned User, saying that you want them in your Cult!')
          .setFooter('Using Version 1.0-Beta of Cult Command Module');

        message.channel.send('**List of Cult Commands**');
        message.channel.send(cultCmdsEmbed);
      }

      /***********************************************************************
      *** ARGUEMENTS GIVEN
      ************************************************************************/

      else {

        /***********************************************************************
        *** ROLE COMMANDS
        ************************************************************************/

        if(args[0] === 'role') {

          /***********************************************************************
          *** NO ATTRIBUTES
          ************************************************************************/

          if(!args[1]) {
            message.reply('Whoops! Seems like you forgot to finish that command!\nTry using \`%cult\` to remind yourself of the commands.');
          }

          /***********************************************************************
          *** ROLE COLOUR
          ************************************************************************/

          else if(args[1] === 'colour' || args[1] === 'color') {
            if(message.author.id === '405279335591706625' || '436881695329746945') { //Dom, Joe
              const newRoleColour = args[2];
              const cultRole = checkCultLeader(message.author.id);

              cultRole.setColor(newRoleColour)
                .then(updated => message.reply(`Success! You have changed the Role\'s Colour to ${cultRole.color}`))
                .catch(console.error);
            } else {
              message.reply('Sorry\! That command can only be used by the Cult Leaders.');
            }
          }

          /***********************************************************************
          *** ROLE NAME
          ************************************************************************/

          else if(args[1] === 'name') {
            if(message.author.id === '405279335591706625' || '436881695329746945') { //Dom, Joe
              const newRoleName = args[2];
              const cultRole = checkCultLeader(message.author.id);

              cultRole.setName(newRoleName)
                .then(updated => message.reply(`Success! You have changed the Role\'s Name to ${cultRole.name}`))
                .catch(console.error);
            } else {
              message.reply('Sorry\! That command can only be used by the Cult Leaders.');
            }

          }

        }

        /***********************************************************************
        *** KICK COMMAND
        ************************************************************************/

        else if(args[0] === 'kick') {
          if(message.author.id === '405279335591706625' || '436881695329746945') { //Dom, Joe
            const userToKick = getUserFromMention(args[1]);
            const roleToRevoke = checkCultLeader(message.author.id);

            userToKick.removeRole(roleToRevoke)
              .then(revoked => message.reply(`Success! I have managed to remove the ${roleToRevoke} Role from ${userToKick}`))
              .catch(console.error);

          } else {
            message.reply('Sorry\! That command can only be used by the Cult Leaders.');
          }



        }

        function checkCultLeader(leaderID) {
          if(leaderID === '405279335591706625') { //DOM
            return message.guild.roles.find('id', '562637712998268939');
          } else if(leaderID === '436881695329746945') { //JOE
            return message.guild.roles.find('id', '511914639592783873');
          }
        }

        function getUserFromMention(mention) {
          const matches = mention.match(/^<@!?(\d+)>$/);
          // The id is the first and only match found by the RegEx.
          // However the first element in the matches array will be the entire mention, not just the ID,
          // so use index 1.
          const id = matches[1];

          return message.client.users.get(id);
        }

      }

    },
  };
