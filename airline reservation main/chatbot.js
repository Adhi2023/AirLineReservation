const button=document.getElementById("chatbot");
button.addEventListener("click",function(){
const { Botpress } = require('botpress');

const bot = new Botpress();

bot.hear(/hello/i, async (event) => {
  await event.reply('Hello, how can I assist you today?');
});

bot.hear(/flight status/i, async (event) => {
  // Call an airline API to fetch flight status data
  const flightStatus = await airlineApi.getFlightStatus(event.data.flightNumber);
  await event.reply(`The status of flight ${event.data.flightNumber} is ${flightStatus}.`);
});

bot.start();

});
