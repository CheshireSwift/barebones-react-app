"use strict";

import Button from './Button.js'

class App extends React.Component {
  render() {
    return <Button />
  }
}

const domContainer = document.querySelector('#appcontainer');
ReactDOM.render(<App />, domContainer);
