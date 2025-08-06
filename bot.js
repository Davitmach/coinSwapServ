const TelegramBot = require('node-telegram-bot-api');

const token = '8493115197:AAEU3ubhRipcP_UdzNtyMJ46oY2AdDsH0ME';
const miniAppUrl = 'https://coin-swap.vercel.app/';

console.log('✅ Токен загружен:', token.substring(0, 10) + '...');

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, async (msg) => {
  const chatId = msg.chat.id;
  
  const keyboard = {
    inline_keyboard: [
      [
        {
          text: '🚀 Открыть Coin Swap',
          web_app: {
            url: miniAppUrl
          }
        }
      ],
      [
        {
          text: '🔧 Отладка',
          web_app: {
            url: 'https://coin-swap.vercel.app/debug'
          }
        }
      ]
    ]
  };

  await bot.sendMessage(chatId, 
    `Привет! 👋\n\nНажмите кнопку ниже, чтобы открыть Coin Swap:`,
    {
      reply_markup: keyboard
    }
  );
});

console.log('🤖 Бот запущен...');
console.log('Используйте /start для открытия мини-приложения'); 