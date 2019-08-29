let userName = '';
userName ? console.log(`Hello, ${userName}`) : console.log("Hello");
let userQuestion = "Is this right?";
console.log(`User asked: ${userQuestion}`);
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = randomNumber;


let answer;

switch (eightBall) {
    case 0: answer = "it is certain 0"
        break;
    case 1: answer = "it is certain 1"
        break;
    case 2: answer = "it is certain 2"
        break;
    case 3: answer = "it is certain 3"
        break;
    case 4: answer = "it is certain 4"
        break;
    case 5: answer = "it is certain 5"
        break;
    case 6: answer = "it is certain 6"
        break;
    case 7: answer = "it is certain 7"
        break;
}

console.log(`magic eightball says: ${answer}`)