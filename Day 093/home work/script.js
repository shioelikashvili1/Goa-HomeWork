let gela = setInterval(move, 18)
let position = 0
let box =  document.getElementsByClassName("box")[0]

function move(){
    if(position>=300){
        clearInterval(gela)
        box.style.left = 0
    }

    else{
        position++
        box.style.left = position + "px"
    }
}