import React from 'react';

export class Addition extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstNumber: null,
            secondNumber: null
        };
    }
   
    handleChange = (event) => {
        debugger;
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val }); 
    }

    handleSubmit = (event) => {

        event.preventDefault(); 
        const url = `http://localhost:9000/add/${this.state.firstNumber}/and/${this.state.secondNumber}`
        fetch(url)
            .then((result) => result.json())
            .then(result => {
                debugger;
                this.setState({ queryResult: result.Addition })
            });
    }

    render() {
        return (
            <div>
                <div className="row"><div className="col">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-floating mb-3">
                            
                            <input
                                type="number"
                                name="firstNumber"
                                id="firstNumber"
                                className="form-control"
                                onChange={this.handleChange} />
                            <label for="firstNumber">First Number</label>    
                        </div>
                        <div className="form-floating mb-3">
                           
                            <input
                                type="number"
                                name="secondNumber"
                                id="secondNumber"
                                className="form-control"
                                onChange={this.handleChange} />
                             <label for="secondNumber">Second Number</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Get Addition</button>
                    </form>
                </div>
                </div>

                <h3>The addition of two numbers is: {this.state.queryResult} </h3>
             
                
            </div>
        );
    }
}
