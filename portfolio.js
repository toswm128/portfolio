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

excessRight = () =>{
    const first = id[fristId];
    first.classList.add(WIDTH);
    ing=false
    console.log(fristId)
}

right = () =>{
    if(Right){
        if(idNum>fristId+5){
            const first = id[fristId];
            const last = id[fristId+5];
            first.classList.add(WIDTH);
            last.classList.remove(WIDTH);
            ing=false
            fristId++
            center++
        } else if(idNum>fristId+1){
            excessRight()
            fristId++
        }
    }
}

left = () =>{
    if(Left){
        if(idNum-4<=fristId){
            fristId--
            excessLeft();
        }else if(0<fristId){
            if(1<fristId){
            fristId--}
            const first = id[fristId];
            const last = id[fristId+5];
            last.classList.add(WIDTH);
            first.classList.remove(WIDTH);
            ing=false
            console.log(fristId)
        }
    }
}

excessLeft = () =>{
    const first = id[fristId];
    first.classList.remove(WIDTH);
    ing=false
    console.log("a")
}

//minusLeft= () =>{
//    const last = id[fristId+5];
//    last.classList.add(WIDTH);
//    ing=false
//}

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
        setTimeout(right,300)
        body.classList.remove("left")
        body.classList.add("right");
    }if(Left&&!ing){
        ing = true;
        setTimeout(left,300)
        body.classList.remove("right")
        body.classList.add("left");
    }
}

Select = () =>{
    const  selctCard = id[fristId];
    selctCard.classList.add("select")
}

init = () => {
    for(let i=0;i<=idNum;i++){
        id[i] = document.querySelector(`.id${i}`)
        console.log(id[i]);
    }
    Select()
    setInterval(eventManager,1)
    body.addEventListener("mousemove",mouseMove)
}

init()