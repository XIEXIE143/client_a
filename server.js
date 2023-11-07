// main.js
const fs = require('fs');
const dotenv = require('dotenv');
dotenv.config();

const message = require('./message');

const name = process.env.NAME;
const number = process.env.NUMBER;

const result = message.create(name, number);

fs.writeFileSync('result.txt', result);

console.log('結果を result.txt に書き出しました。');
