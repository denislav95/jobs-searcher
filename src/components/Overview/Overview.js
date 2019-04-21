import React, {Component} from 'react';
import {convertObjToArr} from '../../utlis/helpers';

import './Overview.css';

class Overview extends Component {

    renderOverview = () => {

        const overview = convertObjToArr(this.props.overview)
            .values
            .filter(x => x.indexOf('Overview') === -1 && x.indexOf(false) === -1 && x[0] !== null)
        const keys = convertObjToArr(this.props.overview)
            .keys
            .filter(x => x.indexOf('overview') === -1 && x.indexOf('isEditing') === -1 && x.indexOf('currentQuestion') === -1)

        return (
            <div className="list-group list-group-root well">
                {overview.map((x, index) => {
                        const isNested = Array.isArray(x[0])
                        const title = String(keys[index]).capitalizeFirstLetter();
                        if (isNested)
                            return <div className="list-group" key={index}>
                                <a href="#"
                                   className="list-group-item  list-group-item-action py-2">
                                    {title}
                                    <i className="far fa-edit float-right" onClick={() => this.props.editQuestion(title)}></i>
                                </a>
                                <div className="list-group nested">
                                    {x[0].map((y, index2) =>
                                        <a key={"_" + index2}
                                           href="#"
                                           className="list-group-item  list-group-item-action py-1">{y}
                                        </a>
                                    )}
                                </div>
                            </div>
                        else return <div className="list-group" key={index}>
                            <a href="#"
                               onClick={() => this.props.editQuestion(title)}
                               className="list-group-item list-group-item-action py-2">
                                {title}
                                <i className="far fa-edit float-right" onClick={() => this.props.editQuestion(title)}></i>
                            </a>
                            <div className="list-group nested">
                                <a key={index} href="#"
                                   className="list-group-item list-group-item-action py-1">
                                    {x}
                                </a>
                            </div>
                        </div>
                    }
                )}
            </div>
        )
    }

    render() {
        return (
            <div className="welcome-question overview">
                <h4>Overview</h4>
                {this.renderOverview()}
                <button onClick={this.props.handleClick} className="btn btn-primary" value="overview">Confirm</button>
            </div>
        );
    }
}

export default Overview;