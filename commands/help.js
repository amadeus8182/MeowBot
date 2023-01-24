const { EmbedBuilder } = require("@discordjs/builders")

module.exports = {
    name: 'help',
    execute(msg) {
        let cmds = ['help - shows you this!',
                    'meow - sends a cat gif!',
                    'invite - send an invite link for this bot!']
        let embed = new EmbedBuilder()
            .setTitle('Command List!')
            .setDescription(cmds.join('\n'));
        msg.channel.send({embeds: [embed]})
    }
}