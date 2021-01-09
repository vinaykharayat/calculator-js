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
                calc(opr, first, second);
                break;
            case "+":
                first = document.querySelector("h1").innerHTML;
                document.querySelector("h1").textContent += "+";
                oprPressed = true;
                opr = element.innerHTML;
                break;
            case "-":
                first = document.querySelector("h1").innerHTML;
                document.querySelector("h1").textContent += "-";
                oprPressed = true;
                opr = element.innerHTML;
                break;
            case "/":
                first = document.querySelector("h1").innerHTML;
                document.querySelector("h1").textContent += "/";
                oprPressed = true;
                opr = element.innerHTML;
                break;
            case "*":
                first = document.querySelector("h1").innerHTML;
                document.querySelector("h1").textContent += "*";
                oprPressed = true;
                opr = element.innerHTML;
                break;
            default:
                if (!oprPressed) {
                    document.querySelector("h1").textContent += element.innerHTML;
                } else {
                    document.querySelector("h1").textContent += element.innerHTML;
                    if (second !== null) {
                        second += element.innerHTML;
                    } else {
                        second = element.innerHTML;
                    }
                }
                break;
        }

    }, false);
});

function calc(opr, first, second) {
    switch (opr) {
        case "+":
            document.querySelector("h1").textContent = parseInt(first) + parseInt(second);
            break;
        case "-":
            document.querySelector("h1").textContent = parseInt(first) - parseInt(second);
            break;
        case "/":
            document.querySelector("h1").textContent = parseInt(first) / parseInt(second);
            break;
        case "*":
            document.querySelector("h1").textContent = parseInt(first) * parseInt(second);
            break;

        default:
            console.log(first);
            console.log(document.querySelector("h1").textContent);
            break;
    }
}

document.querySelector("button").addEventListener("click", function () {
    inputArray = [];
    document.querySelector("h1").textContent = "";
});