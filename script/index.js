import { defaultLanguage, translates } from './constnats.js';
import { valueSetter, tagCreator } from './helpers.js';
import { questions } from './db.js'; 

const speed = 50;
let i = 0;


const typeWriter = () => {
    const warningText = translates[defaultLanguage].warningText;
    const warningContainer = document.getElementById('warning');
    
    if (i < warningText.length) { //64;
        warningContainer.innerHTML+=  warningText[i];  
        i++;
        setTimeout(typeWriter, speed);
    } else {
        warningContainer.style.display = 'none';
        document.getElementById('quizSection').style.transform = 'translate(0, 50px)';

    }

};


typeWriter();



// quiz code area

const quizGenerator = (quizList) => {
    let quizStep = 0; //step
    
    console.log(quizStep, 'top');
    const quizCount = quizList.length;
    let correctAnswer = 0;
    let percent = 0;
    const ulContainer = document.getElementById('quiz_options');

    const nextStep = (position) => {
        if (position === 'next' && quizStep < quizCount) {
            quizStep++;
        } else if (position === 'prev' && quizStep > 0) {
            quizStep--;
        }
        const question = quizList[quizStep];  //0[0]
        // 

        console.log(quizStep, 'quizStep');
        
        ulContainer.innerText = '';

        valueSetter('#quiz_title', question.quizTitle);
        valueSetter('#helpers', question.quiz);

   
        question.options.forEach((quiz, index) => {
            tagCreator('li', ulContainer, quiz, index)
        });


        ulContainer.addEventListener('click', (e)=> {
            if (e.target.tagName === 'LI') {  
                if (e.target.dataset.option == question.correctOption) {
                    correctAnswer++;
                }
            } 
        });
    }

    return nextStep;
};

const quizConfig =  quizGenerator(questions); //quiz 1 berec

quizConfig();

const prev = document.getElementById('prev');
const next = document.getElementById('next');

prev.addEventListener('click', () => {
    quizConfig('prev');
})

next.addEventListener('click', () => {
    quizConfig('next');
})


// console.log(document.querySelectorAll('.button_conatiner > button'))