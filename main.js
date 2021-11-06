const readLine = require('readline');
const fs = require ('fs');

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

const question = ['name', 'age', 'job'];
let i = 0;

function ask(){
    if (question.length!=i) {
        console.log('What is your '+question[i]);
        rl.prompt();
        i++;
    }else{
        console.log('Thanks for info');
        rl.close();
    }
}

ask();

rl.on('line', function(line){
    fs.appendFile('db.txt', line+'\n', function(err){
        if(err) throw err;
        ask();
    })
})

rl.on('close', function(){
    fs.appendFileSync('db.txt', "******************** \n");
})

// const rand = Math.floor(Math.random() * 5);

// console.log('Pogodi magicni broj');

// rl.prompt();

// rl.on('line', function (line) {
//     if(line==rand){
//         console.log('Pogodak');
//         rl.close();
//     }else{
//         console.log('Pokusaj ponovo');
//         rl.prompt()
//     }
// })