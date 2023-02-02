const { EmbedBuilder } = require("@discordjs/builders")

module.exports = {
    name: 'bold',
	desc: 'sends the user\'s given message using discord\'s regional indicator emojis.',
    execute(msg, args) {
		let send = "";
		for(const s of args) {
			for(const c of s) {
				send += `:regional_indicator_${c.toLowerCase()}:`;
			}
		}

		if(msg.guild!==null) msg.delete();
        msg.channel.send(send)
    }
}
