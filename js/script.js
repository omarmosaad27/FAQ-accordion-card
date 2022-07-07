
let questions = document.querySelectorAll(".question .q")
let questionsArray = Array.from(questions)
let answer = Array.from(document.querySelectorAll(".answer"))
console.log(questionsArray);

questionsArray.forEach((q) => {
    q.addEventListener("click", function (e) {
        answer.forEach((answer) => {
            answer.classList.remove("open")
        })
        
        document.querySelector(`.${e.target.dataset.q}`).classList.toggle("open")

        questionsArray.forEach((q) => {
            q.classList.remove("active")
            q.lastChild.classList.remove("up")
        })
        
        e.target.classList.toggle("active")
        e.target.lastChild.classList.toggle("up")

        
    })
})