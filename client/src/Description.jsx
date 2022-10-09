import React from "react";
import { render } from "react-dom";
import { useState } from "react";

export class Description extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            firstName: null,
            lastName : null,
            description : null
        };
    }
    handleChange = (event) => {
        debugger;
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val }); //nam becomes a computed property.
        // so it will not set "nam" instead will see the value of nam then set stuff,
    }
    render(){
return(
    <React.Fragment>
    <div className="container-fluid row clearfix" width="300px">
       
     <div className="col-md-4" width="300px"> 
       <img className=" rounded "  height="300px" width="300px" src="data:image/jpeg;base64,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" />
       </div> 
       <div className="col">
                <h1 className="float-left">{this.state.firstName} {this.state.lastName}</h1>
                <h4 className="float-left">{this.state.description}</h4>
                </div>

       </div>

<div className="row d-block">
    <div className="col">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-floating mb-3">
                           
                            <input
                                type="text"
                                name="firstName"
                                id="firstName"
                                className="form-control"
                                value={this.state.firstName}
                                onChange={this.handleChange}
                                />
                            <label htmlFor="firstName" for="firstName">First Name</label>
                        </div>

                        <div className="form-floating mb-3">
                            
                            <input
                                type="text"
                                name="lastName"
                                id="lastName"
                                className="form-control"
                                onChange={this.handleChange} />

                            <label htmlFor="lastName" for="lastName">Last Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            
                            <textarea
                                type="text"
                                name="description"
                                id="description"
                                className="form-control"
                                onChange={this.handleChange} />
                                <label htmlFor="description" for="description">Enter Description</label>
                        </div>
                        <br/> 
                        <div>
                        
                        </div>
                    </form>
                    </div>
                    </div>
        </React.Fragment>
    );
}
}


    
