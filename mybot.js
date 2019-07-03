//Creating the veraibles needed
const fs = require('fs'); //Node's native file system
const Discord = require("discord.js"); //Bringing in Discord.js
const { prefix, token } = require('./config.json'); //Slapping the prefix and token into their own vars
const client = new Discord.Client(); //Creating a simulated client for the Bot to use
client.commands = new Discord.Collection(); //Extends JS's native map class
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js')); //Picks up all the .js files in the commands folder

for (const file of commandFiles) { //Slaps all the command files into the Collection
    const command = require(`./commands/${file}`);

    // set a new item in the Collection
    // with the key as the command name and the value as the exported module
    client.commands.set(command.name, command);
}

//To make sure the bot is up and running
client.on("ready", () => {
  console.log("I am ready!");
  client.user.setActivity('%help'); //Sets a Playing Status on the Bot
});

/***********************************************/
/*THE COMMANDS*/
/*Runs whenever a message is sent in a command the Bot has access to*/
client.on("message", (message) => {
  //Special command code
  //If the msg does NOT start with the prefix, OR it was sent by the bot itself - STOP
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  //Slides the prefix off the command
  const args = message.content.slice(prefix.length).split(/ +/);
  //Slaps the cmd into its own var
  const commandName = args.shift().toLowerCase();
  //If there is NOT a command with the given name or aliases, exit early
  const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
  if (!command) return;

  //A check for if the user ran a command inside DMs
  //if a cmd has 'guildOnly: true,', it won't work in DMs
  if (command.guildOnly && message.channel.type !== 'text') {
    return message.reply('I can\'t execute that command inside DMs!');
  }

  //A check for if the user ran a command inside Guilds
  //if a cmd has 'dmOnly: true,', it won't work in Guilds
  if (command.dmOnly && message.channel.type !== 'dm') {
    return message.reply('I can\'t execute that command inside Guilds!')
  }

  //A check for missing parameters
  //If a cmd has 'args: true,', it will throw the error
  //Requires the cmd file to have 'usage: '<user> <role>',' or similar
  if (command.args && !args.length) {
    let reply = `You didn't provide any arguments, ${message.author}!`;
      if (command.usage) {
        reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
      }
      return message.channel.send(reply);
  }

  //If there is, grab and run that command's execute() function
  try {
    command.execute(message, args);
  } //Any errors are caught here, and thrown back at the User and Console
  catch (error) {
    console.error(error);
    message.reply('There was an error trying to execute that command!');
  }
  //Extra Error Catching
  process.on('unhandledRejection', error => console.error('Uncaught Promise Rejection', error));
});
/***********************************************/

//The token to connect the bot to the Bot Account on Discord
client.login(token);
