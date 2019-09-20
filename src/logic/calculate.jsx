import operation from './operation';

function calculate (input, buttonName) {

    //firstNum
    //secondNum
    //operation

    var number=/^[0-9]+$/
    var sign=/^[+-/x]+$/
    

    if (buttonName.match(number)) {
        //vvodim vtotoe cislo
        if (input.operator) {
            const secondNum = (input.secondNum === null)? buttonName : input.secondNum + buttonName;
            return {
                secondNum,
                input: input.firstNum + input.operator + secondNum,
            }
        }
     
        //vvodim pervoe cislo
        else {
            const firstNum = (input.firstNum === null)? buttonName : input.firstNum + buttonName;
        return {
            firstNum,
            input: firstNum,
          };
        }
    }


    //vvodim znak
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
        //znak pojavljaetsja vpervie
        //const operator = buttonName;
        
            const operator = buttonName;
            return {
                operator,
                input: input.firstNum + operator,
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

    
    // if (buttonName === "+/-") {
    //     const firstNum = operation(input.firstNum, input.secondNum, buttonName);
    //     return {
    //         firstNum,
    //         input: firstNum,
    //     }
    // }


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
}
export default calculate;





// // eto rabotaet, no eto ne mojo


//    // vvodim cislo
//     if (buttonName.match(number)) {
//         //vvodim vtotoe cislo esli estj operacija 
//         if (input.operation) {
//             if (input.next) {
//                 return {next: input.next + buttonName};
//             }
//             return {next: buttonName};
//         }
//         //vvodim pervoe cislo
//         if (input.next) {
//             const next = input.next === "0" ? buttonName : input.next + buttonName;
//             return {
//                 next,
//             };
//         }
//         return {
//             next: buttonName,
//         };
//     }

//     //press operation after first num
//     if (buttonName.match(sign))
//     return {
//         total: input.next,
//         next: null,
//         operation: buttonName
//     }
    
//     if (buttonName === "=") {
//         return {
//             total: operation(input.total, input.next, input.operation),
//         }
//     }

    

// }


//export default calculate