import React, { Component } from 'react'
import AnimalItem from './AnimalItem';
import { isTemplateElement } from '@babel/types';

export default class AnimalList extends Component {
    render() {
        return(
            <section className="animals">
            {
                this.props.animals.map((item) => {
                        return <AnimalItem key={item.id} animal={item}
                            deleteAnimal={this.props.deleteAnimal} />
                    }
                )
            }
            </section>
        )
    }
}