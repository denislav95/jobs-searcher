import React, {Component} from 'react';

class Availability extends Component {
    render() {
        return (
            <div className="welcome-question availability">
                <h4>What is your availability ?</h4>
                <button onClick={this.props.handleClick} className="btn btn-outline-light" value="availability">Full time</button>
                <button onClick={this.props.handleClick} className="btn btn-outline-light" value="availability">Part time</button>
            </div>
        );
    }
}

export default Availability;