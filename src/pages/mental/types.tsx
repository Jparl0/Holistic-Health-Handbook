import React, { Component } from 'react'

type mentalTypes = {
    wellnessName: string
    ruminationNum: number
    griefNum: number
    rejectionNum: number
    failureNum: number
    guiltNum: number
    traumaNum: number
    selfEsteemNum: number
}

type State = {}

class types extends Component<mentalTypes, State> {
  state = {}

  render() {
    return (
      <div>types</div>
    )
  }
}

export default types