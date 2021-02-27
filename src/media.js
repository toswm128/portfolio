

let rightX;
let leftX;

MediaQuery = () =>{
    if(matchMedia("screen and (max-width: 308px)").matches){
        rightX = 307*0.75;
        leftX = 307-rightX
        console.log(rightX+leftX)
    }else if(matchMedia("screen and (max-width: 384px)").matches){
        rightX = 382*0.75;
        leftX = 382-rightX
        console.log(rightX+leftX)
    } else if(matchMedia("screen and (max-width: 512px)").matches){
        rightX = 511*0.75;
        leftX = 511-rightX
        console.log(rightX+leftX)
    }else if(matchMedia("screen and (max-width: 615px)").matches){
        rightX = 614*0.75;
        leftX = 614-rightX
        console.log(rightX+leftX)
    }else if(matchMedia("screen and (max-width: 768px)").matches){
        rightX = 767*0.75;
        leftX = 767-rightX
        console.log(rightX+leftX)
    } else if(matchMedia("screen and (max-width: 878px)").matches){
        rightX = 877*0.75;
        leftX = 877-rightX
        console.log(rightX+leftX)
    }else if(matchMedia("screen and (max-width: 1024px)").matches){
        rightX = 1023*0.75;
        leftX = 1023-rightX
        console.log(rightX+leftX)
    }else if(matchMedia("screen and (max-width: 1229px)").matches){
        rightX = 1228*0.75;
        leftX = 1228-rightX
        console.log(rightX+leftX)
    } else if(matchMedia("screen and (max-width: 1396px)").matches){
        rightX = 1395*0.75;
        leftX = 1395-rightX
        console.log(rightX+leftX)
    }else if(matchMedia("screen and (max-width: 1536px)").matches){
        rightX = 1535*0.75;
        leftX = 1535-rightX
        console.log(rightX+leftX)
    }else if(matchMedia("screen and (max-width: 1706px)").matches){
        rightX = 1705*0.75;
        leftX = 1705-rightX
        console.log(rightX+leftX)
    } else if(matchMedia("screen and (max-width: 1920px)").matches){
        rightX = 1919*0.75;
        leftX = 1919-rightX
        console.log(rightX+leftX)
    }else if(matchMedia("screen and (max-width: 2047px)").matches){
        rightX = 2046*0.75;
        leftX = 2046-rightX
        console.log(rightX+leftX)
    }else if(matchMedia("screen and (max-width: 2303px)").matches){
        rightX = 2302*0.75;
        leftX = 2302-rightX
        console.log(rightX+leftX)
    }else if(matchMedia("screen and (max-width: 3071px)").matches){
        rightX = 3070*0.75;
        leftX = 3070-rightX
        console.log(rightX+leftX)
    } else if(matchMedia("screen and (max-width: 4606px)").matches){
        rightX = 4605*0.75;
        leftX = 4605-rightX
        console.log(rightX+leftX)
    }else if(matchMedia("screen and (max-width: 6141px)").matches){
        rightX = 6140*0.75;
        leftX = 6140-rightX
        console.log(rightX+leftX)
    }

}
MediaQuery();
body.addEventListener("mousewheel",MediaQuery)

