import React, {Component} from 'react';
import {getCurrentUser} from '../../services/firebase';
import {toast} from 'react-toastify';

import './Profile.css'

class Profile extends Component {

    state = {
        user: null
    }

    componentDidMount() {
        getCurrentUser()
            .then(user => this.setState({user}))
            .catch(error => {
                toast(error.message, {type: toast.TYPE.ERROR})
            })
    }

    renderSkills = () => {
        return (
            <div>
                {this.state.user.job_data.skills.map((x, i) => <p className="title" key={i}>{x}</p>)}
            </div>
        )
    }


    render() {
        const {user} = this.state;
        console.log(user)
        return (
            <div className="profile-page">
                {
                    user ?
                        <div className="card">

                            <img src="http://media.snimka.bg/4774/015802547.jpg?r=0" alt="John" style={{width:'100%'}}/>
                            <br/>
                            <h3><b>{user.name}</b></h3>
                            <p>{user.email}</p>
                            {this.renderSkills()}
                            <p>Availability: {user.job_data.availability}</p>
                            <p>Experience: {user.job_data.experience}</p>
                            <p>Salary: {user.job_data.salary}</p>
                            <p>Location: {user.job_data.location}</p>
                            <div style={{margin: '24px 0'}}>
                                <a href="https://www.linkedin.com/in/md-abu-talha/" target="_blank"><i className="fab fa-linkedin"></i></a>
                                {/*<a href="https://www.facebook.com/talha.sust.cse" target="_blank"><i className="fab fa-facebook"></i></a>*/}
                                <a href="https://github.com/talha08" target="_blank"><i className="fab fa-github"></i></a>
                                {/*<a href="https://medium.com/@talhaqc" target="_blank"><i className="fab fa-medium"></i></a>*/}
                            </div>
                            <p><a href="#" className="button">Edit Profile</a></p>
                        </div>
                        :
                        null
                }
            </div>

        );
    }
}

export default Profile;