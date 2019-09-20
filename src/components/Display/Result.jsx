import React from 'react';

class Result extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "Here will be result",
        }
    }
    
    render() {
        return (
            <div>
                <div>{this.props.value}</div>
            </div>
        );
    }
}

export default Result;