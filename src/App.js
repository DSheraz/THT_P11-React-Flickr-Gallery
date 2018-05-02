import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

// Components
import Container from './Container';
import PageNotFound from './PageNotFound';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
      {/* returns only the first matching route*/}
          <Switch>
      {/* route for the links provided*/}
            <Route exact path="/" component={ () => <Container tag="Welcome"/> } />
            <Route path="/cats" component={ () => <Container tag="Cats" /> } />
            <Route path="/dogs" component={ () => <Container tag="Dogs" /> } />
            <Route path="/computers" component={ () => <Container tag="Computers" /> } />
       {/* route for the search bar n pass url props*/}
            <Route path="/search" component={ (props) => <Container tag="Random" url={props.match.url} /> } />
       {/*Page not found if none of the links match the routes*/}
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
