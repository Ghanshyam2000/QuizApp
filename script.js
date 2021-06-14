const quiz =
[
    {
    question : "Q1 : Choose the correct option in terms of Issues related to professional responsibility?",
    a: "Confidentiality",
    b: "Intellectual property rights",
    c: "Both Confidentiality & Intellectual property rights",
    d: "Managing Client Relationships",
    ans: "ans3"
    },
    {
        question: "Q2 : “Software engineers should not use their technical skills to misuse other people’s computers.”Here the term misuse refers to:",
        a:"Unauthorized access to computer material",
        b:"Unauthorized modification of computer material",
        c:"Dissemination of viruses or other malware",
        ans : "ans4"
    },
    {
        question: "Q3 : Identify an ethical dilemma from the situations mentioned below:",
        a:"Your employer releases a safety-critical system without finishing the testing of the system",
        b:"Refusing to undertake a project",
        c:"Agreement in principle with the policies of senior management",
        d:"All of the mentioned",
        ans:"ans1"
    },
    {
        question: "Q4 : Select the incorrect statement: “Software engineers should",
        a: "not knowingly accept work that is outside your competence.”",
        b: "not use your technical skills to misuse other people’s computers.”",
        c: " be dependent on their colleagues.”",
        d: "maintain integrity and independence in their professional judgment.”",
        ans:"ans3"
    }
];

const ques = document.getElementsByClassName("question")[0];

const ans1 = document.getElementById("option1");
const ans2 = document.getElementById("option2");
const ans3 = document.getElementById("option3");
const ans4 = document.getElementById("option4");

const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer')


const showScore = document.querySelector('#showScore');
// counter for nextQuestion
let qCount = 0;
// counter for the total score
let score  = 0;

const loadAnotherQuestion = () => {
    const questionList = quiz[qCount];

    ques.innerText = questionList.question;
    ans1.innerText = questionList.a;    
    ans2.innerText = questionList.b;
    ans3.innerText = questionList.c;
    ans4.innerText = questionList.d;
    
}
 
loadAnotherQuestion();

const getCheckAnswer = () =>{
    let answer;
    answers.forEach((currentElem) => {
        if (currentElem.checked) {
            // taking the id of the element , which is checked by the user
            answer = currentElem.id;
        }
    });
    return answer;
}

// removing the selected option form the quiz
const deselectAll = ()=>{
    // whichever option is marked as checked it will be unchecked
    answers.forEach((currentElem) => currentElem.checked = false)
}

submit.addEventListener('click',()=>{
    const checkAnswer = getCheckAnswer();
    console.log(checkAnswer);

    // checking the correct answer and increment the score
    if (checkAnswer === quiz[qCount].ans) {
        score++;
    }
    // else if(checkAnswer === undefined){
    //     alert("please answer the following question");
    //     // break;
    // }

    // increment the question Count so that new question would appear
    qCount++;
    deselectAll();

    if(qCount < quiz.length)
    {
        loadAnotherQuestion()
    }else{
        if(score<1){
            showScore.innerHTML=
            `
            <h1 class="loose">Oops!</>
            <h3 class="loose">You Scored ${score}/${quiz.length} </h3>
            <button class="btn" onclick="location.reload() " >Better luck next time</button>
            `
        }else{
            showScore.innerHTML= 
            `
            <h1 class="win">Good !</>
            <h3>You Scored ${score}/${quiz.length}</h3>
            <button class="btn" onclick="location.reload()">PLAY AGAIN</button>
            `
        }
        

        showScore.classList.remove('scoreArea');
    }
})