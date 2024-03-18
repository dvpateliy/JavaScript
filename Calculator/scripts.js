const handleInput = (character) => {
    const calculatorDisplay = document.getElementById("calculator-display");
    switch (character) {
        case "0":
            if (calculatorDisplay.value !== 0) {
                calculatorDisplay.value += character;
            }
            break;

        case "/": case "*": case "+": case "-": case ".":
            const expressionLength = calculatorDisplay.value.length;
            if (expressionLength > 0) {
                const lastCharacter = calculatorDisplay.value.slice(expressionLength - 1);
                const isMatching = (lastCharacter === "/" || lastCharacter === "*" || lastCharacter === "+" || lastCharacter === "-" || lastCharacter === ".");
                if (isMatching) {
                    calculatorDisplay.value = calculatorDisplay.value.slice(0, expressionLength - 1) + character;
                } else {
                    calculatorDisplay.value += character;
                }
            }
            break;

        default:
            calculatorDisplay.value += character;
            break;
    }
}

const handleClear = () => {
    const calculatorDisplay = document.getElementById("calculator-display");
    calculatorDisplay.value = "";
}

const handleBackSpace = () => {
    const calculatorDisplay = document.getElementById("calculator-display");
    const expressionLength = calculatorDisplay.value.length;
    calculatorDisplay.value = calculatorDisplay.value.slice(0, expressionLength - 1);
}

const handleEvaluate = () => {
    const calculatorDisplay = document.getElementById("calculator-display");
    const expressionLength = calculatorDisplay.value.length;
    if (expressionLength > 0) {
        const lastCharacter = calculatorDisplay.value.slice(expressionLength - 1);
        const isMatching = (lastCharacter === "/" || lastCharacter === "*" || lastCharacter === "+" || lastCharacter === "-" || lastCharacter === ".")
        if (!isMatching) {
            calculatorDisplay.value = eval(calculatorDisplay.value);
        }
    }
}