let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));
console.log(buttons);
buttons.map((button) => {
    button.addEventListener('click', function (e) {
        // console.log(e.target.innerText);
        switch (e.target.innerText) {
            case "Enter":
                if (display.innerText == "") {
                    alert("value is empty");
                }
                else {
                    try {
                        display.innerText = eval(display.innerText);
                    } catch {
                        display.innerText = "Error";

                    }

                }

                break;
            case "Clear":
                display.innerText = "";
                break;
            case "Backspace":
                display.innerText = display.innerText.substring(0,
                    display.innerText.length - 1);
                break;
            case "sin":
                if (display.innerText == "") {
                    alert("value empty")
                }
                else display.innerText = Math.sin(display.innerText);
                break;
            case "cos":
                if (display.innerText == "") {
                    alert("value empty")
                }
                else display.innerText = Math.cos(display.innerText);
                break;
            case "tan":
                if (display.innerText == "") {
                    alert("value empty")
                }
                else display.innerText = Math.tan(display.innerText);
                break;
            case "ln":
                if (display.innerText == "") {
                    alert("value empty")
                }
                else display.innerText = Math.log(display.innerText);
                break;
            case "sqrt":
                if (display.innerText == "") {
                    alert("value empty")
                }
                else display.innerText = Math.sqrt(display.innerText);
                break;
            case "square":

                function square(num) {
                    display.innerText = eval(num) * eval(num);

                };
                if (display.innerText == "") {
                    alert("value empty")
                }
                else square(display.innerText);
                break;
            case "exp":
                if (display.innerText == "") {
                    alert("value empty")
                }
                else display.innerText = Math.exp(display.innerText);
                break;
            case "+/-":
                if (display.innerText.charAt(0) == "-") {
                    display.innerText = display.innerText.substring(1, display.innerText.length);
                }
                else display.innerText = "-" + display.innerText;
                break;
            default:
                display.innerText += e.target.innerText;

        }



    });
});