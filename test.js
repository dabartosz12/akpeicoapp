const anwser = document.getElementById('anwser');
let answers = ['NIE JEST', 'TAK, JEST KURWA NAJWIEKSZY SKURWIEL',
'SPOKO ZIOMEK Z NIEGO JEST', 'JEBAC KURWE'];

function newClassMate() {
    let randomNumber = Math.floor(Math.random() *(answers.length));
    anwser.innerHTML = answers[randomNumber];
};

console.log(answers);