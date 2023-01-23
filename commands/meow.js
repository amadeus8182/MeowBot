const { EmbedBuilder } = require("@discordjs/builders");
const { DiscordAPIError } = require("discord.js");

module.exports = {
    name: 'meow',
    async execute(msg) {    
        url = `https://g.tenor.com/v2/search?q=kitty meowing&key=${process.env.TENORKEY}&limit=50`;
        response = await fetch(url);
        let json = await response.json();

        const index = Math.floor((Math.random() * json.results.length))
        let embed = new EmbedBuilder()
            .setTitle(`meow #${index+1}`)
            .setImage(json.results[index].media_formats.gif.url)

        msg.channel.send({embeds: [embed]})
    }
}