import operation from './operation';

function calculate (input, buttonName) {

    //firstNum
    //secondNum
    //operation

    var number=/^[0-9]+$/
    var sign=/^[+-/x]+$/
    

    if (buttonName.match(number)) {
        //input second number
        if (input.operator) {
            const secondNum = (input.secondNum === null)? buttonName : input.secondNum+buttonName;
            return {
                secondNum,
                input: input.firstNum + input.operator + secondNum,
            }
        }
     
        //input first number
        else {
            const firstNum = (input.firstNum === null)? buttonName : input.firstNum+buttonName;
        return {
            firstNum,
            input: firstNum,
          };
        }
    }


    if (buttonName === "=") {
        return{
            total: operation(input.firstNum, input.secondNum, input.operator),
            history: input.secondNum ? input.history+input.secondNum : input.history.slice(0,-1),
            secondNum: null,
            firstNum: input.total,
        }
    }


    if (buttonName === "AC") {
        return {
            firstNum: null,
            secondNum: null,
            operator: null,
            input: null,
            total: null,
            history: null,
        }
    }

    
    if (buttonName === "+/-") {
        const firstNum = operation(input.firstNum, input.secondNum, buttonName);
        const operator = input.operator ? input.operator : null;
        return {
            firstNum,
            operator,
            input: input.operator ? firstNum+input.operator+input.secondNum : firstNum,
        }
    }


    if (buttonName === "%") {
        const secondNum = operation(input.firstNum, input.secondNum, buttonName);
        return {
            input: input.firstNum + input.operator+input.secondNum+buttonName,
            secondNum,
        }
    }


    if (buttonName === "C") {
        if (input.secondNum) {
            const secondNum = (input.secondNum).slice(0, -1);
            return {
                secondNum,
                input: input.firstNum + input.operator + secondNum,
            }
        }
        if (input.operator) {
            const operator = "";
            return {
                operator,
                input: input.firstNum + operator,
            }
        }
        if (input.firstNum) {
            const firstNum = input.firstNum.slice(0, -1);
            return {
                firstNum,
                input: firstNum,
            }
        }
    }


    if (buttonName === ".") {
        if (input.secondNum) {
            const secondNum = input.secondNum.includes(".") ? input.secondNum : input.secondNum+".";
            return {
                secondNum,
                input: input.firstNum + input.operator + secondNum,
            }
        }
        else {
            const firstNum = input.firstNum.includes(".") ? input.firstNum : input.firstNum+".";
            return {
                firstNum,
                input: firstNum,
            }
        }
    }


    // input sign
    if (buttonName.match(sign)) {
        if (input.operator) {
            const firstNum = operation(input.firstNum, input.secondNum, input.operator);
            const secondNum = null;
            const operator = buttonName;
            const history = input.secondNum ? (input.history+input.secondNum+operator) : (input.history.slice(0, -1)+operator);
            return {
                firstNum,
                secondNum,
                operator,
                input: firstNum + operator,
                history,
            }
        }
        //sign appears first time
            const operator = buttonName;
            const history = input.firstNum + operator;
            return {
                operator,
                input: input.firstNum + operator,
                history,
            }
        
    }
}

export default calculate;




