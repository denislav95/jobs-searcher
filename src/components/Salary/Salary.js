import React, {Component} from 'react';

class Salary extends Component {
    render() {
        return (
            <div className="welcome-question salary">
                <h4>What is your salary expectation ?</h4>
                <button onClick={this.props.handleClick} className="btn btn-outline-light" value="salary">500$ - 1000$</button>
                <button onClick={this.props.handleClick} className="btn btn-outline-light" value="salary">1000$ - 2000$</button>
                <button onClick={this.props.handleClick} className="btn btn-outline-light" value="salary">2000$ - 5000$</button>
                <button onClick={this.props.handleClick} className="btn btn-outline-light" value="salary">5000$ +</button>
            </div>
        );
    }
}

export default Salary;