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
let Click = false

excessRight = () =>{
    const first = id[fristId];
    first.classList.add(WIDTH);
    ing=false
}

right = () =>{
    if(Right){
        if(idNum>fristId+4){
            const first = id[fristId];
            const last = id[fristId+5];
            first.classList.add(WIDTH);
            last.classList.remove(WIDTH);
            ing=false
            selectRight()
            fristId++
        } else if(idNum>fristId){
            excessRight()
            selectRight()
            fristId++
        }
    }
}

left = () =>{
    if(Left){
        if(idNum-3<=fristId){
            selectLeft()
            fristId--
            excessLeft();
        }else if(1<fristId){
            selectLeft()
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
    if(!Click){
        if(Right&&!ing){
            ing = true;
            setTimeout(right,400)
            body.classList.remove("left")
            body.classList.add("right");
        }if(Left&&!ing){
            ing = true;
            setTimeout(left,400)
            body.classList.remove("right")
            body.classList.add("left");
        }
    }
}

selectRight = () =>{
    if(Right){
        const  selctCard = id[fristId+1];
        const cancelCard = id[fristId];
        selctCard.classList.add("select")
        cancelCard.classList.remove("select")
        console.log(Right,Left)
    }
}

selectLeft = () =>{
    if (Left){
        const  selctCard = id[fristId-1];
        const cancelCard = id[fristId];
        selctCard.classList.add("select")
        cancelCard.classList.remove("select")
        console.log(Right,Left)
    }

}

click=()=>{
    Click = true;
    Right = false;
    Left = false;
    id[fristId].classList.add("pick")
    flex.classList.add("pick")
    setTimeout(()=>{flex.classList.add("margin")},600)
    for(let i=1;i<=4;i++){
        id[fristId+i].classList.add("width")

    }
}

init = () => {
    location.href;
    for(let i=0;i<=idNum;i++){
        id[i] = document.querySelector(`.id${i}`)
        console.log(id[i]);
    }
    setInterval(eventManager,1)
    body.addEventListener("pointermove",mouseMove)
    body.addEventListener("mouseup",click)
}

init()