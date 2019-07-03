const Discord = require('discord.js');

module.exports = {
    name: 'quote',
    description: 'Displays a given message *from the current Server* as a quote\nPlease note that this cmd defaults to the current Channel if no Channel ID is given.',
    usage: '<message ID> [channel ID]',
    extraInfo: 'Use the linked guide for help on getting Message IDs\nhttps://support.discordapp.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-',
    execute(message, args) {
      //To help those who don't know how to grab msg IDs
      if(!args[0]) {
        console.log(`${message.author.username} ran the Quote command.`)
        const noMsgEmbed = new Discord.RichEmbed()
          .setColor('#09eadb')
          .addField(`You need to give a Message ID in order to quote a message!`, `Click below for guide on getting Message IDs`)
          .addField(`\u200b`, `https://support.discordapp.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-`)
        message.channel.send(noMsgEmbed);
      } else if(args.length === 1) {
        //FOR IF ONLY THE MESSAGE ID IS GIVEN
        if(!message.member.nickname) {
          //To grab the message and output to Console
          const quoteableMessage = message.channel.fetchMessage(args[0])
          .then(quoteableMessage => {
            console.log(`${message.author.username} ran the Quote command and got \"${quoteableMessage.content}\"`)
            //To output the message to the channel
            const userN = quoteableMessage.author.username;
            const quoteEmbed = new Discord.RichEmbed()
              .setColor('#09eadb') //Aqua
              .addField(`${userN} sent this at ${quoteableMessage.createdAt}`, `${quoteableMessage.content}`);
              message.channel.send(quoteEmbed);
            })
            .catch(err => {
              message.reply(`I cannot find that Message!\nDid you use a Channel ID by mistake?`);
              console.error();
            });
        } else {
          //To grab the message and output to Console
          const quoteableMessage = message.channel.fetchMessage(args[0])
          .then(quoteableMessage => {
            console.log(`${message.author.username} ran the Quote command and got \"${quoteableMessage.content}\"`)
            //To output the message to the channel
            const nickN = quoteableMessage.member.nickname;
            const quoteEmbed = new Discord.RichEmbed()
              .setColor('#09eadb') //Aqua
              .addField(`${nickN} sent this at ${quoteableMessage.createdAt}`, `${quoteableMessage.content}`);
              message.channel.send(quoteEmbed);
            })
            .catch(err => {
              message.reply(`I cannot find that Message!\nDid you use a Channel ID by mistake?`);
              console.error();
            });
        }
      } else if(args.length === 2) {
        //IF BOTH MESSAGE AND CHANNEL IDs ARE GIVEN
        if(!message.member.nickname) {
          const quotechannel = message.author.client.channels.get(args[1]);
          console.log(quotechannel);
          if(!quotechannel) {
            return message.reply(`I\'m unable to find that channel!`);
          }
          const quoteableMessage = quotechannel.fetchMessage(args[0])
          .then(quoteableMessage => {
            console.log(`${message.author.username} ran the Quote command and got \"${quoteableMessage.content}\"`)
            //To output the message to the channel
            const userN = quoteableMessage.author.username;
            const quoteEmbed = new Discord.RichEmbed()
              .setColor('#09eadb') //Aqua
              .addField(`${userN} sent this at ${quoteableMessage.createdAt} in the ${quotechannel.name} channel`, `${quoteableMessage.content}`);
              message.channel.send(quoteEmbed);
            })
            .catch(console.error);
        } else {
          const quotechannel = message.member.client.channels.get(args[1]);
          if(!quotechannel) {
            return message.reply(`I\'m unable to find that channel!`);
          }
          const quoteableMessage = quotechannel.fetchMessage(args[0])
          .then(quoteableMessage => {
            //To output the message to the channel
            const nickN = quoteableMessage.member.nickname;
            const quoteEmbed = new Discord.RichEmbed()
              .setColor('#09eadb') //Aqua
              .addField(`${nickN} sent this at ${quoteableMessage.createdAt} in the ${quotechannel.name} channel`, `${quoteableMessage.content}`);
              message.channel.send(quoteEmbed);
            })
            .catch(console.error);
        }
      }
  },
};
