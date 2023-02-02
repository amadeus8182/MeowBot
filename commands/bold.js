const { EmbedBuilder } = require("@discordjs/builders")

module.exports = {
    name: 'bold',
	desc: 'sends the user\'s given message using discord\'s regional indicator emojis (removes any non-alphanumeric character).',
    execute(msg, args) {
		let numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
		const regex = /[^a-zA-Z0-9]/g;
		let sent = args.join(' ').replaceAll(regex, '');
		let send = '';

		if(sent.length > 180) {
			msg.channel.send('Please use a message shorter than 180 characters!');
			return;
		} else if(sent.length < 1) {
			msg.channel.send('Please provide a message to bolden!');
			return;
		}

		for(const c of sent) {
			if(/[a-zA-Z]/.test(c)) send += `:regional_indicator_${c.toLowerCase()}:`;
			else if(/[0-9]/.test(c)) send += `:${numbers[parseInt(c)]}:`;
			else if(c == ' ') send += c;
		}

		let embedding = new EmbedBuilder()
			.setColor(parseInt((Math.random()*0xFFFFFF<<0).toString(16), 16))
			.setDescription(send)
			.setFooter({text: msg.author.username, iconURL: msg.author.displayAvatarURL({dynamic: true})}); 


		if(msg.guild!==null) msg.delete();
        msg.channel.send({embeds: [embedding]});
    }
}
