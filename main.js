var input = null;
let inputArray = [];
let oprPressed = false;
let first = null;
let second = null;
let opr = null;
Array.from(document.querySelectorAll("#calculator_buttons div")).forEach(element => {
    element.addEventListener("click", function () {
        switch (element.innerHTML) {
            case "=":
                // console.log(first);
                // console.log(second);
                calc(opr, first, second);
                break;
            case "+":
                if (oprPressed && element.innerHTML == opr) {
                    first = calc(opr, first, second);
                    console.log(first);
                    console.log(second);
                    second = null;
                    document.querySelector("h1").textContent = first;
                    document.querySelector("h1").textContent += "+";
                    opr = element.innerHTML;
                    oprPressed = true;
                    
                } else {
                    // console.log("here");
                    first = document.querySelector("h1").innerHTML;
                    document.querySelector("h1").textContent += "+";
                    oprPressed = true;
                    opr = element.innerHTML;
                }

                break;
            case "-":
                if (oprPressed) {
                    first = calc(opr, first, second);
                    console.log(first);
                    console.log(second);
                    second = null;
                    document.querySelector("h1").textContent = first;
                    document.querySelector("h1").textContent += "-";
                    opr = element.innerHTML;
                    oprPressed = true;
                    
                } else {
                    // console.log("here");
                    first = document.querySelector("h1").innerHTML;
                    document.querySelector("h1").textContent += "-";
                    oprPressed = true;
                    opr = element.innerHTML;
                }
                break;
            case "/":
                if (oprPressed) {
                    first = calc(opr, first, second);
                    console.log(first);
                    console.log(second);
                    second = null;
                    document.querySelector("h1").textContent = first;
                    document.querySelector("h1").textContent += "/";
                    opr = element.innerHTML;
                    oprPressed = true;
                    
                } else {
                    // console.log("here");
                    first = document.querySelector("h1").innerHTML;
                    document.querySelector("h1").textContent += "/";
                    oprPressed = true;
                    opr = element.innerHTML;
                }
                break;
            case "*":
                if (oprPressed) {
                    first = calc(opr, first, second);
                    console.log(first);
                    console.log(second);
                    second = null;
                    document.querySelector("h1").textContent = first;
                    document.querySelector("h1").textContent += "*";
                    opr = element.innerHTML;
                    oprPressed = true;
                    
                } else {
                    // console.log("here");
                    first = document.querySelector("h1").innerHTML;
                    document.querySelector("h1").textContent += "*";
                    oprPressed = true;
                    opr = element.innerHTML;
                }
                break;
            default:
                if (!oprPressed) {
                    document.querySelector("h1").textContent += element.innerHTML;
                } else {
                    // oprPressed = false;
                    document.querySelector("h1").textContent += element.innerHTML;
                    if (second === null) {
                        second = element.innerHTML;
                        // oprPressed = false;

                    } else if (second !== null) {
                        second += element.innerHTML;

                    }
                }
                break;
        }

    }, false);
});

function calc(opr, first, second) {
    
    switch (opr) {
        case "+":
            // console.log(first + second);
            first = Number(first) + Number(second);
            // console.log(first);
            break;
        case "-":
            first = Number(first) + Number(second);
            break;
        case "/":
            first = Number(first) + Number(second);
            break;
        case "*":
            first = Number(first) + Number(second);
            break;

        default:
            console.log("in default");
            // console.log(document.querySelector("h1").textContent);
            break;
    }
    document.querySelector("h1").textContent = Number(first);
    return Number(first);
    // first = null;
    // second = null;
    // opr = null;

}

document.querySelector("button").addEventListener("click", function () {
    first = null;
    second = null;
    opr = null;
    document.querySelector("h1").textContent = "";
});