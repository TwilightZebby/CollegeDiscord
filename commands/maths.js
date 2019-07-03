const { prefix } = require('../config.json');

module.exports = {
    name: 'maths',
    description: 'Performs a basic maths equation on all inputted numbers',
    usage: '<add|subtract|times|divide> <first number> <second number> [third number] [fourth number] ...',
    extraInfo: 'Please note that the Bot will work from the first number onwards.\nFor example, inputting six \'2\'s for Multiplication will output \'64\'.',
    args: true,
    execute(message, args) {
        console.log(`${message.author.username} ran the Maths command.`);

        //Check that the User has actually inputted an action and at least two numbers.
        if(args.length < 3) {
          message.reply(`You didn't input enough arguments!\nThe proper usage would be: \`${prefix}maths <add|subtract|times|divide> <first number> <second number> [third number] [fourth number] ...\``);
          return;
        }

        //Declaring Variables
        const sumAction = args[0];
        const inputtedNumbers = [];
        var i = 1;

        //Error Checking to ensure numbers were inputted
        for(i; i < args.length; i++) {
          if(i === 0) {
            console.log('Maths ErrorChecking i = 0');
          } else {
            //Turn the inputs into floats
            function convertToFloat(numToConvert) {
              try {
                const convertedFloat = parseFloat(numToConvert);
                return convertedFloat;
              } catch(err) {
                console.log('Cannot parse Input into a Float');
                message.reply('Found a non-integer. Only numbers and decimals are allowed!');
              }
          }
          //Add the Floats into the Array
          inputtedNumbers.push(convertToFloat(args[i]));
        }
      }

        //THE CALCULATIONS
        i = 1;
        var result = inputtedNumbers[0];

        switch(sumAction) {
          //Addition
          case 'add':
            console.log('Maths Switch Add');
            for(i; i < inputtedNumbers.length; i++) {
              result = result + inputtedNumbers[i];
              console.log(result);
            }
            message.channel.send(result);
            break;
          //Subtraction
          case 'subtract':
            console.log('Maths Switch Subtract');
            for(i; i < inputtedNumbers.length; i++) {
              result = result - inputtedNumbers[i];
              console.log(result);
            }
            message.channel.send(result);
            break;
          //Multiplication
          case 'times':
            console.log('Maths Switch Times');
            for(i; i < inputtedNumbers.length; i++) {
              result = result * inputtedNumbers[i];
              console.log(result);
            }
            message.channel.send(result);
            break;
          //Division
          case 'divide':
            console.log('Maths Switch Divide');
            for(i; i < inputtedNumbers.length; i++) {
              result = result / inputtedNumbers[i];
              console.log(result);
            }
            message.channel.send(result);
            break;
        }
    },
};
