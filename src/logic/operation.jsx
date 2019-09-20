function operation(firstNum, secondNum, operator) {
    
    const one = Number(firstNum);
    const two = Number(secondNum);

    if (operator === "+") {
        return (one+two).toString();
    }

    if (operator === "-") {
        return (one-two).toString();
    }

    if (operator === "x") {
        return (one*two).toString();
    }

    if (operator === "/") {
        return (one/two).toString();
    }

    if (operator === "+/-") {
        return (one*(-1)).toString();
    }
}

export default operation;