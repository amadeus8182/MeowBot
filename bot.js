console.log('Bot is Starting... Meow Meow...\n\n');
console.log(
`             *    ,MMM8&&&.            *
                  MMMM88&&&&&    .
                 MMMM88&&&&&&&
     *           MMM88&&&&&&&&
                 MMM88&&&&&&&&
                 'MMM88&&&&&&'
                   'MMM8&&&'      *    
           /\\/|_      __/\\\\
          /    -\\    /-   ~\\  .              '
          \\    = Y =T_ =   /
           )==*(\`     \`) ~ \\
          /     \\     /     \\
          |     |     ) ~   (
         /       \\   /     ~ \\
         \\       /   \\~     ~/
  jgs_/\\_/\\__  _/_/\\_/\\__~__/_/\\_/\\_/\\_/\\_/\\_
  |  |  |  | ) ) |  |  | ((  |  |  |  |  |  |
  |  |  |  |( (  |  |  |  \\\\ |  |  |  |  |  |
  |  |  |  | )_) |  |  |  |))|  |  |  |  |  |
  |  |  |  |  |  |  |  |  (/ |  |  |  |  |  |
  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |\n\n`);


/*=========================================================*/
    require('dotenv').config();
    const fs = require('fs');
    const Discord = require('discord.js');

    client = new Discord.Client()
    client.commands = new Discord.Collection();
    client.login(process.env.TOKEN)

    const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))

    for(const file of commandFiles) {
        const command = require(`./commands.${file}`);
        client.commands.set(command.name, command);
    }

    client.on('ready', bootUp);
    client.on('message', commands)

    function bootUp() {
        console.log('Bot Started. Meow.')
    }

    function comands(msg) {
        if(msg.content.startsWith('m.') && !msg.author.bot) {
            const args = msg.content.slice(1).split(/ +/);
            const command = args.shift().toLowerCase();

            if(client.commands.has(command)) {
                try {
                    client.commands.get(command).execute(msg, args);
                } catch(error) {
                    console.log(error)
                    msg.channel.send('Something unexpected happened.')
                }
            }

        }
    }
  