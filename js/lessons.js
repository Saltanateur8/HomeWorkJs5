//CONVERTER

const innerConverter = document.querySelector(".inner_converter")
let BASE_CONVERTOR = ""

function createInput(code = "", title = "", onInput = () => {
}) {
    const container = document.createElement("div")
    const label = document.createElement("label")
    const input = document.createElement("input")

    container.className = code
    input.type = "number"
    input.id = code
    input.addEventListener("input", onInput)

    label.htmlFor = code
    label.textContent = title

    container.appendChild(label)
    container.appendChild(input)

    return container
}

function updateValues(exchangeData, inputCode, inputValue) {
    exchangeData.forEach(rate => {
        if (rate.code !== inputCode) {
            const inputElement = document.getElementById(rate.code)

            if (!isNaN(inputValue)){
                const convertedValue = inputValue * (exchangeData.find(r => r.code === inputCode).amount / rate.amount)
                inputElement.value = convertedValue.toFixed(2)
            }else {
                inputElement.value = ""
            }
        }
    })
}

const fn_requestsCallBack = (event) => {
    const raw = event.target.response
    const response = JSON.parse(raw)
    BASE_CONVERTOR = response.base
    const list = response.rates
    list.forEach(rate => {
        innerConverter.appendChild(createInput(rate.code, rate.title, event => {
            const inputCode = event.target.id
            const inputValue = parseFloat(event.target.value)
            updateValues(list, inputCode, inputValue)
        }))
    })
}

function main() {
    const req = new XMLHttpRequest()
    req.onload = fn_requestsCallBack
    req.open("GET", "../data/converter.json")
    req.send()
}

window.addEventListener("load", main)