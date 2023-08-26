const modal = document.querySelector(".modal")
const openModalButton = document.querySelector("#btn-get")
const exitModalButton = document.querySelector(".modal_close")

const openModalPlace = document.documentElement.scrollHeight - document.documentElement.clientHeight
let modalHasShowed = false


// Open modal logic
const openModal = () => {
    modal.style.display = "block"
    document.body.style.overflow = "hidden"
}
const closeModal = () => {
    modal.style.display = "none"
    document.body.style.overflow = ""
}

openModalButton.onclick = openModal
exitModalButton.onclick = closeModal

modal.onclick = (event) => {
    if (event.target === modal) {
        closeModal()
    }
}


// Auto open modal logic
let hasStartedWaiting;
let delayTimer = 10000
let hasOpened = false

function clearInter() {
    clearInterval(hasStartedWaiting)
    hasStartedWaiting = undefined
}

function hasWaited() {
    hasOpened = true
    if (modal.style.display !== "block") {
        openModal()
    }
    clearInter()
}

function startTimer() {
    if (!hasOpened) {
        clearInter()
        hasStartedWaiting = setInterval(hasWaited, delayTimer)
    }
}

startTimer()


// Scroll logic
window.onscroll = function () {
    // Open model when time out after n time
    startTimer()

    // Open model when scrolled till end
    if (window.scrollY > openModalPlace && !modalHasShowed) {
        openModal()
        modalHasShowed = true
    }
}

// Checker gmail

// const checkGmail = document.querySelector("#gmail_button")
// const inputGmail = document.querySelector("#gmail_input")
// const messageField = document.querySelector("#messageField")
//
// checkGmail.onclick = function () {
//     const value = inputGmail.value
//     const emailRegex = new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
//
//
//     if (!emailRegex.test(value) && !!value) {
//         inputGmail.value = ""
//         messageField.innerHTML = "Error email"
//     } else {
//         messageField.innerHTML = "This email available to use"
//     }
// }




