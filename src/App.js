import React, { Component } from 'react';
import { render } from 'react-dom'
import './App.css';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

import skills from './languages'

const LOCATION_API = 'https://maps.googleapis.com/maps/api/place/autocomplete/json?key=AIzaSyCajz89eA2kXHfTTU3Q9Jekyn6gNx3bGU8'
//https://maps.googleapis.com/maps/api/place/autocomplete/xml?input=Amoeba&types=establishment&location=37.76999,-122.44696&radius=500&key=AIzaSyCajz89eA2kXHfTTU3Q9Jekyn6gNx3bGU8
class App extends Component {

  state = {
    currentQuestion: 'Experience',
    experience: null,
      skills: [],
      salary: null,
      location: null,
  };

  handleClick = (event) => {
    const value = event.target.value;
    if(value !== 'skills') this.setState({[value]: event.target.innerHTML}, () => console.log(this.state))
    let nextIndex = Object.keys(this.state).indexOf(value) + 1
    let nextQuestion = Object.keys(this.state)[nextIndex].capitalizeFirstLetter()
    this.setState({currentQuestion: nextQuestion})
  }

  renderQuestions = () => {
    return this[`render${this.state.currentQuestion}`]();
  }

  renderExperience() {
    return (
        <div className="welcome-question experience">
          <p>How much experience do you have ?</p>
            <button onClick={this.handleClick} className="btn btn-outline-primary" value="experience">less than 6 months</button>
            <button onClick={this.handleClick} className="btn btn-outline-primary" value="experience">from 6 - 12 months</button>
            <button onClick={this.handleClick} className="btn btn-outline-primary" value="experience">from 1 to 2 years</button>
            <button onClick={this.handleClick} className="btn btn-outline-primary" value="experience">more than 2 years</button>
        </div>
    )
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
    return (
        <div className="welcome-question skills">
          <p>What technologies do you know ?</p>
            {skills.map((x, index) => <button  type="button" className={this.addSkillsClass(x) + " btn btn-outline-primary"} onClick={this.onSelectSkill} value={x} key={index}>{x}</button>)}
            <br/>
            <button value="skills" onClick={this.handleClick}>Submit</button>
        </div>
    )
  }

  renderSalary() {
      return (
          <div className="welcome-question salary">
              <p>What is your salary expectation ?</p>
              <button onClick={this.handleClick} className="btn btn-outline-primary" value="salary">500$ - 1000$</button>
              <button onClick={this.handleClick} className="btn btn-outline-primary" value="salary">1000$ - 2000$</button>
              <button onClick={this.handleClick} className="btn btn-outline-primary" value="salary">2000$ - 5000$</button>
              <button onClick={this.handleClick} className="btn btn-outline-primary" value="salary">5000$ +</button>
          </div>
      )
  }

  renderLocation() {
      setTimeout(this.initMap, 1000);
      return (
          <div className="welcome-question location">
              <p>Where do you want to work ?</p>
              <div id="mapid"></div>
              {/*<button onClick={this.handleClick} className="btn btn-outline-primary" value="location">Burgas</button>*/}
          </div>
      )
  }

  initMap = () => {
      navigator.geolocation.getCurrentPosition(function(location) {
          const position = [location.coords.latitude, location.coords.longitude]
          const map = (
              <Map center={position} zoom={13}>
                  <TileLayer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                  />
                  <Marker position={position}>
                      <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
                  </Marker>
              </Map>
          )

          render(map, document.getElementById('mapid'))
      });

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

String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}