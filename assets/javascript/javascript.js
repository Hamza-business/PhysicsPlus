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