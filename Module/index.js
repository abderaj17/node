const {listFiles} = require("../Module/ListFile")
const {readFile} = require("../Module/ReadFile")
const {changeDir} = require("../Module/ChangeDir")
const {writeFile} = require("../Module/WriteFile")

const readline = require("readline");

const rl = readline.createInterface({
    input:process.stdin,
    output: process.stdout,
});

let currentDir = process.cwd();

console.log(`Current Directory : ${currentDir}`);