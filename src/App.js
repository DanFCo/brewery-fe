import React from 'react'
import './App.css';
import Brewery from './Brewery'
import BreweryDetails from './BreweryDetails'



class App extends React.Component {

  state={
    breweries: [],
    selectedBrewery: {},
    page: false,
  }

  componentDidMount(){
    fetch("https://api.openbrewerydb.org/breweries?by_city=Denver&per_page=50")
    .then(response => response.json())
    .then(data =>{
      this.setState({
        breweries: data
      })
    })
  }


  breweryHandler = (brewery) =>{
    this.setState({
      selectedBrewery: brewery
    })

    this.pageHandler()
  }


  pageHandler = () =>{
    this.setState(prevState => ({
      page: !prevState.page
    }))
  }

  
  render(){
    return(
      <div>
        {this.state.page === true ?
          <BreweryDetails brewery={this.state.selectedBrewery} pageHandler={this.pageHandler} />
          :
          this.state.breweries.map(brewery =>{
            return <Brewery key={brewery.id} data={brewery} breweryHandler={this.breweryHandler} />
          })
        }

      </div>
    );
  }
}//-------end of component------------

export default App
