const { EmbedBuilder } = require("@discordjs/builders")
const bot = require('../bot.js')

module.exports = {
    name: 'help',
    execute(msg) {
		let cmds = []

		for(const cmd of bot.cmds) {
			cmds.push(`**${cmd[1].name}** - ${cmd[1].desc}`);
		}

        let embed = new EmbedBuilder()
            .setTitle('Command List!')
            .setDescription(cmds.join('\n'));
        msg.channel.send({embeds: [embed]})
    }
}
