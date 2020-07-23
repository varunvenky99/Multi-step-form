import React from "react";
import Personal from './Personal';
import About from './about';
import Yourinfo from "./yourinfo"
class Main extends React.Component{
    constructor(props){
        super(props);
        this.state={
            step:1,
            firstName: "",
            lastName:"",

            btCourse:"",
            cgpa:"",
            pgCourse:"",
            country:"",

        };
    }

    handleChange = (input) => (e) =>{
        this.setState({
            [input]: e.target.value
        });
    }

    nextStep = () =>{
        this.setState({
            step: this.state.step + 1
        })
    }

    prevStep = () =>{
        this.setState({
            step:this.state.step - 1
        })
    }

    showStep = () =>{
            if(this.state.step === 1)
            return(
                <Personal 
                handleChange={this.handleChange}
                    nextStep={this.nextStep}
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                />
            );

            if(this.state.step === 2)
            return(
                <About 
                    handleChange={this.handleChange}
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    btCourse={this.state.btCourse}
                    cgpa={this.state.cgpa}
                    pgCourse={this.state.pgCourse}
                    country={this.state.country}
                />
            )
            if(this.state.step === 3)
            return(
                <Yourinfo 
                    handleChange={this.handleChange}
                    prevStep={this.prevStep}
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    btCourse={this.state.btCourse}
                    cgpa={this.state.cgpa}
                    pgCourse={this.state.pgCourse}
                    country={this.state.country}
                />
            )
    }

    render(){
        return(
            <>
            <h2>Step {this.state.step} of 3</h2>
            {this.showStep()}
            </>
        )
    }


}

export default Main;