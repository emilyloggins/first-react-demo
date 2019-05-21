import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animals/AnimalList'
import LocationList from './locations/LocationList'
import EmployeeList from './employee/EmployeeList'
import AnimalManager from "../modules/AnimalManager"


export default class ApplicationViews extends Component {
    state = {
        animals: [],
        employees: [],
        locations: []
    }

componentDidMount(){
    const newState = {};
    AnimalManager.getAll()
        .then(animals => newState.animals = animals)
        .then(() => this.setState(newState))
}

render() {
    return (
        <React.Fragment>
            <Route exact path="/" render={(props) => {
                return <LocationList locations={this.state.locations} />
            }} />
            <Route exact path="/animals" render={(props) => {
                return <AnimalList animals={this.state.animals} />
            }} />
            <Route exact path="/employees" render={(props) => {
                return <EmployeeList employees={this.state.employees} />
            }} />
        </React.Fragment>
    )
}
}