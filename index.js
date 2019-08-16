// below is a class that has three properties and two methods
class Question{
    constructor(questionText, answers, correctAnswerIndex){
        this.questionText = questionText;
        this.answers = answers;
        this.correctAnswerIndex = correctAnswerIndex;

    }

quesAndAns(){
console.log(this.questionText +"\n" + this.answers);
}
acceptsAns(){
console.log(this.correctAnswerIndex);
}
}

function main(){
    let userInput = prompt("Please open the console. Please select the correct answer");
let q1 = new Question('How many million miles is Earth from the Sun?',['123', '93', '150'], 1);
let q2 = new Question('How many books are there in the Bible?',['66','29','33'],0);
let q3 = new Question('What is the Capital City of Jamaica?',['Lucea','Montego Bay', 'Kingston'],'2');
console.log(q1.quesAndAns());
console.log(q2.quesAndAns());
console.log(q3.quesAndAns());
let 
// let questions= [q1,q2,q3];
//      for(let idx in questions){
//          let available_list_array = questions[idx].questionText;
//          console.log(available_list_array);
//     }
}
main()