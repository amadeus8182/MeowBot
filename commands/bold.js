const { EmbedBuilder } = require("@discordjs/builders")

module.exports = {
    name: 'bold',
	desc: 'sends the user\'s given message using discord\'s regional indicator emojis.',
    execute(msg, args) {
		let numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
		let send = "";

		for(const s of args) {
			for(const c of s) {
				if(/[a-zA-Z]/.test(c)) send += `:regional_indicator_${c.toLowerCase()}:`;
				else if(/[0-9]/.test(c)) send += `:${numbers[parseInt(c)]}:`;
			}
			send += ' ';
		}


		let embedding = new EmbedBuilder()
			.setColor(parseInt((Math.random()*0xFFFFFF<<0).toString(16), 16))
			.setDescription(send)
			.setFooter({text: msg.author.username, iconURL: msg.author.displayAvatarURL({dynamic: true})}); 


		if(msg.guild!==null) msg.delete();
        msg.channel.send({embeds: [embedding]});
    }
}
