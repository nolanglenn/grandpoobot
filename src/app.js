import tmi from 'tmi.js'
require('dotenv').config()

const options = {
    options: { debug: true },
	connection: {
		secure: true,
		reconnect: true
	},
	identity: {
		username: process.env.BOT_USERNAME,
		password: process.env.OAUTH_TOKEN
	},
	channels: [ process.env.CHANNEL_NAME ]
}

const client = new tmi.Client(options);

client.connect();

client.on('message', (channel, tags, message, self) => {
	// Ignore echoed messages.
	if(self) return;

	if(message.toLowerCase() === '!discord') {
		// "@alca, heya!"
	    client.say(channel, `https://discord.gg/ST2yAP`);
	} else if (message.toLowerCase() === '!podcast') {
        client.say(channel, `https://ngppodcast.com/`);
    }
});