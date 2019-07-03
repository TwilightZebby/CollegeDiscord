module.exports = {
    name: 'restart',
    description: 'Restarts the bot',
    usage: ' ',
    aliases: ['stop', 'kys'],
    extraInfo: 'Can only be used by the Bot Developer',
    execute(message, args) {
      console.log(`${message.author.username} ran the Restart command.`)
      if (message.author.id === '156482326887530498') {
        console.log('**************************************************')
        console.log('Bot was termiated through restart command.')
        console.log('**************************************************')
        process.exit();
      } else {
        message.channel.send('Sorry, you cannot use this command.');
      }
    },
};
