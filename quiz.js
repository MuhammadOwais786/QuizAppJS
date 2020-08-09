var questions = [{ "category": "Science & Nature", "type": "multiple", "difficulty": "easy", "question": "What is the elemental symbol for mercury?", "correct_answer": "Hg", "incorrect_answers": ["Me", "Mc", "Hy"] }, { "category": "Celebrities", "type": "multiple", "difficulty": "easy", "question": "By what name is Carlos Estevez better known? ", "correct_answer": "Charlie Sheen", "incorrect_answers": ["Ricky Martin", "Bruno Mars", "Joaquin Phoenix"] }, { "category": "Entertainment: Film", "type": "boolean", "difficulty": "easy", "question": "Ewan McGregor did not know the name of the second prequel film of Star Wars during and after filming.", "correct_answer": "True", "incorrect_answers": ["False"] }, { "category": "Celebrities", "type": "multiple", "difficulty": "easy", "question": "What does film maker Dan Bell typically focus his films on?", "correct_answer": "Abandoned Buildings and Dead Malls", "incorrect_answers": ["Historic Landmarks", "Action Films", "Documentaries "] }, { "category": "Entertainment: Japanese Anime & Manga", "type": "multiple", "difficulty": "easy", "question": "In &quot;Future Diary&quot;, what is the name of Yuno Gasai&#039;s Phone Diary?", "correct_answer": "Yukiteru Diary", "incorrect_answers": ["Murder Diary", "Escape Diary ", "Justice Diary "] }, { "category": "Entertainment: Japanese Anime & Manga", "type": "multiple", "difficulty": "easy", "question": "In the anime Seven Deadly Sins what is the name of one of the sins?", "correct_answer": "Diane", "incorrect_answers": ["Sakura", "Ayano", "Sheska"] }, { "category": "Entertainment: Video Games", "type": "multiple", "difficulty": "easy", "question": "In the video game Overwatch, which playable character is infamous for saying &quot;It&#039;s high noon.&quot;?", "correct_answer": "McCree", "incorrect_answers": ["Hanzo", "Pharah", "Soldier: 76"] }, { "category": "Entertainment: Video Games", "type": "boolean", "difficulty": "easy", "question": "Ana was added as a new hero for the game Overwatch on July 19th, 2016.", "correct_answer": "True", "incorrect_answers": ["False"] }, { "category": "Entertainment: Television", "type": "multiple", "difficulty": "easy", "question": "Who was the first ever actor to play &quot;The Doctor&quot; on &quot;Doctor Who&quot;?", "correct_answer": "William Hartnell", "incorrect_answers": ["David Tennant", "Peter Capaldi", "Tom Baker"] }, { "category": "Entertainment: Music", "type": "multiple", "difficulty": "easy", "question": "Which punk rock band released hit songs such as &quot;Californication&quot;, &quot;Can&#039;t Stop&quot; and &quot;Under the Bridge&quot;?", "correct_answer": "Red Hot Chilli Peppers", "incorrect_answers": ["Green Day", "Linkin Park", "Foo Fighters"] }]

generateQuiz()

function generateQuiz() {
    var questionsElement = document.getElementById("questions")
    for (var i = 0; i < questions.length; i++) {
        console.log(questions[i])
        var questionItem = document.createElement("LI")
        var title = document.createElement("H3")
        title.innerHTML = questions[i].question


        // Li  --> h3
        questionItem.appendChild(title)

        var option = questions[i].incorrect_answers
        option.push(questions[i].correct_answer)

        // Shiffling
        var arrayShuffle = function (changeOption) {
            var newPos, temp;
            for (var k = changeOption.length - 1; k > 0; k--) {
                newPos = Math.floor(Math.random() * (k + 1))
                temp = changeOption[k]
                changeOption[k] = changeOption[newPos]
                changeOption[newPos] = temp
            }
            return changeOption
        }
        var newArray = arrayShuffle(option)


        for (j = 0; j < option.length; j++) {
            var radio = document.createElement('INPUT')

            radio.setAttribute('type', 'radio')
            radio.setAttribute('name', i)
            radio.value = option[j]
            questionItem.appendChild(radio)

            var valueItem = document.createElement('SPAN')
            valueItem.innerHTML = option[j]
            questionItem.appendChild(valueItem)

            var breaker = document.createElement('BR')
            questionItem.appendChild(breaker)
        }

        // ul  --> li
        questionsElement.appendChild(questionItem)
    }
}


function onSubmit() {
    var check = 0
    var i=0
    var quizOption = document.getElementsByTagName("li")
    for (var k = 0; k < quizOption.length; k++) {
        var quizSelect = document.getElementsByTagName("input")
        for (var l = 0; l < quizSelect.length; l++) {

            if (quizSelect[l].checked) {
                console.log(questions[i].correct_answer)
                if (quizSelect[l].getAttribute("value") === (questions[i].correct_answer)) {
                    check++
                }
            }
        }
    }
    percentage = check / 100 * 100 
    // document.getElementById("percentage").innerHTML = "you are gained by " + percentage + " % Marks"
    document.getElementById("percentage").innerHTML = alert("you are gained by " + percentage + " % Marks")= "you are gained by " + percentage + " % Marks"
}


/*========================================================================
                            count down
========================================================================*/
// var timer = 10;
// var min = 0
// var sec = 0
// function startTimer(){
//     min = parseInt(time/60)
//     sec = parseInt(time%60)

//     if(timer<1){
//         // alert("Time Is Over")
//         window.location.href = "timeover.html"
//     }
//     document.getElementById("time").innerHTML = "<b>Time Left: </b>" + min.toString() + ";" + sec.toString();
//     timer--
//     setTimeout(function(){
//         startTimer();
//     },1000);
// }


// var count = 15;
// var interval = setInterval(function(){
//     document.getElementById('count').innerHTML = "Your Time: " + count;
//     count--;
//     if(count === 0){
//         clearInterval(interval)
//         document.getElementById('count').innerHTML = 'DONE';
//     }
// },1000)

var startingMinutes = 10;
let time = startingMinutes * 60;

const countDownEl = document.getElementById('count')
setInterval(updateCountdown,1000);

function updateCountdown(){
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds: seconds;

    countDownEl.innerHTML = `${minutes}:${seconds}`;
    time--;
}