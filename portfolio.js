const body = document.querySelector(".body");
const flex = document.querySelector(".flex");
const id1 = document.querySelector(".id1");
const id5 = document.querySelector(".id5");
const id = []
const idNum = 9;
let fristId = 1;
const HIDNE = "hiden"
const WIDTH = "width"
let Left = false;
let Right = false;
let ing = false;

right = () =>{
    if(Right){
        const first = id[fristId];
        const last = id[fristId+5];
        first.classList.add(WIDTH);
        last.classList.remove(WIDTH);
        ing=false
        if(idNum>fristId+5)
        fristId++
    }
}

left = () =>{
    if(Left){
        const first = id[fristId];
        const last = id[fristId+5];
        last.classList.add(WIDTH);
        first.classList.remove(WIDTH);
        ing=false
        if(1<fristId)
        fristId--
    }
}

mouseMove = (e) =>{
    const mouseX = e.offsetX;
    if(mouseX>=1200){
        Left = false;
        Right = true
    }else if(mouseX<=400){
        Right = false
        Left = true;
    }else{
        Right = false
        Left = false
        console.log(ing)
        ing = false
        body.classList.remove("right")
        body.classList.remove("left")
    }
}

eventManager = () =>{
    if(Right&&!ing){
        ing = true;
        setTimeout(right,500)
        body.classList.remove("left")
        body.classList.add("right");
    }if(Left&&!ing){
        ing = true;
        setTimeout(left,500)
        body.classList.remove("right")
        body.classList.add("left");
    }
}

init = () => {
    for(let i=0;i<=idNum;i++){
        id[i] = document.querySelector(`.id${i}`)
        console.log(id[i]);
    }
    setInterval(eventManager,1)
    body.addEventListener("mousemove",mouseMove)
}

init()