module.exports = {
    name: 'factorial',
    description: 'Finds the factorial of the given number.',
    usage: '<integer>',
    aliases: ['fact'],
    args: true,
    execute(message, args) {
      console.log(`${message.author.username} ran the Factorial command.`)
      //Using recursion for this
      function factorialCalc(termValue) {
        if(termValue === 0) {
          return 1;
        } else {
          return termValue * factorialCalc(termValue - 1);
        };
      };
      message.channel.send(factorialCalc(args[0]));
    },
};

/*Credit for the code for this command goes to my college tutor John!*/
