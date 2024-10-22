
function clearScreen() {
    document.getElementById("result").value = "";
}

function display(value) {
    document.getElementById("result").value += value;
}

function calculate() {
    let expression = document.getElementById("result").value;
    
    if (expression == "") {
        document.getElementById("result").value = "Please enter numbers";
    } else {
        try {
            let result = eval(expression);  
            document.getElementById("result").value = result;
        } catch (error) {
            document.getElementById("result").value = "Error";
        }
    }
}

function squareRoot() {
    let expression = document.getElementById("result").value;
    
    if (expression == "") {
        document.getElementById("result").value = "Please enter a number";
    } else {
        let number = parseFloat(expression);
        if (number >= 0) {
            let result = Math.sqrt(number);
            document.getElementById("result").value = result;
        } else {
            document.getElementById("result").value = "Invalid input";
        }
    }
}
