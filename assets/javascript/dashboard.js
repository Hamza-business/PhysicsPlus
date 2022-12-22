let hider = document.querySelector(".fa-caret-left");
let shower = document.querySelector(".fa-bars");
let bardiv = document.querySelector(".bars");

function menu(){
    function adder(){
        hider.classList.toggle("hide");
        shower.classList.toggle("hide");
        bardiv.classList.toggle("hide");
    }
    hider.onclick = adder;
    shower.onclick = adder;
}


function sectionS(){
    let sectionSelectLinks = Array.from(document.querySelectorAll('.sectionSelect a'));
    sectionSelectLinks.forEach((ele)=>{
        ele.addEventListener('click',()=>{
            let ids = ele.getAttribute('href');
            let section = document.querySelector(`${ids}`);
            Array.from(document.querySelectorAll('.csections')).forEach((sec)=>{
                sec.classList.remove('active')
            })
            sectionSelectLinks.forEach(linker => {
                linker.classList.remove('active')
            });
            ele.classList.add('active')
            section.classList.add('active');
        })
    })
}
sectionS()

function maxch(){
    let msg = Array.from(document.querySelectorAll('.msg'));
    msg.forEach((ele)=>{
        let cont = ele.textContent;
      	cont.slice(0,10)
        ele.textContent = `${cont.slice(0,40)}...`
    })
}

function addAns(e){
    let parent = e.parentNode.parentNode.querySelector(".ques");
    let ansCheck = e.parentNode.querySelector("input");
    let ansText = ansCheck.nextElementSibling;
    parent.innerHTML += 
    `
        <div class="Aoption">
            <p ansType="${ansText.getAttribute("ans")}">${ansText.value}</p>
            <a onclick =del(this) class="button is-danger is-small">delete</a>
        </div>
    `
    
}
function ansshower(e){
    let ansSect = e.nextElementSibling
    ansSect.classList.toggle("hide");
}

function trueans(e){
    if(e.checked){e.nextElementSibling.setAttribute('ans',"true")}
    else{e.nextElementSibling.setAttribute('ans',"false")}
}

function del(e){
    console.log(1)
    e.parentNode.remove()
}
