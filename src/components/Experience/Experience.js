import React, {Component} from 'react';

class Experience extends Component {
    render() {
        return (
            <div className="welcome-question experience">
                <h4>How much experience do you have ?</h4>
                <button onClick={this.props.handleClick} className="btn btn-outline-light" value="experience">less than 6 months</button>
                <button onClick={this.props.handleClick} className="btn btn-outline-light" value="experience">from 6 - 12 months</button>
                <button onClick={this.props.handleClick} className="btn btn-outline-light" value="experience">from 1 to 2 years</button>
                <button onClick={this.props.handleClick} className="btn btn-outline-light" value="experience">more than 2 years</button>
            </div>
        );
    }
}

export default Experience;