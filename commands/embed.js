const { EmbedBuilder } = require("@discordjs/builders")

module.exports = {
	name: 'embed',
	execute(msg, args) {
		let embedding = new EmbedBuilder()
			.setTitle(args.join(' '))
			.setFooter({text: msg.author.username, iconURL: msg.author.displayAvatarURL({dynamic: true})}); 
		msg.channel.send({embeds: [embedding]})
	}
}
