import { Component } from "react";
import React from 'react';
import { render } from "@testing-library/react";

class Basic extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        onOff: true,
        name: '',
        email: '',
        number: '',
        city: ''
    }

    handleChange = (e) => {
        const value = e.target.value;
        this.setState({
            ...this.state,
            [e.target.name]: value
        });
    }

    onSubmitBasic = (e) => {
        e.preventDefault();
        this.setState({
            onOff: false
        })
       console.log(this.state.onOff)
       console.log(this.state.name)
       
    }
    

    renderForm = () =>  {



        return(
        <div className="form">
        <form onSubmit={this.onSubmitBasic}>
            <label htmlFor="nameInput">Enter you basic information.
              
                <input 
                type="text" 
                name="name" 
                value={this.state.name}
                onChange={this.handleChange}
                />
            </label>

            <label htmlFor="emailInput"> Enter your email.
                <input 
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                />
            </label>

            <label htmlFor="numberInput">Enter your number.
                <input
                type="text"
                name="number"
                value={this.state.number}
                onChange={this.handleChange}
                />
            </label>

            <label htmlFor="cityInput" >Enter your city.
                <input
                type="text"
                name="city"
                value={this.state.city}
                onChange={this.handleChange}
                />

            </label>

            <button type="submit">Save</button>
        </form>
        
    </div>
        )
    }

    edit = () => {
        this.setState({
            onOff: true
        })
    }



    renderData = () => {
        return (
        <div className="basicCont">

            <div className="name">
                {this.state.name}
            </div>

            <div className="email">
                {this.state.email}
            </div>

            <div className="number">
                {this.state.number}
            </div>

            <div className="city">
                {this.state.city}
            </div>
            
            <button className="btn"  onClick={() => this.edit(false)}>Edit</button>
        </div>
  
        )
    }

    render() {

        const { onOff, name, email, number, city } = this.state;

        return (
            <>
            {onOff ? this.renderForm() : this.renderData() }
            </>
        )
    }
}

export default Basic;