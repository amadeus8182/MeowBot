const get_gif = require('../helpers/gif-getter')

module.exports = {
    name: 'meow',
    execute(msg) {    
        get_gif.execute(msg, 'kitty meowing')
    }
}