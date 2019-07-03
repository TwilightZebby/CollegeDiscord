const Discord = require('discord.js');

module.exports = {
    name: 'assignments',
    description: 'Prints a list of currently set assignments',
    usage: '[assignment]',
    guildOnly: true,
    aliases: ['assignment', 'assign', 'ass'],
    specificInputs: 'u14a2, u22a1, u26a2, u26a3',
    extraInfo: 'Does not work in DMs',
    execute(message, args) {
      console.log(`${message.author.username} ran the Assignment command.`)
      if(!args[0]) { //IF NO ARGUMENTS ARE GIVEN

        //EMOJI CODES FOR REFERENCE
        //:exclamation:
        //:hourglass_flowing_sand:
        //\u200b

        /****EMBED FOR NORMAL ASSIGNMENTS****/
        const assignEmbed = new Discord.RichEmbed()
          .setColor('#0099ff') //Blue
          .addField('Assignment', `U14A2 & U22A1`, true)
          .addField('Due Time', `Mon 6th May Midday :hourglass_flowing_sand:`, true)
          .addBlankField(true)
          .addField(`\u200b`, `Unit 23 Assignment 2`, true)
          .addField(`\u200b`, `Weds 15th May 12:45pm`, true)
          .addBlankField(true)
          .addField(`\u200b`, `Unit 26 Assignment 4`, true)
          .addField(`\u200b`, `Tues 21st Mat 5pm`, true)
          .addBlankField(true)
          .addField(`\u200b`, `Unit 27 Assignment 1`, true)
          .addField(`\u200b`, `Fri 24th May 2pm`, true)
          .addBlankField(true)
          .addField('Extra Information:', 'More details can be found in the <#494511992229593088> channel.')

        /****EMBED FOR RESUBMISSION ASSIGNMENTS****/
        const resubEmbed = new Discord.RichEmbed()
          .setColor('#ea9f35') //Green
          .addField('Resubmission', 'Unit 26 Assignment 2', true)
          .addField('Due Time', `Tues 7th May 1pm :hourglass_flowing_sand:`, true)
          .addBlankField(true)
          .addField(`\u200b`, `Unit 26 Assignment 3`, true)
          .addField(`\u200b`, `Tues 14th May 1pm`, true)
          .addBlankField(true)
          .addField('Extra Information:', 'More details can be found in the <#494511992229593088> channel.')

        /****EMBED FOR MOCK ASSIGNMENTS****/
        const mockEmbed = new Discord.RichEmbed()
          .setColor('#1ebf39') //Orange
          .addField(`Mock`, `None set`, true)
          .addField(`Due Time`, `\u200b`, true)
          //.addField('Extra Information:', 'More details can be found in the <#494511992229593088> channel.')

        message.channel.send(mockEmbed);
        message.channel.send(assignEmbed);
        message.channel.send(resubEmbed);
        message.channel.send(`**For basic assignment info, attach it to the end of the command**\nUse \`%help ass\` to get the allowed Inputs.`);
      } else {
        if(args[0] === 'u26a3') {
          const assInfoEmbed = new Discord.RichEmbed()
            .setColor('#09eadb')
            .addField(`Unit 26 Maths Assignment 3`, `Binary, Number Systems, and a little bit of Networking`)
            .addField(`\u200b`, `Covers P7-8; M4; D1 criteria in 3 Tasks`)
            .addField(`\u200b`, `Due Tuesday 23rd April at 13:00 (1pm)`)
            .addField(`\u200b`, `NOTE: The Quizzes for the Pass Criteria MUST be done in lesson/college!`)
            .addField(`\u200b`, `[Submission Link](https://moodle.lincolncollege.ac.uk/mod/assign/view.php?id=117300)`)
          message.channel.send(assInfoEmbed);
        } else if(args[0] === 'u14a2' || args[0] === 'u22a1') {
          const assInfoEmbed = new Discord.RichEmbed()
            .setColor('#09eadb')
            .addField(`Unit 14 A2 AND Unit 22 A1`, `Design, Create, and Test a Game`)
            .addField(`\u200b`, `Covers U14 P3-6, M3; and U22 P3-5, M1-3 criteria in 2 Tasks`)
            .addField(`\u200b`, `Due Monday 6th May at 12:00 (Midday)`)
            .addField(`\u200b`, `[Submission Link](https://moodle.lincolncollege.ac.uk/mod/assign/view.php?id=137142)`)
          message.channel.send(assInfoEmbed);
        } else if(args[0] === 'u26a2') {
          const assInfoEmbed = new Discord.RichEmbed()
            .setColor('#09eadb')
            .addField(`Unit 26 Maths RESUB Assignment 2`, `Number Series and Probabilities`)
            .addField(`\u200b`, `Covers P6; M3 criteria in 3 Tasks`)
            .addField(`\u200b`, `Due Tuesday 7th May at 13:00 (1pm)`)
            .addField(`\u200b`, `[Submission Link](https://moodle.lincolncollege.ac.uk/mod/assign/view.php?id=137452)`)
          message.channel.send(assInfoEmbed);
        } else if(args[0] === 'u27a1') {
          const assInfoEmbed = new Discord.RichEmbed()
            .setColor('#09eadb')
            .addField(`Unit 27 Server Side Web Assignment 1`, `Design and Create a CMS website`)
            .addField(`\u200b`, `Covers P2-5; M2-4; D2 criteria in 2 Tasks`)
            .addField(`\u200b`, `Due Friday 24th May at 14:00 (2pm)`)
            .addField(`\u200b`, `[Submission Link](https://moodle.lincolncollege.ac.uk/mod/assign/view.php?id=103932)`)
          message.channel.send(assInfoEmbed);
        } else if(args[0] === 'u23a2') {
          const assInfoEmbed = new Discord.RichEmbed()
            .setColor('#09eadb')
            .addField(`Unit 23 HCI Assignment 2`, `Design an application, and explain HCI Principles`)
            .addField(`\u200b`, `Covers P2-3; M1-2 criteria in 2 Tasks`)
            .addField(`\u200b`, `Due Wednesday 15th May at 12:45pm (Just after midday)`)
            .addField(`\u200b`, `[Submission Link](https://moodle.lincolncollege.ac.uk/mod/assign/view.php?id=118170)`)
          message.channel.send(assInfoEmbed);
        } else if(args[0] === 'u26a4') {
          const assInfoEmbed = new Discord.RichEmbed()
            .setColor('#09eadb')
            .addField(`Unit 26 Maths Assignment 4`, `Process and discuss survey results`)
            .addField(`\u200b`, `Covers P9-10, M5, D2 criteria in 4 Tasks`)
            .addField(`\u200b`, `Due Tuesday 21st May at 17:00 (5pm)`)
            .addField(`\u200b`, `[Submission Link](https://moodle.lincolncollege.ac.uk/mod/assign/view.php?id=58002)`)
          message.channel.send(assInfoEmbed);
        }
      }
    },
  };
