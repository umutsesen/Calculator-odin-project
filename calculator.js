function add(x, y) {
    return +x + +y

}

function substract(x, y) {
    return x - y

}

function multiply(x, y) {
    return x * y

}

function divide(x, y) {
    return +x / +y

}


result = ""
op = ""
counter = 0
pointcounter = 0

document.addEventListener('click', function(event) {
    

    let x = document.querySelector('#text');
    if (event.target.className == 'number') {
        let point = document.querySelector('#onlyonce');
        if (pointcounter == 1) {
            point.disabled = "true"
        }
        else x.value += event.target.textContent;
        if (event.target.id == "onlyonce") {
            pointcounter++
        }

    }
    if (event.target.className == 'variable') {
        counter++;
        if (counter == 2) {
            console.log(result)
            // after first two numbers sum result then
            // for every new operator click sum result
            if (op == '+') result = add(result, x.value)
            if (op == '-') result = substract(result, x.value)
            if (op == '*') result = multiply(result, x.value)
            if (x.value !== "0" ) { 
                if (op == '/') result = divide(result, x.value)
            }
            else {
                alert("You cannot divide by 0 ")
                x.value = ""
                result = ""
                counter = 0
            }
            
            counter = 1;
            op = event.target.textContent
            x.value = ""
        } else {
            op = event.target.textContent
            result += +x.value;
            x.value = ""
        }
    }

    if (event.target.textContent == '=') {

        if (op == '+') result = add(result, x.value)
        if (op == '-') result = substract(result, x.value)
        if (op == '*') result = multiply(result, x.value)
        if (x.value !== "0") {
            if (op == '/') result = divide(result, x.value)
        }
        else {
            alert("You cannot divide by 0 ")
            x.value = ""
            result = ""
            counter = 0}
        
        x.value = Math.round((result + Number.EPSILON) * 100) / 100
        result = ""



    }
    if (event.target.textContent == 'Clear') {
        x.value = ""
        result = ""
        counter = 0
        pointcounter = 0
    }

})

document.addEventListener('click', function(event) {
    if (event.target.tagName == "BUTTON") {
        event.target.style.backgroundColor = "#e2e2e2"
        setTimeout(function () {
            event.target.style.backgroundColor = "white"

        }, 2000)
        
        
    }
})

const keys = {
    shift: false,
};

document.addEventListener("keyup", CallKeyboard)
document.addEventListener("keydown", () => {
    if (event.keyCode == 16) {
        keys["shift"] = true
    }
    if (event.keyCode == 55 && keys["shift"] == true) {
        event.preventDefault()
        document.getElementById("/").click()
    }

})

function CallKeyboard(event) {
    if (event.keyCode == 16) {
        keys["shift"] = false
    }
    if (event.keyCode == "8") {
        event.preventDefault()
        let x = document.querySelector('#text');
        let string = x.value
        string = string.slice(0, -1)
        x.value = string
    }
    if (event.keyCode == "190") {
        event.preventDefault()
        document.getElementById("onlyonce").click()
    }
    if (event.keyCode == "13") {
        event.preventDefault()
        document.getElementById("=").click()
    }
    if (event.keyCode == "223") {
        event.preventDefault()
        document.getElementById("*").click()
    }
    if (event.keyCode == "107") {
        event.preventDefault()
        document.getElementById("+").click()
    }
    if (event.keyCode == "189") {
        event.preventDefault()
        document.getElementById("-").click()
    }
    if (event.keyCode == "48") {
        event.preventDefault()
        document.getElementById("0").click()
    }
    if (event.keyCode == "49") {
        event.preventDefault()
        document.getElementById("1").click()
    }
    if (event.keyCode == "50") {
        event.preventDefault()
        document.getElementById("2").click()
    }
    if (event.keyCode == "51") {
        event.preventDefault()
        document.getElementById("3").click()
    }
    if (event.keyCode == "52") {
        event.preventDefault()
        document.getElementById("4").click()
    }
    if (event.keyCode == "53") {
        event.preventDefault()
        document.getElementById("5").click()
    }
    if (event.keyCode == "54") {
        event.preventDefault()
        document.getElementById("6").click()
    }
    if (event.keyCode == "55" && keys["shift"] == false) {
        event.preventDefault()
        document.getElementById("7").click()
    }
    if (event.keyCode == "56") {
        event.preventDefault()
        document.getElementById("8").click()
    }
    if (event.keyCode == "57") {
        event.preventDefault()
        document.getElementById("9").click()
    }
}