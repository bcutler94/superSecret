const { createInterface } = require('readline');
const readline = createInterface({
    input: process.stdin,
    output: process.stdout
});

class Input {

    static askQuestion = async () => {
        return new Promise (res => {
            readline.question("Which port would you like the server to run on?\n", (ans) => {
                res(ans)
            })
        })
    }

    static takeInput = async () => {
        while (true) {
            const answer = await Input.askQuestion();
            if (Number.isSafeInteger(parseInt(answer))) {
                return answer;
            } else {
                console.log('Invalid port number!')
            }
        }
    }

}

module.exports = {
    Input
}



