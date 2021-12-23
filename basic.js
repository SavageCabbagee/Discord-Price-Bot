// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`)

    function price()  {
        const https = require('https');
        // change API as needed
        https.get('https://api.vvs.finance/info/api/tokens/0x2D03bECE6747ADC00E1a131BBA1469C15fD11e03', (resp) => {
            let data = '';

            // A chunk of data has been received.
            resp.on('data', (chunk) => {
                data += chunk;
            });

            // The whole response has been received. Print out the result.
            resp.on('end', () => {
                console.log(JSON.parse(data).data.price);
                // change the data and price as needed depending on API
                console.log(JSON.parse(data).updated_at);
                x = (JSON.parse(data).data.price);
                client.user.setActivity('$' + x);
            });

        });
        
        
    
    }

    setInterval(price, 300000);

});
    
// Login to Discord with your client's token
client.login(token);
