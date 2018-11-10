import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import Button from './Button/Button';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';
// import Label from './Label/Label';

class App extends Component {
  state = {
    user: {
      username: '',
      prefix: '',
      suffix: '',
    },
    myString: '',
  };

  usernameChangeHandler = evt => {
    this.setState({
      user: {
        username: evt.target.value,
        prefix: 'Welcome, ',
        suffix: '',
      },
    });
  };

  logoutHandler = evt => {
    this.setState({
      user: {
        prefix: '',
        username: this.state.user.username,
        suffix: ', has been logged out!',
      },
    });
  };

  inputChangeHandler = evt => {
    const newInput = evt.target.value;
    this.setState({
      myString: newInput,
    });
  };

  deleteCharHandler = (evt, index) => {
    const newString =
      this.state.myString.slice(0, index) +
      this.state.myString.slice(index + 1);
    this.setState({
      myString: newString,
    });
  };

  render() {
    const charList = (
      <div>
        {this.state.myString.split('').map((char, index) => {
          return (
            <CharComponent
              char={char}
              key={'char' + index}
              click={evt => this.deleteCharHandler(evt, index)}
            />
          );
        })}
      </div>
    );

    let displayInputLength = null;

    if (this.state.myString.length > 0) {
      displayInputLength = (
        <p>
          The length of "{this.state.myString}" is {this.state.myString.length}.
        </p>
      );
    }

    return (
      <div className="App">
        <h1>Hello, welcome to my first(ish) react app</h1>
        <UserOutput>
          It is supposed to showcase basics with some paragraphs and two-way
          data binding
        </UserOutput>
        <UserOutput>
          So I decided to do some psuedo login/logout behavior
        </UserOutput>
        {this.state.user.username ? null : <UserOutput>Here you go</UserOutput>}
        <UserOutput>
          {this.state.user.username ? this.state.user.prefix : null}
          {this.state.user.username}
          {this.state.user.suffix}
        </UserOutput>
        <form>
          <div>
            <label htmlFor="username">Username/Email: </label>
            <UserInput
              id="username"
              changed={this.usernameChangeHandler}
              name={this.state.user.username}
            />
            <Button value="Logout" click={this.logoutHandler} />
          </div>
        </form>
        <label htmlFor="string">Input: </label>
        <input
          id="stringInput"
          type="text"
          onChange={this.inputChangeHandler}
          value={this.state.myString}
        />
        {displayInputLength}
        <ValidationComponent length={this.state.myString.length} />
        {charList}
      </div>
    );
  }
}

export default App;
