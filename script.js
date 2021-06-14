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
const ans1 = document.getElementById("opt1");
const ans2 = document.getElementById("opt2");
const ans3 = document.getElementById("opt3");
const ans4 = document.getElementById("opt4");
const submit = document.querySelector('#submit');
const answer = document.querySelectorAll('.answer')


// counter for nextQuestion
let qCount = 0;

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
        if (curAnsElem.checked) {
            answer
        }
    });
}

submit.addEventListener('click',()=>{
    const checkAnswer = getCheckAnswer();
})