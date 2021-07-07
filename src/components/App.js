
import React, { Component } from 'react';
import Home from './Home/Home';
import Header from "../Shared/components/layout/Header";
import Content from "../Shared/components/layout/Content";
import Footer from "../Shared/components/layout/Footer";
import './App.css';

class App extends Component {
    render(){
        return(
          <div className="App">
              <Header title= "Learn" />
              <Content>
                  <Home />
              </Content>
              <Footer />
          </div>
        );
    }
}

export default App;
