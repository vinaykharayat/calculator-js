var input = null;
let inputArray = [];
let oprPressed = false;
let first;
let second;
let opr;
Array.from(document.querySelectorAll("#calculator_buttons div")).forEach(element => {
    element.addEventListener("click", function () {
        switch (element.innerHTML) {
            case "=":
                calc(opr, first, second);
            case "+":
                first =document.querySelector("h1").innerHTML;
                document.querySelector("h1").textContent+= "+";
                oprPressed = true;
                opr = element.innerHTML;
                console.log(opr);
                break;
            case "-":
                first =document.querySelector("h1").innerHTML;
                document.querySelector("h1").textContent+= "-";
                oprPressed = true;
                opr = element.innerHTML;
                break;
            case "/":
                first =document.querySelector("h1").innerHTML;
                document.querySelector("h1").textContent+= "/";
                oprPressed = true;
                opr = element.innerHTML;
                break;
            case "*":
                first =document.querySelector("h1").innerHTML;
                document.querySelector("h1").textContent+= "*";
                oprPressed = true;
                opr = element.innerHTML;
                break;
            default:
                if(!oprPressed){
                    document.querySelector("h1").textContent+=element.innerHTML;
                }else{
                    document.querySelector("h1").textContent+= element.innerHTML;
                    second += element.innerHTML;
                }
                break;
        }

    }, false);
});

function calc(opr, first, second) {
    console.log(second.slice(9, second.length));
    console.log(parseInt(first) + parseInt(second.slice(9, second.length)));
    switch (opr) {
        case "+":
            document.querySelector("h1").textContent = parseInt(first) + parseInt(second.slice(9, second.length));
            document.querySelector("h1").textContent.slice(document.querySelector("h1").textContent.length-1, document.querySelector("h1").textContent.length);
            break;
        case "-":
            document.querySelector("h1").textContent = parseInt(first) - parseInt(second.slice(9, second.length));
            break;
        case "/":
            document.querySelector("h1").textContent = parseInt(first) / parseInt(second.slice(9, second.length));
            break;
        case "*":
            document.querySelector("h1").textContent = parseInt(first) * parseInt(second.slice(9, second.length));
            break;
    }
}

function showResult() {

}

document.querySelector("button").addEventListener("click",function() {
    inputArray = [];
    document.querySelector("h1").textContent = "";
});