let wordtext=document.querySelector('.word')
let refereshbtn=document.querySelector('.refresh');
let inputext=document.querySelector("input");
let hinttext=document.querySelector('.details .hint span');
let checkbtn=document.querySelector('.check')
let correctword=''
let timer;
let time=document.querySelector('.time b')
const initTimer=maxtime=>{
    clearInterval(timer);
    timer=setInterval(() => {
        if (maxtime>0){
            maxtime--;
            return time.innerText=maxtime;

        }
        clearInterval(timer);
        alert('Timeoff , '+correctword+' is the right answer')
        initgame();

        
        
    }, 1000);
}
const initgame=() =>{
    
    initTimer(30)
    let randomobj=words[Math.floor(Math.random()*words.length)];
    correctword=randomobj.word.toLocaleLowerCase();
    let randomarray=randomobj.word.split('');
    for (let i=randomarray.length-1;i>0;i--){
        let j=Math.floor(Math.random()*(i+1));
        [randomarray[i],randomarray[j]]=[randomarray[j],randomarray[i]];
    }
    inputext.value="";
    inputext.setAttribute("maxlength",correctword.length);
    wordtext.innerHTML=randomarray.join('');
    hinttext.innerHTML=randomobj.hint;
   
    
}
initgame();
const check=()=>{
    let userword=inputext.value.toLocaleLowerCase();
    
    
    if (!userword){
        alert('Answer cannot be null')
    }
    if (userword===correctword){
        alert('congrats!Your Answer is Right')
        initgame();    
    }
    else{
        alert('oops its Wrong')
        
    }
    

    
}

refereshbtn.addEventListener("click",initgame);
checkbtn.addEventListener("click",check);