
import React, { Component } from 'react';
import Home from './Home/Home';
import Header from "../Shared/components/layout/Header";
import './App.css';

class App extends Component {
    render(){
        return(
          <div className="App">
              <Header title= "Learn" />
              <Home />
          </div>
        );
    }
}

export default App;
