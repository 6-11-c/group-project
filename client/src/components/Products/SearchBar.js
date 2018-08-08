<<<<<<< HEAD
import React, { Component } from 'react';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
import SearchBarStyles from '../../styles/SearchBarStyles';
import MediaQuery from 'react-responsive';

class SearchBar extends Component {

  render() {
    return(
      <div>

      {/* Desktop Respnsiveness */}
        <MediaQuery query={'(min-device-width: 500px)'}>
          <InputGroup className="mx-auto pt-5 searchBar" style={SearchBarStyles.searchComponent}>
            <Input placeholder="Search our EPIC products" />
            <InputGroupAddon addonType="append">
              <Button color="secondary">Search!!</Button>
            </InputGroupAddon>
          </InputGroup>
        </MediaQuery>
        
      {/* Mobile Respnsiveness   */}
        <MediaQuery query={'(max-device-width: 500px)'}>
          <InputGroup className="mx-auto mt-4 searchBar" style={SearchBarStyles.searchComponent}>
            <Input placeholder="Search our EPIC products" />
            <InputGroupAddon addonType="append">
              <Button color="secondary">Search!!</Button>
            </InputGroupAddon>
          </InputGroup>
        </MediaQuery>
      </div>
    );
  }
}

=======
import React, { Component } from 'react';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
import SearchBarStyles from '../../styles/SearchBarStyles';
import MediaQuery from 'react-responsive';

class SearchBar extends Component {

  render() {
    return(
      <div>

      {/* Desktop Respnsiveness */}
        <MediaQuery query={'(min-device-width: 500px)'}>
          <InputGroup className="mx-auto pt-5 searchBar" style={SearchBarStyles.searchComponent}>
            <Input placeholder="Search our EPIC products" />
            <InputGroupAddon addonType="append">
              <Button color="secondary">Search!!</Button>
            </InputGroupAddon>
          </InputGroup>
        </MediaQuery>
        
      {/* Mobile Respnsiveness   */}
        <MediaQuery query={'(max-device-width: 500px)'}>
          <InputGroup className="mx-auto mt-4 searchBar" style={SearchBarStyles.searchComponent}>
            <Input placeholder="Search our EPIC products" />
            <InputGroupAddon addonType="append">
              <Button color="secondary">Search!!</Button>
            </InputGroupAddon>
          </InputGroup>
        </MediaQuery>
      </div>
    );
  }
}

>>>>>>> f17907b253f4c2515d7742013541fd052cad68b2
export default SearchBar;