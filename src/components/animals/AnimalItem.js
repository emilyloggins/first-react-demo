import React, { Component } from 'react'

export default class AnimalItem extends Compnent {

    handleClick = () => {
        console.log("click", event, this.props.animal.id);
        this.props.deleteAnimal(this.props.animal.id);
    }

    render() {
        return (
            <article>
                <h3>{this.props.animal.name}</h3>
                <button onClick={this.handleClick}>Delete</button>
            </article>
        )
    }
}