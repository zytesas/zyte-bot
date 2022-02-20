"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
exports.default = {
    category: 'Testing',
    description: 'Sends an embed',
    permissions: ['ADMINISTRATOR'],
    callback: ({ message, text }) => {
        const embed = new discord_js_1.MessageEmbed()
            .setDescription("Hello world")
            .setTitle('Title')
            .setColor('RED')
            .setAuthor('Zack')
            .setFooter('Footer');
        return embed;
    }
};
