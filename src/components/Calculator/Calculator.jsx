import React from 'react';
import KeyPad from '../KeyPad/KeyPad';
import Display from '../Display/Display';
//import * as math from 'mathjs';
import Result from '../Display/Result';
import calculate from '../../logic/calculate';

class Calculator extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
                        next: '',
                        total: '',
                        operator: '', 
                        result: '',
                        firstNum: '',
                        secondNum: '',

                    };
    }

    lastClick = (buttonName) => {
       // this.setState({ input: this.state.input + buttonName }, () => console.log(this.state));
       this.setState(calculate(this.state, buttonName));
    }

    render() {
        return (            
                <div className="c-calculator">
                    <div className="c-display">
                        <Display value={ this.state.input || "0"} />
                        <Result value={this.state.total } />
                    </div>
                    <KeyPad className="c-keypad" thirdClick={this.lastClick} />
                </div>
        );
    }
}

export default Calculator;