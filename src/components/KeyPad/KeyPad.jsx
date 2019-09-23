import React from 'react';
import PropTypes from 'prop-types'
import Button from '../Button/Button';

class KeyPad extends React.Component {

    static propTypes = {
        thirdClick: PropTypes.func.isRequired
    }

    handleClick = (buttonName) => {
        this.props.thirdClick(buttonName);
    }

    resultClick = () => {
        this.props.handleEqual(); /// Do I need it?
    }

    render() {
        return (
            <div>
                <div className="keypad">
                        <Button name="AC" secondClick={this.handleClick} />
                        <Button name="+/-" secondClick={this.handleClick} />
                        <Button name="%" secondClick={this.handleClick} />
                        <Button name="C" secondClick={this.handleClick} /> <br/>

                        <Button name="7" secondClick={this.handleClick} />
                        <Button name="8" secondClick={this.handleClick} />
                        <Button name="9" secondClick={this.handleClick} />
                        <Button className="c-sign" name="/" secondClick={this.handleClick} /> <br/>

                        <Button name="4" secondClick={this.handleClick} />
                        <Button name="5" secondClick={this.handleClick} />
                        <Button name="6" secondClick={this.handleClick} />
                        <Button className="c-sign" name="x" secondClick={this.handleClick} /> <br/>

                        <Button name="1" secondClick={this.handleClick} />
                        <Button name="2" secondClick={this.handleClick} />
                        <Button name="3" secondClick={this.handleClick} />
                        <Button className="c-sign" name="-" secondClick={this.handleClick} /> <br/>

                        <Button name="." secondClick={this.handleClick} />
                        <Button name="0" secondClick={this.handleClick} />
                        <Button name="=" secondClick={this.handleClick} />
                        <Button className="c-sign" name="+" secondClick={this.handleClick} /> <br/>
                </div>
            </div> 
        );
    }
}

export default KeyPad;