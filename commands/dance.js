const { EmbedBuilder } = require("@discordjs/builders")

module.exports = {
    name: 'dance',
    execute(msg) {    
        get_gif.execute(msg, 'kitty dance')
    }
}