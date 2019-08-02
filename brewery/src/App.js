import React from 'react';
import './App.css';
import Brewery from './Brewery'


class App extends React.Component {

state={
  breweries: [],
  selectedBrewery: {},
  page: 1
}

  componentDidMount(){
    fetch("https://api.openbrewerydb.org/breweries?by_city=Denver&per_page=50")
    .then(response => response.json())
    .then(data =>{
     this.setState({
       breweries: data
     })
    })
    let jimmy = process.env.API_KEY
    console.log(jimmy)
  }








  render(){
    return(
      <div>
        {this.state.breweries.map(brewery =>{
          return <Brewery key={brewery.id} data={brewery} />
        })}
      </div>
  );
}
}//-------end of component------------

export default App;
