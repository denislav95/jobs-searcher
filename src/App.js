import React, {Component} from 'react';
import './App.css';
import './utlis/helpers';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Salary from './components/Salary';
import Location from './components/Location';
import Availability from './components/Availability';
import Overview from './components/Overview';

class App extends Component {

    state = {
        currentQuestion: 'Experience',
        experience: null,
        skills: [],
        salary: null,
        location: null,
        availability: null,
        overview: null,
    };

    handleClick = (event) => {
        const value = event.target.value;
        if (value !== 'skills') this.setState({[value]: event.target.innerHTML}, () => console.log(this.state))
        if (value === 'location') this.setState({[value]: event.target.attributes['data-location'].value}, () => console.log(this.state))
        let nextIndex = Object.keys(this.state).indexOf(value) + 1
        let nextQuestion = Object.keys(this.state)[nextIndex].capitalizeFirstLetter()
        this.setState({currentQuestion: nextQuestion})
    }

    renderQuestions = () => {
        return this[`render${this.state.currentQuestion}`]();
    }

    renderExperience() {
        return <Experience handleClick={this.handleClick}/>
    }

    onSelectSkill = (e) => {
        let _skills = this.state.skills;
        _skills.push(e.target.value)
        console.log(_skills)
        this.setState({skills: _skills})
    }

    addSkillsClass = (x) => {
        return this.state.skills.indexOf(x) !== -1 ? 'selected' : ''
    }

    renderSkills() {
        return <Skills
            addSkillsClass={this.addSkillsClass}
            onSelectSkill={this.onSelectSkill}
            handleClick={this.handleClick}
        />
    }

    renderSalary() {
        return <Salary handleClick={this.handleClick}/>
    }

    renderLocation() {
        return <Location handleClick={this.handleClick}/>
    }

    renderAvailability() {
        return <Availability handleClick={this.handleClick}/>
    }

    renderOverview() {
        return <Overview overview={this.state}/>
    }
    render() {
        return (
            <div className="App">
                {this.renderQuestions()}
            </div>
        );
    }
}

export default App;