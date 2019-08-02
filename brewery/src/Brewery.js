import React from 'react';
import { Button, Icon, Segment, Header, Divider } from 'semantic-ui-react'
class Brewery extends React.Component {



  render() {
    return (
      <div>
      <Segment raised>
        <Header as='h1' floated='left'>
          {this.props.data.name}
        </Header>
        <Divider clearing />
        <font size='4'>
        Brewery Type:  <i>{this.props.data.brewery_type}</i>
        </font>
        <br/>
        Street: {this.props.data.street}
        <br/>
        City: {this.props.data.city}
        <br/>
        State: {this.props.data.state}
        <br/>
        Zipcode: {this.props.data.postal_code}
        <br/>
        {this.props.data.website_url.length === 0 ? <h5>No Website Available</h5> :
          <a href={this.props.data.website_url} target="blank">
          <Button color="blue" icon>
          <Icon name="world"/> Website
          </Button>
          </a>
        }
      </Segment>

      </div>
    );
  }

}//------------end of class-------------------------


// <h2>{this.props.data.name}</h2>
//  - <i>{this.props.data.brewery_type}</i>
//  <br/>
//  Street: {this.props.data.street}
//  <br/>
//  City: {this.props.data.city}
//  <br/>
//  State: {this.props.data.state}
//  <br/>
//  Zipcode: {this.props.data.postal_code}
//  <br/>
// <a href={this.props.data.website_url} target="blank">
//   <Button color="blue" icon>
//     <Icon name="world"/> Website
//   </Button>
// </a>













export default Brewery
