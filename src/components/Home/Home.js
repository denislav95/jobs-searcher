import React, {Component} from 'react';
import Skills from '../Skills/Skills';
import Experience from '../Experience/Experience';
import Salary from '../Salary/Salary';
import Location from '../Location/Location';
import Availability from '../Availability/Availability';
import Overview from '../Overview/Overview';
import Register from '../Register/Register';

import '../../utlis/helpers';

import './Home.css'

class Home extends Component {
    state = {
        isEditing: false,
        currentQuestion: 'Experience',
        experience: null,
        skills: [],
        salary: null,
        location: null,
        availability: null,
        overview: null,
        register: null
    };

    handleClick = (event) => {
        const value = event.target.value;
        if (value !== 'skills') this.setState({[value]: event.target.innerHTML}, () => console.log(this.state))
        if (value === 'location') this.setState({[value]: event.target.attributes['data-location'].value}, () => console.log(this.state))
        let nextIndex = Object.keys(this.state).indexOf(value) + 1
        let nextQuestion = Object.keys(this.state)[nextIndex].capitalizeFirstLetter()
        if(this.state.isEditing) nextQuestion = 'Overview';
        this.setState({currentQuestion: nextQuestion, isEditing: false})
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

    editQuestion = (question) => {
        console.log(question)
        console.log("===============================")
        this.setState({currentQuestion: question, isEditing: true})
    }

    renderOverview() {
        return <Overview
            overview={this.state}
            editQuestion={this.editQuestion}
            handleClick={this.handleClick}
        />
    }

    renderRegister() {
        return <Register register={this.register}/>
    }

    render() {
        return this.renderQuestions()
    }
}

export default Home;