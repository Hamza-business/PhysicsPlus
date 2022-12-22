// Count Down Timer => Quiz
function countDownTimer (){
    let timer = document.querySelector(".time");
    let timerN = timer.textContent.split(":");
    let minuts = timerN[0];
    let seconds = timerN[1];
    let handler1 = setInterval(descrease, 900);
    function descrease(){
        if(minuts == "0" && seconds == "0"){
            clearInterval(handler1)
        }else{
            if(seconds == "00"){
                seconds = "59";
                minuts -= 1;
                timer.textContent = `${minuts}:${seconds}`;
            }
            else{
                seconds -= 1;
                timer.textContent = `${minuts}:${seconds}`;
            }
        }
    }
}
countDownTimer()


// Adding Max Question Nums
let quesNum = document.querySelectorAll(".quistion");
document.querySelector(".maxera").textContent = quesNum.length;


// Variables 
let queue = document.querySelector(".queue");
let maxera = document.querySelector(".maxera");
let nexta = document.querySelector(".next");
let preva = document.querySelector(".prev");


// Adding active class to clicked answer and update queue
let asnes =  document.querySelectorAll(".ans");
asnes.forEach((ele)=>{
    ele.addEventListener("click",(e)=>{
        asnes.forEach((es)=>{
            es.classList.remove("active")
        })
        ele.classList.add("active");
        quesNum[+queue.textContent - 1].classList.add("answeredQ")
    })
})


// Rename Questions and add listner & update queue
quesNum.forEach((ele,i)=>{
    ele.textContent = `Q${++i}`;
    ele.addEventListener("click",(e)=>{
        quesNum.forEach((es)=>{
            es.classList.remove("activeQ");
        })
        ele.classList.add("activeQ");
        queue.textContent = i;
        if(i == +maxera.textContent){
            nexta.setAttribute("disabled","true");
            preva.removeAttribute("disabled");
        }else if(i == 1){
            nexta.removeAttribute("disabled");
            preva.setAttribute("disabled","true");
        }else{
            nexta.removeAttribute("disabled");
            preva.removeAttribute("disabled");
        }
    })
})


// Next & Previous Buttons => Quiz
function dodis(elem, val){
    if(val == false){
        elem.setAttribute("disabled","true")
    }else{
        elem.removeAttribute("disabled")
    }
}
function addremo(){
    quesNum.forEach((ele,i)=>{
        ele.classList.remove("activeQ");
    })
    quesNum[+queue.textContent -1].classList.add("activeQ")
}

nexta.addEventListener("click",(ele)=>{
    ele.preventDefault()
    console.log(+queue.textContent)
    if(+queue.textContent < +maxera.textContent){
        queue.textContent = `${+queue.textContent + 1}`;
        dodis(preva, true);
    }else{
        dodis(nexta, false);
        dodis(preva, true);
    }
    if(+queue.textContent == +maxera.textContent){
        dodis(nexta, false);
        dodis(preva, true);
    }
    addremo()
});
preva.addEventListener("click",(ele)=>{
    // quesNum[+queue.textContent + 1].click()
    ele.preventDefault()
    if(+queue.textContent > 1){
        queue.textContent = `${+queue.textContent - 1}`
        dodis(nexta, true);
    }else{
        dodis(preva, false);
        dodis(nexta, true);
    }
    if(+queue.textContent == 1){
        dodis(nexta, true);
        dodis(preva, false);
    }
    addremo()
});


// Burger icon click => Quiz
let burge = document.querySelector(".quizs .burgerIcon i");
burge.addEventListener("click", ()=>{
    document.querySelector(".allAns").classList.toggle("none")
})






