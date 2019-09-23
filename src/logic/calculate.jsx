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
            const secondNum = (input.secondNum === null)? buttonName : input.secondNum + buttonName;
            return {
                secondNum,
                input: input.firstNum + input.operator + secondNum,
            }
        }
     
        //input first number
        else {
            const firstNum = (input.firstNum === null)? buttonName : input.firstNum + buttonName;
        return {
            firstNum,
            input: firstNum,
          };
        }
    }


    if (buttonName === "=") {
        const total = operation(input.firstNum, input.secondNum, input.operator);
        return{
            total,
        }
    }


    if (buttonName === "AC") {
        return {
            firstNum: null,
            secondNum: null,
            operator: null,
            input: null,
            total: null,
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
    }


    // input sign
    if (buttonName.match(sign)) {
        if (input.operator) {
            const firstNum = operation(input.firstNum, input.secondNum, input.operator);
            const secondNum = null;
            const operator = buttonName;
            return {
                firstNum,
                secondNum,
                operator,
                input: firstNum + operator,
            }
        }
        //sign appears first time
            const operator = buttonName;
            return {
                operator,
                input: input.firstNum + operator,
            }
        
    }
}

export default calculate;




