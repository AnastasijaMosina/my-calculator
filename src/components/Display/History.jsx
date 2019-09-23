import React from 'react';

class History extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
        }
    }
    
    render() {
        return (
            <div>
                Here will be History
                <div>{this.props.value}</div>
            </div>
        );
    }
}

export default History;