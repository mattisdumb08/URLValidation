const fs = require("fs")
const readLine = require("readline")

// https://stackoverflow.com/questions/61394928/get-user-input-through-node-js-console
const rl = readLine.createInterface(
    {
        input : process.stdin,
        output : process.stdout,
    }
);

const prompt = function(question){
    return new Promise(function(resolve){
        rl.question(question , function(answer){
            resolve(answer);
        });
    });
}

async function main(){
    const input = await prompt("Enter some text: ");

    console.log(input);

    console.log("Hello World!");

    rl.close()

}

main()