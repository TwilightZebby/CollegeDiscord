module.exports = {
    name: 'ping',
    description: 'Pings the bot and returns Pong!',
    usage: ' ',
    execute(message, args) {
        console.log(`${message.author.username} ran the Ping command.`)
        const userPing = message.author.client.ping;
        message.channel.send(`Pong.\nYour ping is ${userPing}ms.`);
    },
};
