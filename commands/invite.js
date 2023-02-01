module.exports = {
    name: 'invite',
	desc: 'sends an invite link for the bot to be able to join other servers.',
    execute(msg) {
        msg.channel.send('You can invite using this link! https://discord.com/oauth2/authorize?client_id=1066857245675102360&scope=bot&permissions=274878032960');
    }

}
