import React, { Component } from 'react'
import { connect } from 'react-redux'
import io from 'socket.io-client'
import fetchComponents, { updateComponents } from '../redux/action-creators/components'
import Google from './google'
import Greeting from './greeting'
import Weather from './weather'
import Clock from './clock'
import News from './news'
import Twitter from './twitter'

const availableComponents = {
  Google,
  Greeting,
  Weather,
  Clock,
  News,
  Twitter
}

class Mirror extends Component {
  constructor (props) {
    super(props)

    const socket = io('http://localhost:5000')

    socket.on('update-components', (newComponents) => {
      this.props.updateComponents(newComponents)
    })
  }

  componentDidMount() {
    this.props.fetchComponents()
  }

  _renderComponent(component) {
    const NewComp = availableComponents[component.name]
    return <NewComp key={component.name} {...component}/>
  }

  render () {
    return (
      <div style={{padding: 10}}>
        {
          this.props.components &&
          this.props.components
            .filter((comp) => comp.active)
            .map(this._renderComponent)
        }
      </div>
    )
  }
}

const mapStateToProps = ({ components: { components } }) => {
  return { components }
}

export default connect(mapStateToProps, { fetchComponents, updateComponents })(Mirror)
