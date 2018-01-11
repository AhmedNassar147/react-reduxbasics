import React from 'react';
import { render } from 'react-dom';
import Main from './components/main/main';
import Side from './components/sidebar/side';

class App extends React.Component{
  render(){
    return(
      <div>
        <Main />
        <Side />       
      </div>
    );
  }
}

render(
  <App />,
  document.getElementById("app")
);