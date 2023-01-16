function percent(){
    let deg = document.getElementById("trueans");
    let deg2 = document.getElementById("trueans2");
    let all = document.getElementById("allans");
    let progress = document.getElementById("prog");
    let presn = document.getElementById("pres");
    let precentD = Math.floor(+deg.textContent * 100 / +all.textContent);
    progress.textContent = precentD;
    let cont = +presn.textContent.replace("%","");
    let degs = 0;
    let hand = setInterval(increas,40);
    let hand2 = setInterval(increas2,30);
    function increas(){
        presn.textContent = `${cont+1}%`;
        progress.setAttribute("value",cont+1);
        cont++
        if(cont <= 35){
            progress.classList.add("is-danger");
        }else if(cont <= 75 ){
            progress.classList.add("is-warning");
            progress.classList.remove("is-danger");
        }else{
            progress.classList.remove("is-warning");
            progress.classList.add("is-primary");
        }
        if(cont == precentD){
            clearInterval(hand)
        }
    }
    function increas2(){
        degs++
        deg2.textContent = `${degs}`;
        if(degs == +deg.textContent){
            clearInterval(hand2)
        }
    }
}


function showLects(){
    document.querySelector('.column.is-2').classList.toggle('hidelectS')
}

function lecturesDo(){
    let lectures = [...document.querySelectorAll(".lecter")];
    for(let i=0; i<lectures.length; i++){
        lectures[i].textContent = i+1;
        lectures[i].addEventListener('click',()=>{
            lectures.forEach(ele=>{
                ele.classList.remove("current");
            })
            lectures[i].classList.add("current")
        })
    }
}



// Search Functionality
let TileFilter = "";
let yearFilter = "";
let stageFilter = "";

function setTtile(val){
    TileFilter = val;
    searchFilter();
}
function setYear(val){
    yearFilter = val;
    searchFilter();
}
function setStage(val){
    stageFilter = val;
    searchFilter();
}
function getAllcourses(clNm){
    let allCourses = document.querySelectorAll(`.${clNm}`)
    return [...allCourses]
}

function searchFilter(){
    let courses = getAllcourses("card");
    courses.forEach((ele)=>{
        ele.classList.remove("filtered")
        if(ele.querySelector(".title").textContent.includes(TileFilter)){
            if(ele.querySelector(".year").textContent.includes(yearFilter)){
                if(ele.querySelector(".stage").textContent.includes(stageFilter)){
                    ele.classList.add("filtered")
                }
            }
        }
    })
    makeCardPages();
}

function makeCardPages(){
    let cards = getAllcourses("filtered");
    let cardNum = 8;
    let pagNmbr = Math.ceil(cards.length / cardNum);
    let pcparent = document.querySelector(".pagesCount");
    pcparent.innerHTML = "";

    for(let i=0; i<pagNmbr; i++){
        let newP = document.createElement("p")
        newP.textContent = i+1;

        let start = i*cardNum;
        let end = ((i+1)*cardNum) - 1;

        newP.addEventListener('click',()=>{
            let allP = [...document.querySelectorAll(".pagesCount p")];
            allP.forEach((ele)=>{
                ele.classList.remove("active");
            });

            newP.classList.add("active");
            
            cards.forEach((card,i)=>{
                if(start <= i && i <= end){
                    card.classList.add("active");
                }
                else card.classList.remove("active");
            })
        })

        pcparent.append(newP)
    }

    try{
        pcparent.firstElementChild.click();
        document.querySelector(".ifnot").style.display = "none";
    }catch(e){
        document.querySelector(".ifnot").style.display = "block";
    }
    
}
