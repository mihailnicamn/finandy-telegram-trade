const axios = require('axios');
require('dotenv').config();
var finandy = require('./message.json');
var signals = require('./signals.json');


const logic = {
    parseCommand: function(command) {
        var data = { url: "", finandy: finandy, success: true }
        const command_parts = command.split(' ');
        const command_name = command_parts[0];
        const command_args = command_parts.slice(1);
        if (command_name === 'trade') {
            if (command_args != null) {
                //-----------------------------------
                if (command_args[0] == 'buy') {
                    data.finandy.side = 'buy';
                    
                } else if (command_args[0] == 'sell') {
                    data.finandy.side = 'sell';
                } else {
                    data.success = false

                }
                //-----------------------------------
                if (command_args[1] != null || command_args[1] != undefined || command_args[1] != '') {
                    data.finandy.symbol = command_args[1];
                }
                //-----------------------------------
                if(command_args[2] != null || command_args[2] != undefined || command_args[2] != ''){
                    if(isNaN(parseFloat(command_args[2]))){
                        data.success = false;
                    }else{
                        data.finandy.scaled.price1.value = parseFloat(command_args[2]);
                    }
                }else{
                    data.success = false;
                }
                //-----------------------------------
                if (command_args[3] == "$") {
                    data.finandy.open.amountType = "sum";
                } else if (command_args[3] == "%") {
                    data.finandy.open.amountType = "balance";
                } else if (command_args[3] != "$" || command_args[3] != "%") {
                    data.success = false
                } else {
                    data.success = false
                }
                //-----------------------------------
                if (command_args[4] != null || command_args[4] != undefined || command_args[4] != '') {
                    data.finandy.open.amount = command_args[4];
                } else {
                    data.success = false
                }
                //-----------------------------------
                if (command_args[5] != null || command_args[5] != undefined || command_args[5] != '') {
                    if (signals.hasOwnProperty(command_args[5])) {
                        data.url = signals[command_args[5]].url;
                        data.finandy.name = signals[command_args[5]].name;
                        data.finandy.secret = signals[command_args[5]].secret;
                    } else {
                        data.success = false
                    }
                } else {
                    data.success = false
                }
                //-----------------------------------
                
            }
            return data;
        }

    },
    sendSignal: function(data,bot,chatID) {
        axios.post(data.url, data.finandy)
            .then(function(response) {
                bot.sendMessage(chatID, 'Your order has been placed on '+data.finandy.symbol);
            })
            .catch(function(error) {
                bot.sendMessage(chatID, 'Your order has not been placed');
            });
    }

}

module.exports = logic;