import React, {Component} from 'react';

class Experience extends Component {
    render() {
        return (
            <div className="welcome-question experience">
                <p>How much experience do you have ?</p>
                <button onClick={this.props.handleClick} className="btn btn-outline-primary" value="experience">less than 6 months</button>
                <button onClick={this.props.handleClick} className="btn btn-outline-primary" value="experience">from 6 - 12 months</button>
                <button onClick={this.props.handleClick} className="btn btn-outline-primary" value="experience">from 1 to 2 years</button>
                <button onClick={this.props.handleClick} className="btn btn-outline-primary" value="experience">more than 2 years</button>
            </div>
        );
    }
}

export default Experience;