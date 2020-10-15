
### Components can now return arrays and strings from render
#### Example 1: Returning an array of elements. 

        render() {
        // Now you don't need to wrap list items in an extra element 
        return [
        <li key="1">First item</li>, 
        <li key="2">Second item</li>, 
        <li key="3">Third item</li>,
        ]; 
        }

#### Example 2: Returning a string 
        render() {
        return 'Hello World!'; 
        }

### Fragment (<></>) - empty tags
#### Example :1
        render () {
          return(
          <>
           <Component A />
           <Component B />
           <Component C />
          </>
        );
        }
#### Example 2: using React.Fragment
        render () {
          return(
          <React.Fragment>
           <Component A />
           <Component B />
           <Component C />
          </React.Fragment>
        );
        }
#### Example 3: Importing Fragment
        import React, { Fragment } from 'react';
        render () {
          return(
          <Fragment>
           <Component A />
           <Component B />
           <Component C />
          </Fragment>
        );
        }

### Error Boundaries
- Error boundaries catch javaScript errors anywhere in their child component tree, log those errors, display a fallback UI instead of the component tree that crashed.
- A class component becomes an error boundary if it defines a new lifecycle method called componentDidCatch(error,info)

        class ErrorBoundary extends React.Component { constructor(props) {
        super(props); this.state = {
        hasError: false };
        }
        componentDidCatch(error, info) { // Display fallback UI this.setState({
        hasError: true });
             // You can also log the error to an error reporting service
        logErrorToMyService(error, info); }
        render() {
        if (this.state.hasError) {
               // You can render any custom fallback UI
        return <h1>Something went wrong.</h1>; }
        return this.props.children; }
        }
        // Then you can use it as a regular component: render() {
           <ErrorBoundary>
             <MyComponent />
           </ErrorBoundary>
        }

