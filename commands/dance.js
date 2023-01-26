const get_gif = require('../helpers/gif-getter')

module.exports = {
    name: 'dance',
    execute(msg) {    
        get_gif.execute(msg, 'kitty dance', this.name)
    }
}