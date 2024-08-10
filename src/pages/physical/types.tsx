import React, { Component } from 'react'

type physicalTypes = {
    wellnessName: string
    physNum: number
    age: number
    maxHR: number
    cardioNum: number
    flexNum: number
    mobilityNum: number
    strengthNum: number
    nutritionalNum:number
    coordinationNum: number
    immunalNum?: number
}

 
type State = {

}

class types extends PhysicalWellness<physicalTypes, State> {
  state = {}

  render() {
    return (
      <div>

      </div>
    )
  }
}

export default types