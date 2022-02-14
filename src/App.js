// @flow
import React from 'react';
import './App.css';
import User from "./User"


type AppPropsType = {||};


class App extends React.Component<AppPropsType> {
  constructor(props: AppPropsType) {
    super(props);
    this.logo = 'https://www.intersynergy.pl/app/uploads/2015/06/logo-is.png';
  }

  logo: string;


  render(): React$Element<*> {
    return (
      <div className="App">
        <header className="App-header">
          {/*<img src={this.logo} className="App-logo" alt="logo" />*/}
          <h1 className="App-title">
            Become an{' '}<strong>InterSynergy</strong>{' '}member{' '}💪
          </h1>
        </header>
        <User />
      </div>
    );
  }
}

export default App;
