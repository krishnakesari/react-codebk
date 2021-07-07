import React, { Component } from 'react';

class Footer extends Component {
    render (){
        return (
            <footer>
                &copy; Learning { (new Date()) .getFullYear()}
            </footer>
        );
    }
}

export default Footer;