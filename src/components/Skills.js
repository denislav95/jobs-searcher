import React, {Component} from 'react';
import skills from '../languages'

class Skills extends Component {
    render() {
        return (
            <div className="welcome-question skills">
                <p>What technologies do you know ?</p>
                {skills.map((x, index) =>
                    <button type="button"
                            className={this.props.addSkillsClass(x) +
                            " btn btn-outline-primary"}
                            onClick={this.props.onSelectSkill}
                            value={x}
                            key={index}>{x}
                    </button>)
                }
                <br/>
                <button
                    className="btn btn-success"
                    value="skills"
                    onClick={this.props.handleClick}>
                    Submit
                </button>
            </div>
        );
    }
}

export default Skills;