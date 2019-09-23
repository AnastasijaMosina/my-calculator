import React from 'react';
import KeyPad from '../KeyPad/KeyPad';
import Display from '../Display/Display';
import History from '../Display/History';
import calculate from '../../logic/calculate';

class Calculator extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
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
                        <History value={this.state.history} />
                        <Display value={ this.state.total || this.state.input || "0"} />
                    </div>
                    <KeyPad className="c-keypad" thirdClick={this.lastClick} />
                </div>
        );
    }
}

export default Calculator;