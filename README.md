# finandy-telegram-trade
 a nodejs script to open trades on finandy based on telegram messages



## Installation
> npm install
### for running the script

#### create a .env file with the following content
>TELEGRAM_TOKEN = 'TOKEN' # Telegram bot token
#### add your **finandy** signal_url, signal_name and signal_secret to 
>signals.json
#### add your **finandy** signal_message to 
>messages.json
#### run the script
> node app.js 
#### send a message to your bot
> trade [buy || sell] [symbol] [price] [$ for volume || % for percentage of balance] [$ || % value]  [signal name]
**you will need to set the stop loss and the take profit on finandy the only price that is send through the telegram message is the entry price**

## Example of my set
**entry**
![entry](cost-average&entry.png)
**exit/reversal**
![close&reversal](close&reversal.png)
**trailing stop loss**
![trailing-stop](trailing-stop.png)
**take profit**
![take-profit](take-profit.png)

### Under construction 

#### for running the the ui
> node sv.js