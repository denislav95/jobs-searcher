import React, {Component} from 'react';

class Availability extends Component {
    render() {
        return (
            <div className="welcome-question availability">
                <p>What is your availability ?</p>
                <button onClick={this.props.handleClick} className="btn btn-outline-primary" value="availability">Full time</button>
                <button onClick={this.props.handleClick} className="btn btn-outline-primary" value="availability">Part time</button>
            </div>
        );
    }
}

export default Availability;