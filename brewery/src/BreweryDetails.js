import React from 'react'
import { Button } from 'semantic-ui-react'



class BreweryDetails extends React.Component {

  render() {
    return (
      <div>
        {this.props.brewery.name}
        <Button onClick={this.props.pageHandler}> Back To Listings
        </Button>
      </div>
    );
  }

}

export default BreweryDetails ;
