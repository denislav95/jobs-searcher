import React, {Component} from 'react';
import {convertObjToArr} from '../utlis/helpers';

class Overview extends Component {

    renderOverview = () => {
        const overview = convertObjToArr(this.props.overview)
            .values
            .filter(x => x.indexOf('Overview') === -1 && x[0] !== null)
        const keys = convertObjToArr(this.props.overview)
            .keys
            .filter(x => x.indexOf('overview') === -1 && x.indexOf('currentQuestion') === -1)
        console.log(overview)
        return (
            <ul>
                {overview.map((x, index) => {
                    const isNested = Array.isArray(x[0])
                    if(isNested)
                        return <li key={index}>
                            {keys[index]}:
                            <ul>
                                {x[0].map((y, index2) => <li key={"_" + index2}>{y}</li>)}
                            </ul>
                        </li>
                    else return <li key={index}>{keys[index]}: {x}</li>
                    }
                )}
            </ul>
        )
    }

    render() {
        return (
            <div className="welcome-question overview">
                <p>Overview</p>
                {this.renderOverview()}
            </div>
        );
    }
}

export default Overview;