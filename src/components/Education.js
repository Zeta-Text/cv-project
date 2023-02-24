import { Component } from "react";
import React from 'react';
import { render } from "@testing-library/react";

class Education extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        onOff: true,
        schoolName: '',
        degree: '',
        date: '',
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
            <label htmlFor="schoolnput">Name of school.
              
                <input 
                type="text" 
                name="schoolName" 
                value={this.state.schoolName}
                onChange={this.handleChange}
                />
            </label>

            <label htmlFor="degreeInput"> Area of study.
                <input 
                type="text"
                name="degree"
                value={this.state.degree}
                onChange={this.handleChange}
                />
            </label>

            <label htmlFor="dateInput">Dates studied.
                <input
                type="text"
                name="date"
                value={this.state.date}
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

            <div className="schoolName">
                {this.state.school}
            </div>

            <div className="degree">
                {this.state.degree}
            </div>

            <div className="date">
                {this.state.date}
            </div>
            
            <button className="btn"  onClick={() => this.edit(false)}>Edit</button>
        </div>
  
        )
    }

    render() {

        const { onOff} = this.state;

        return (
            <>
            {onOff ? this.renderForm() : this.renderData() }
            </>
        )
    }
}

export default Education;