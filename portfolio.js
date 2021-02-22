const body = document.querySelector("body");
const flex = document.querySelector(".flex");
const id1 = document.querySelector(".id1");
const id5 = document.querySelector(".id5");
const HIDNE = "hiden"
const WIDTH = "width"

left = () =>{
    id1.classList.add(WIDTH);
    id5.classList.remove(WIDTH);
    console.log("left")
}

right = () =>{
    id5.classList.add(WIDTH);
    id1.classList.remove(WIDTH);
    console.log("right")
}

mouseMove = (e) =>{
    const mouseX = e.offsetX;
    if(mouseX>=1200){
        console.log("오른",mouseX)
        right()

    }else if(mouseX<=400){
        console.log("왼")
        left()
    }else {
        console.log(mouseX)
    }
}

init = () => {
    console.log("a")
    const hiden = flex.lastChild;
    console.log(hiden,flex);
    id5.classList.add(WIDTH);
    body.addEventListener("mousemove",mouseMove)
}

init()