// Require the necessary discord.js classes
require('dotenv').config();
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`)

    function price()  {
        const https = require('https');
        https.get('https://api.vvs.finance/info/api/tokens/0xDD73dEa10ABC2Bff99c60882EC5b2B81Bb1Dc5B2', (resp) => {
            let data = '';

            // A chunk of data has been received.
            resp.on('data', (chunk) => {
                data += chunk;
            });

            // The whole response has been received. Print out the result.
            resp.on('end', () => {
                console.log(JSON.parse(data).data.price);
                console.log(JSON.parse(data).updated_at);
                x = (JSON.parse(data).data.price);
                x = x * 1000000;
                x = x.toFixed(3);
                console.log(x);
                
                client.user.setActivity('$' + x);
            });

        });
        
        
    
    }

    setInterval(price, 1500);

});
    
// Login to Discord with your client's token
client.login(process.env.TOKEN);
