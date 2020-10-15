
import React, { Component } from 'react';

// Importing CSS
import './Home.css';

class Home extends Component {
    render(){
        return (
            <div className="Home">
                 <h1> Getting Awesome Components </h1>
                <p>Learning is cool !!
                <a href="http://learn.com"> Learn </a>
                </p>
                <button style={{
                        backgroundColor: 'gray',
                        border: '1px solid black'
                }}>
                    Click Me !
                </button>
            </div>
        )
    }
}

export default Home;