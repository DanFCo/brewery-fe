import React from 'react';
import { Button, Icon, Segment, Header, Divider, Popup, Responsive } from 'semantic-ui-react'





class Brewery extends React.Component {



  render() {
    return (
      <Responsive>
      <div className="breweries">
        <Segment textAlign="center" raised>
          <Header as='h1' textAlign='center'>
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

            <Popup content={this.props.data.website_url} trigger={<a href={this.props.data.website_url} target="blank">
             <Button color="blue" icon>
                <Icon name="world"/> Website
              </Button>
              </a>} />
            }
              <Button onClick={() => this.props.breweryHandler(this.props.data)} color="black" icon>
                <Icon name="beer"/> Details
              </Button>
      </Segment>
      </div>
      </Responsive>
    );
  }

}//------------end of class-------------------------













export default Brewery
