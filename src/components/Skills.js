import React, {Component} from 'react';
import skills from '../languages'

class Skills extends Component {
    render() {
        return (
            <div className="welcome-question skills">
                <h4>What technologies do you know ?</h4>
                {skills.map((x, index) =>
                    <button type="button"
                            className={this.props.addSkillsClass(x) +
                            " btn btn-outline-light"}
                            onClick={this.props.onSelectSkill}
                            value={x}
                            key={index}>{x}
                    </button>)
                }
                <br/>
                <button
                    className="btn btn-primary"
                    value="skills"
                    onClick={this.props.handleClick}>
                    Submit
                </button>
            </div>
        );
    }
}

export default Skills;