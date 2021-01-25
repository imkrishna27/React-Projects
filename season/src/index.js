import React from "react";
import ReactDOM from "react-dom";
import Season from './Season';
import Spinner from './Spinner';

import "semantic-ui-css/semantic.min.css";

// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position),
//     (err) => console.log(err)
//   );
//   return <div>Latitude:</div>;
// };

class App extends React.Component {

  state={lat:null,errormessage:""};


  componentDidMount()
  {

    //initialize data to component
    //execute only once
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errormessage: err.message });
      }
    );
  }
  render() {
        if(!this.state.lat && this.state.errormessage)
        return <div>Error:{this.state.errormessage}</div>
        if(this.state.lat && !this.state.errormessage)
        return <Season lat={this.state.lat}></Season>
        return <Spinner/>
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
