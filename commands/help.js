const { EmbedBuilder } = require("@discordjs/builders")

module.exports = {
    name: 'help',
    execute(msg) {
        let embed = new EmbedBuilder()
            .setTitle('Command List!')
            .setDescription(`help - shows you this!
                             meow - sends a cat gif!
                             invite - send an invite link for this bot!`);
        msg.channel.send({embeds: [embed]})
    }
}