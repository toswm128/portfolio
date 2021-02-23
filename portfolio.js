const body = document.querySelector(".body");
const flex = document.querySelector(".flex");
const id1 = document.querySelector(".id1");
const id5 = document.querySelector(".id5");
const id = []
const idNum = 6;
let fristId = 1;
const HIDNE = "hiden"
const WIDTH = "width"
let Left = false;
let Right = false;

right = () =>{
    if(Right){
        Right = false
        const first = id[fristId];
        const last = id[fristId+4];
        first.classList.add(WIDTH);
        last.classList.remove(WIDTH);
        if(idNum>fristId+4)
        fristId++
    }
}

left = () =>{
    if(Left){
        Left = false;
        const first = id[fristId];
        const last = id[fristId+4];
        console.log(first,last);
        last.classList.add(WIDTH);
        first.classList.remove(WIDTH);
        if(1<fristId)
        fristId--
    }
}

mouseMove = (e) =>{
    const mouseX = e.offsetX;
    if(mouseX>=1200){
        Right = true
        setTimeout(right,1000)
        
    }else if(mouseX<=400){
        Left = true;
        setTimeout(left,1000)
    }
}

init = () => {
    for(let i=0;i<=idNum;i++){
        id[i] = document.querySelector(`.id${i}`)
        console.log(id[i]);
    }
    body.addEventListener("mousemove",mouseMove)
}

init()