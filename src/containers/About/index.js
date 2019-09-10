import React, { Component } from 'react'
import { PageHeader } from 'antd'
class About extends Component {
  render() {
    return (
      <div>
      <PageHeader onBack={() => null} title="About" subTitle="This is a subtitle" />, 
      </div>
    )
  }
}

export default About
