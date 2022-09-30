const logic = require('./logic.js');
const TelegramBot = require('node-telegram-bot-api');
const fileops = require('./fileops.js');
const chatID = "1472803636";
const token = process.env.TELEGRAM_TOKEN;
const bot = new TelegramBot(token, {polling: true});


bot.on('message', (msg) => {
    if(msg.chat.id != chatID){
        bot.sendMessage(chatId, 'You are not authorized to use this bot');
    }else{
        if(msg.text != null || msg.text != undefined || msg.text != ''){
            var data = logic.parseCommand(msg.text);
            if(data.success){
                logic.sendSignal(data,bot,chatID);
            }else{
                bot.sendMessage(chatID, 'Your order has not been placed');
            }
        }
    }
});
// EXAMPLE console.log(JSON.stringify(logic.parseCommand("trade buy OPUSDTPERP 0.98 $ 10 signal1")));


