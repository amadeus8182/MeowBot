const { EmbedBuilder } = require("@discordjs/builders")

module.exports = {
	name: 'embed',
	desc: 'sends an embedded version of the user\'s given message.',
	execute(msg, args) {
		let sent = args.join(' ');
		if(sent.length > 256) {
			msg.channel.send('Please use a shorter message to embed!');
			return
		} else if (sent.length < 1) {
			msg.channel.send('Please provide a message to embed!');
			return
		}
		let embedding = new EmbedBuilder()
			.setTitle(args.join(' '))
			.setFooter({text: msg.author.username, iconURL: msg.author.displayAvatarURL({dynamic: true})}); 

		if(msg.guild!==null) msg.delete();

		msg.channel.send({embeds: [embedding]})
	}
}
