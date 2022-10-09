import React, { useState } from 'react';
import ReactDOM from 'react-dom'; 
import 'bootstrap/dist/css/bootstrap.css';
import { NavBar } from './NavBar';
import {Description} from './Description';
import { Addition} from './Addition';
import { News } from './MyFavNews';

class MyFirstComponent extends React.Component{

    render(){
        return (
            <>
        <div>
            <NavBar/>
            <Description/>
            <Addition/>
            <News/>
        </div>
        </>
        );
    }
}

ReactDOM.render(<MyFirstComponent/>,document.getElementById("root"));