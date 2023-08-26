const childBlock = document.querySelector('.child_block')

let positionX = 0
let positionY = 0 

const moveBlock = () => {
    if ( positionX < 448 && positionY === 0) {
        positionX++
        childBlock.style.left = `${positionX}px`
        setTimeout(moveBlock,1)

    }else if (positionX >= 448 && positionY< 448){
        positionY++
        childBlock.style.top =`${positionY}px`
        setTimeout(moveBlock,1)
    }
    else if(positionX <= positionY && positionX >= 0){
        positionX--
        childBlock.style.left = `${positionX}px`
        setTimeout(moveBlock,1)
    }else if(positionY != positionX){
        positionY--
        childBlock.style.top = `${positionY}px`
        setTimeout(moveBlock,1)
    }
    
}
moveBlock()

// STOP WATCH 

const digits = document.querySelector('#minutes')
const value = parseInt(digits.textContent);

const startButton = document.querySelector('#start')
const stopButton = document.querySelector('#stop')
const resetButton = document.querySelector('#reset')
const resumeButton = document.querySelector('#resume')



let times = 0
let interval;
let hasStarted = false

resetButton.onclick = function (){
    times = 0
    digits.innerHTML = times
    if (interval) clearInterval(interval)
    interval = undefined
    hasStarted = false
}

startButton.onclick = function (){

    if(!interval && !hasStarted){
        interval = setInterval(function () {
            if (times < 999){
                times++
                digits.innerHTML = times
            }
        }, 1000)

        hasStarted = true
    }
}


stopButton.onclick = function(){
    if(interval && hasStarted){
        clearInterval(interval)
        interval = undefined
    }
}

resumeButton.onclick = function (){
    if(!interval && hasStarted){
        interval = setInterval(function () {
            if (times < 999){
                times++
                digits.innerHTML = times
            }
        }, 1000)
    }
}