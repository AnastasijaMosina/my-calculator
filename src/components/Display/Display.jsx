import React from 'react';

class Display extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
        }
    }
    
    render() {
        return (
            <div>
                Here will be display
                <div>{this.props.value}</div>
            </div>
        );
    }
}

export default Display;