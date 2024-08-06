import React, { Component } from 'react'

type physicalTypes = {
    wellnessName: string
    age: number
    physNum: number
    flexNum: number
    mobilityNum: number
    cardioNum: number
    strengthNum: number
    maxHR: number
    immunalNum: number
    coordinationNum: number
    nutritionalNum:number
}

type State = {
    
}

class types extends Component<physicalTypes, State> {
  state = {}

  render() {
    return (
      <div>types</div>
    )
  }
}

export default types