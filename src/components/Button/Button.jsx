import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {

    static propTypes = {
        secondClick: PropTypes.func.isRequired,
        name: PropTypes.string.isRequired
    }

    firstClick = () => {
        this.props.secondClick(this.props.name);
    }

    render(props) {
        return (
            <button 
                className="button"
                onClick={this.firstClick}    
            >
                  {this.props.name}
            </button>
        )
    }
}

// function Button (props) {
//     return (
//         <button 
//             className="button"
//             onClick={props.onClick}>
//                 {props.name}
//             </button>
//     )
// }

export default Button;