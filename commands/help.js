const { prefix } = require('../config.json');

module.exports = {
    name: 'help',
    description: 'List all of my commands or info about a specific command.',
    usage: '[command name]',
    execute(message, args) {
      console.log(`${message.author.username} ran the Help command.`)
      const data = [];
      const { commands } = message.client;

      if (!args.length) {
        data.push('Here\'s a list of all my commands:');
        data.push(commands.map(command => command.name).join(', '));
        data.push(`\nYou can send \`${prefix}help [command name]\` to get info on a specific command!`);

        return message.channel.send(data, { split: true })
        .then(() => {
          if (message.channel.type === 'dm') return;
        })
        .catch(error => {
          console.error(`Could not send help msg to ${message.author.tag}.\n`, error);
          message.reply('There was an error!');
        });
      }

      const name = args[0].toLowerCase();
      const command = commands.get(name);

      if (!command) {
        return message.reply('That\'s not a valid command!');
      }

      data.push(`**Name:** ${command.name}`);
      if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
      if (command.description) data.push(`**Description:** ${command.description}`);
      if (command.usage) data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`);
      if (command.specificInputs) data.push(`**Allowed User Inputs:** ${command.specificInputs}`);
      if (command.extraInfo) data.push(`**Extra Information:** ${command.extraInfo}`);

      message.channel.send(data, { split: true });
    },
};
