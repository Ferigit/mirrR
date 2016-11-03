import React, { Component } from 'react'
import { connect } from 'react-redux'
import fetchWeather from '../../redux/action-creators/weather'
import WeatherIcon from './weather-icon'
import {
  weatherWrapper,
  weatherH1
} from './weather.style'

class Weather extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchWeather()
  }

  _renderWeather({ currently, daily }) {
    return (
      <div>
        <h1 className={weatherH1}>{currently.apparentTemperature.toFixed(0)}&deg;</h1>
        <WeatherIcon icon={currently.icon} />
        <p>{daily.summary}</p>
      </div>
    )
  }

  render() {
    const { weather } = this.props
    return (
      <div className={weatherWrapper}>
        {
          Object.keys(weather).length
            ? this._renderWeather(weather)
            : <p>No weather, make sure you added an api key</p>
        }
      </div>
    )
  }
}

const mapStateToProps = ({ weather }) => {
  return { weather }
}

export default connect(mapStateToProps, { fetchWeather })(Weather)
