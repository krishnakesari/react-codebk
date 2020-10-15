
# REACT REFERENCE

1. using let and Const 
- var name = 'balu';
    - Declares a global variable
- let age = 30;  
    - Let can declare variables that can change their value but in block scope (variable exists only with corresponding block)
    - Whenever you see a { } brackets - it is a block
- console.log(window.name);

2. Using Block space:
- Best way to use it is through declaring a 'for' loop with 'var' and 'let'

for (var i = 1; i <= 10; i++) {
  console.log(i);
}

3. With 'const' we declare constants (values cannot be changes except for arrays and objects)
const pi = 3.14;
pi-5;

4. If we declare an array with const, we can manipulate array element
const cryptoCurrencies = ['BTC', 'ETH'];
- Adding a word
cryptoCurrencies.push('ERT'); 
- Remove first element
cryptoCurrencies.shift();

5. Modifying Nodes:
const person = {
 name: 'Balu',
  age: 30,
  email: 'baluk@outlook.com'
};
### Adding a new node
person.website = 'https://www.balu.com';
### Removing a node
delete person.email;
### updating a node
person.age = 29;

6. Spread Operator: (Spread Individual values)
- Symbol is (...)
- Splits an iteration object into individual values'
- In React, it can be used to push values into another array
- Eg: adding new task to TO-DO list
this.setState({
    items: [
      ...this.state.items, // Here spreading the current items
       {
       task: 'my new task',
       }
    ]

});

7. Spread Operator: (Spread attributes)
render(){
    const props = {};
    
    props.name = 'bk';
    props.age = 30;
    props.email = 'xyz@outlook.com';
    
    return <person {...props} />;
}

8. Rest parameter: 
- The last parameter in a function prefixed with ... is called rest parameter
- Rest parameter is an array that will contain the rest of parameters of a function when the number argument exceed number of named parameters

function setNumbers(param1, param2, ...args) {
console.log(param1, param2, ...args);
}
setNumbers(1,2,3,4,5,6);

9. Destructuring: (most used in react)
- Allows us to assign the value to variables (or) properties of an iteration object to variables
- With ths method, we can convert our component props into a variable (or constants)

const person = ({name, age, email}) => (
<ul>
  <li>Name: {name} </li>
  <li>Age: {age}</li>
  <li>Email: {email}</li>
</ul>
)


10. Arrow function: 
- Create functions using => operator
- Arrow functions are anonymous functions
- Use a way to bind 'this' object instead of binding it in the constructor

class Person extends Component {
    showProps = () => {
       console.log(this.props);  // {name, age, email ...}
       }
   render () {
      return (
        <div>
          Consoling props: {this.showProps()}
        </div>
      );
     }
    }
  
  11. Template literals:
  - A new way to create a string using backticks (``) instead  of single quotes('') or double quotes(" ")
  - Used to concatenate class names or to render a string using a ternary operator
  
  render() {
     const {theme} = this.props;
     
     return (
        <div className = {`base ${theme === 'dark' ? 'darkMode' : 'lightMode'}`}
        >
        Some content here...
        </div>
     );
     }
     
 12. Map: (Most used in react)
 - Map() method returns a new array with the results of calling a provided function on each element in the calling array
 - used to render multiple elements inside a react component
 
 render() {
    const tasks = [
      {task: 'Task 1'},
      {task: 'Task 2'},
      {task: 'Task 3'}
    ];
  
  return(
      <ul>
        {tasks.map((item, key) => <li key={key} > {item.task}</li>}
      </ul>   
    );
  }   

13. Object.assign() :
- Used to copy values of all enumerable own properties from one or more source objects to a target object
- Mainly used with Redux to create immutable objects and return a new state to the reducers 

export default function coinReducer(state = initialState, action){
    switch (action.type) {
        case FETCH_COINS_SUCCESS: {
            const {payload: coins } = action;
        
        return Object.assign({}, state, {
           coins
           });
       }
     default :
       return state;
      }
    };  

14. Classes: 
- Existing prototype-based inheritance
- React uses classes to create class Components

import React, { Component } from 'react';

class Home extends Component {
     render () {
        return <h1> Home Component </h1>;
        }
     }
export default Home;

15. Static Methods:
- These are not called on instances of the class, instead they are called on the class itself
- These are often utility functions (functions to create or clone objects)
- In React, these are used to define the PropTypes in a component


import React, { Component } from 'react'; 
import PropTypes from 'prop-types'; 
import logo from '../../images/logo.svg';
class Header extends Component { 
    static propTypes = {
        title: PropTypes.string.isRequired,
            url: PropTypes.string };
render() { 
    const {
        title = 'Welcome to React',
        url = 'http://localhost:3000' } = this.props;
    return (
        <header className="App-header">
        <a href={url}>
        <img src={logo} className="App-logo" alt="logo" />
        </a>
    <h1 className="App-title">{title}</h1> </header>
    ); }
    }
export default Header;

16. Promises:
- Represents the eventual completion (or failure) of an asynchronous operation and its resulting value
- Promises are used to handle requests by using axios or fetch 
- Also used to implement server-side rendering 

17. async/wait:
- async function declaration defines an asynchronous function, which returns an AsyncFunction object.
- This can be used to perform a server request (for example using axios)

Index.getInitialProps = async() => {
 const url = 'https://api.coinmarketcap.com/v1/ticker/';
 const res = await axios.get(url);
 
 return {
   coins: res.data
   };
  }; 













        








