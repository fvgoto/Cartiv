import React, { Component } from 'react';
import Header from './Header';
import MainSection from './MainSection';

//require (un-named) stores as a good habit
let req = require.context('../stores', true, /^(.*\.(js$))[^.]*$/igm);
req.keys().forEach((key) => {
  req(key);
});


class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <MainSection/>
      </div>
    );
  }
}
export default App;
