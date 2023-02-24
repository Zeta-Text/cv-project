import { Component } from "react";
import React from 'react';
import { render } from "@testing-library/react";

class Work extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        onOff: true,
        company: '',
        position: '',
        tasks: '',
        dates: ''
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
    }
    

    renderForm = () =>  {



        return(
        <div className="form">
        <form onSubmit={this.onSubmitBasic}>
            <label htmlFor="companyInput">Company Name
              
                <input 
                type="text" 
                name="company" 
                value={this.state.company}
                onChange={this.handleChange}
                />
            </label>

            <label htmlFor="positionInput">Position
                <input 
                type="text"
                name="position"
                value={this.state.position}
                onChange={this.handleChange}
                />
            </label>

            <label htmlFor="tasksInput">Duties performed
                <input
                type="text"
                name="tasks"
                value={this.state.tasks}
                onChange={this.handleChange}
                />
            </label>

            <label htmlFor="datesInput">Dates worked.
                <input
                type="text"
                name="dates"
                value={this.state.dates}
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

            <div className="company">
                {this.state.company}
            </div>

            <div className="position">
                {this.state.position}
            </div>

            <div className="tasks">
                {this.state.tasks}
            </div>

            <div className="dates">
                {this.state.dates}
            </div>
            <button className="btn"  onClick={() => this.edit(false)}>Edit</button>
        </div>
  
        )
    }

    render() {

        const { onOff, company, position, tasks, dates } = this.state;

        return (
            <>
            {onOff ? this.renderForm() : this.renderData() }
            </>
        )
    }
}

export default Work;