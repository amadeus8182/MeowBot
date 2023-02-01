const { EmbedBuilder } = require("@discordjs/builders")

module.exports = {
	name: 'embed',
	execute(msg, args) {
		let send = args.join(' ');
		if(send.length > 256) {
			msg.channel.send('Please provide a shorter message to embed!');
			return
		} else if(send.length < 1) {
			msg.channel.send('Please provide a message to embed!');
			return
		}
		let embedding = new EmbedBuilder()
			.setTitle(args.join(' '))
			.setFooter({text: msg.author.username, iconURL: msg.author.displayAvatarURL({dynamic: true})}); 
		msg.channel.send({embeds: [embedding]})
	}
}
