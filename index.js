function calc(operation) {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    
    var output;
    switch(operation) {
        case '+':
            output = num1 + num2;
            break;
        case '-':
            output = num1 - num2;
            break;
        case '*':
            output = num1 * num2;
            break;
        case '/':
            output = num1 / num2;
            break;
        default:
            output = 0;
    }
    document.getElementById("output").value = output;

    var newHistory = "<div>" + num1 + " " + operation + " " + num2 + " = " + output + "</div>";
    var history = document.getElementById("history");
    history.innerHTML = newHistory + history.innerHTML;
}