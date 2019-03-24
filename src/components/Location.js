import React, {createRef, Component} from 'react';
import {render} from 'react-dom'
import {Map, Marker, Popup, TileLayer} from 'react-leaflet'
import config from '../config';

const GOOGLE_MAPS_URL = 'https://maps.googleapis.com/maps/api/geocode/json';

class Location extends Component {

    state = {
        latlng: null
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition((location) => {
            const position = [location.coords.latitude, location.coords.longitude]
            this.setState({latlng: position})
        })
    }

    mapRef = createRef;

    handleClick = (e) => {
        this.setState({latlng: e.latlng})
        const map = this.mapRef.current
        if (map != null) {
            map.leafletElement.locate()
        }
    }

    initMap = () => {
        const map = (
            <Map
                center={this.state.latlng}
                zoom={5}
                onClick={this.handleClick}
                ref={this.mapRef}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
                <Marker position={this.state.latlng}>
                    <Popup>You are here</Popup>
                </Marker>
            </Map>
        )
        render(map, document.getElementById('mapid'))
    }

    render() {
        setTimeout(this.initMap, 100);
        return (
            <div className="welcome-question location">
                <h4>Where do you want to work ?</h4>
                <button
                    data-location={this.state.latlng}
                    className="btn btn-primary"
                    value="location"
                    onClick={this.props.handleClick}>
                    Submit
                </button>
                <div id="mapid"></div>
            </div>
        )
    }
}

export default Location;