import React, {Component} from 'react';
import LoginContainer from './LoginContainer';
import './app.css';

export default class App extends Component {
  greeting = 'Hello from React!!';
  logGreeting = () => {
    console.log(this.greeting);
  }

  render() {
    this.logGreeting()
    return (
      <div id="container" className="inner-container">
        <LoginContainer/>
      </div>
    )
  }
}
