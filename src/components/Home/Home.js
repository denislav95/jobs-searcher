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
        if (this.state.isEditing) nextQuestion = 'Overview';
        this.setState({currentQuestion: nextQuestion, isEditing: false})
    }

    renderQuestions = () => {
        return this[`render${this.state.currentQuestion}`]();
    }

    renderExperience() {
        return <Experience id="experience-part" handleClick={this.handleClick}/>
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
            id="skills-part"
            addSkillsClass={this.addSkillsClass}
            onSelectSkill={this.onSelectSkill}
            handleClick={this.handleClick}
        />
    }

    renderSalary() {
        return <Salary
            id="salary-part"
            handleClick={this.handleClick}/>
    }

    renderLocation() {
        return <Location
            id="location-part"
            handleClick={this.handleClick}/>
    }

    renderAvailability() {
        return <Availability
            id="availability-part"
            handleClick={this.handleClick}/>
    }

    editQuestion = (question) => {
        this.setState({currentQuestion: question, isEditing: true})
    }

    renderOverview() {
        return <Overview
            id="overview-part"
            overview={this.state}
            editQuestion={this.editQuestion}
            handleClick={this.handleClick}
        />
    }

    renderRegister() {
        return <Register register={this.register}/>
    }

    checkIfActive = (element) => {
        return this.state.currentQuestion === element ? 'active' : ''
    }

    renderPrevQuestion = () => {
        let prevIndex = Object.keys(this.state).indexOf(this.state.currentQuestion.toLowerCase()) - 1;
        let prevQuestion = Object.keys(this.state)[prevIndex].capitalizeFirstLetter();
        this.setState({currentQuestion: prevQuestion})
    }

    renderNextQuestion = () => {
        let nextIndex = Object.keys(this.state).indexOf(this.state.currentQuestion.toLowerCase()) + 1
        let nextQuestion = Object.keys(this.state)[nextIndex].capitalizeFirstLetter()
        this.setState({currentQuestion: nextQuestion})
    }

    renderStepper() {
        return (
            <div className="bs-stepper">
                <div className="bs-stepper-header" role="tablist">
                    <div className="step" data-target="#experience-part">
                        <button type="button" className={this.checkIfActive('Experience') + " step-trigger"} role="tab"
                                aria-controls="experience-part"
                                id="experience-part-trigger">
                            <span className="bs-stepper-circle">1</span>
                            <span className="bs-stepper-label">Experience</span>
                        </button>
                    </div>
                    <div className="line"></div>
                    <div className="step" data-target="#skills-part">
                        <button type="button" className={this.checkIfActive('Skills') + " step-trigger"} role="tab"
                                aria-controls="skills-part"
                                id="skills-part-trigger">
                            <span className="bs-stepper-circle">2</span>
                            <span className="bs-stepper-label">Skills</span>
                        </button>
                    </div>
                    <div className="line"></div>
                    <div className="step" data-target="#salary-part">
                        <button type="button" className={this.checkIfActive('Salary') + " step-trigger"} role="tab"
                                aria-controls="salary-part"
                                id="salary-part-trigger">
                            <span className="bs-stepper-circle">3</span>
                            <span className="bs-stepper-label">Salary</span>
                        </button>
                    </div>
                    <div className="line"></div>
                    <div className="step" data-target="#location-part">
                        <button type="button" className={this.checkIfActive('Location') + " step-trigger"} role="tab"
                                aria-controls="location-part"
                                id="location-part-trigger">
                            <span className="bs-stepper-circle">4</span>
                            <span className="bs-stepper-label">Location</span>
                        </button>
                    </div>
                    <div className="line"></div>
                    <div className="step" data-target="#availability-part">
                        <button type="button" className={this.checkIfActive('Availability') + " step-trigger"}
                                role="tab" aria-controls="availability-part"
                                id="availability-part-trigger">
                            <span className="bs-stepper-circle">5</span>
                            <span className="bs-stepper-label">Availability</span>
                        </button>
                    </div>
                    <div className="line"></div>
                    <div className="step" data-target="#overview-part">
                        <button type="button" className={this.checkIfActive('Overview') + " step-trigger"} role="tab"
                                aria-controls="overview-part"
                                id="overview-part-trigger">
                            <span className="bs-stepper-circle">6</span>
                            <span className="bs-stepper-label">Overview</span>
                        </button>
                    </div>
                </div>
                <div className="bs-stepper-content">
                    {this.renderQuestions()}
                    {/*<div id="logins-part" className="content" role="tabpanel"*/}
                    {/*aria-labelledby="logins-part-trigger"></div>*/}
                    {/*<div id="information-part" className="content" role="tabpanel"*/}
                    {/*aria-labelledby="information-part-trigger"></div>*/}
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="wrapper">
                <div className="stepper-navigation">
                    {
                        this.state.currentQuestion !== 'Experience' ?
                            <button
                                className="btn btn-lg btn-primary float-left"
                                onClick={this.renderPrevQuestion}>
                                Previous
                            </button>
                            : null
                    }
                    {
                        this.state.currentQuestion !== 'Overview' ?
                            <button
                                className="btn btn-lg btn-primary float-right"
                                onClick={this.renderNextQuestion}>
                                Next
                            </button>
                            : null
                    }
                </div>
                {this.renderStepper()}
            </div>
        )
    }
}

export default Home;