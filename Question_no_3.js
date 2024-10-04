const repl = require('repl');

const server = repl.start('> ');

server.defineCommand('oddoreven', {
    help: 'Check if a number is odd or even',
    action(num) {
        const number = parseInt(num);
        if (!isNaN(number)) {
            if (number % 2 === 0) {
                console.log(`${number} is Even`);
            } else {
                console.log(`${number} is Odd`);
            }
        } else {
            console.log('Please enter a valid number');
        }
        this.displayPrompt();
    }
});

console.log('Use ".oddoreven <number>" to check if a number is odd or even.');
