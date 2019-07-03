const Discord = require('discord.js');

module.exports = {
    name: 'dice',
    description: 'Rolls a dice',
    usage: '[Number of Sides] [Number of Dice]',
    aliases: ['die', 'd'],
    specificInputs: 'For number of sides; 4, 6, 8, 10, 12, 20, 100',
    execute(message, args) {
      console.log(`${message.author.username} ran the Dice command.`)
      const diceAmount = args[1];
      /****FOR IS SOME SILLY OINK WANTED TO ROLL NOTHING****/
      if(diceAmount === '0') {
        message.channel.send(`You can\'t roll zero dice!`);
      } else if(!diceAmount || diceAmount === '1') { //FOR ROLLING A SINGLE DIE
        //For either d6 or no value given
        if(!args[0] || args[0] === '6') {
          const d6random = Math.floor((Math.random() * 6) + 1);
          message.channel.send(`You have rolled ${d6random} using a d6 dice.`);
        } else if(args[0] === '4') { //d4
          const d4random = Math.floor((Math.random() * 4) + 1);
          message.channel.send(`You have rolled ${d4random} using a d4 dice.`);
        } else if(args[0] === '8') { //d8
          const d8random = Math.floor((Math.random() * 8) + 1);
          message.channel.send(`You have rolled ${d8random} using a d8 dice.`);
        } else if(args[0] === '10') { //d10
          const d10random = Math.floor((Math.random() * 10) + 1);
          message.channel.send(`You have rolled ${d10random} using a d10 dice.`);
        } else if(args[0] === '12') { //d12
          const d12random = Math.floor((Math.random() * 12) + 1);
          message.channel.send(`You have rolled ${d12random} using a d12 dice.`);
        } else if(args[0] === '20') { //d20
          const d20random = Math.floor((Math.random() * 20) + 1);
          message.channel.send(`You have rolled ${d20random} using a d20 dice.`);
        } else if(args[0] === '100') { //d100
          const d100random = Math.floor((Math.random() * 100) + 1);
          message.channel.send(`You have rolled ${d100random} using a d100 dice.`);
        } else {
          message.reply(`That value is not supported.`);
        }
      } else if(diceAmount >= 101) { //TO PREVENT PEOPLE KILLING THE BOT
        message.reply(`You cannot roll more than 100 dice!`);
      } else if(diceAmount <= -1) { //TO PREVENT PEOPLE MAKING BAD THINGS
        message.reply(`You cannot roll less than zero dice!`);
      } else {  //FOR ROLLING MULTIPLE DICE
        const diceRolls = [];
        var index = 0;
        for(index; index < diceAmount; index++) {
          const rollResult = Math.floor((Math.random() * args[0]) + 1);
          diceRolls.push(rollResult);
        }
        message.channel.send(`You have rolled ${diceRolls} using ${diceAmount} d${args[0]} dice.`);
      }
    },
};
