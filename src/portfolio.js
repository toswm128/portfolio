
const link = document.location.href

const body = document.querySelector(".body");
const flex = document.querySelector(".flex");
// 307 382 511 614 767 877 1023 1228 
//1395 1535 1705 1919 2046 2302 3070
//4605 6140
// 1200 400 0.75


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
        }
    }
}

excessLeft = () =>{
    const first = id[fristId];
    first.classList.remove(WIDTH);
    ing=false
}

//minusLeft= () =>{
//    const last = id[fristId+5];
//    last.classList.add(WIDTH);
//    ing=false
//}

mouseMove = (e) =>{
    const mouseX = e.offsetX;
    if(mouseX>=rightX){
        Left = false;
        Right = true
    }else if(mouseX<=leftX){
        Right = false
        Left = true;
    }else{
        Right = false
        Left = false
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
            console.log("aa")
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
    }
}

selectLeft = () =>{
    if (Left){
        const  selctCard = id[fristId-1];
        const cancelCard = id[fristId];
        selctCard.classList.add("select")
        cancelCard.classList.remove("select")
    }

}

click=()=>{
    Click = true;
    Right = false;
    Left = false;
    id[fristId].classList.add("pick")
    flex.classList.add("pick")
    setTimeout(()=>{flex.classList.add("margin")},600)
    setTimeout(()=>{
    history.pushState({}, "page 2", `${link}/${fristId}`);},650)
    console.log("a");
    for(let i=1;i<=4;i++){
        id[fristId+i].classList.add("width")

    }
}

init = () => {
    
    for(let i=0;i<=idNum;i++){
        id[i] = document.querySelector(`.id${i}`)
    }
    setInterval(eventManager,1)
    body.addEventListener("pointermove",mouseMove)
    body.addEventListener("mouseup",click)
}

init()