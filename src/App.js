import React, { Component } from 'react';
import data from './guests.json';
import './App.css';

import GuestItem from './guest-item.js';

class GuestList extends Component {
  state = {
    users: data
  }

  searchGuests = (e) => {
    let fieldValue = e.target.value.toLowerCase();
    let filteredGuests = data.filter(user => {
      let guestName = user.name.toLowerCase();
      
      if( guestName.indexOf(fieldValue) !== -1 ) {
        return user;
      }
    });

    this.setState({
      users: filteredGuests
    })
  }

  render() {
    const { users } = this.state;
    const { searchGuests } = this;

    return (
      <div className="App">
        <h1>Guests List</h1>
        <input placeholder="Search guests" onChange={searchGuests} />

        {
          users.length !== 0 ?
          (
            <ul className="guests-list">
              {
                users.map( (guest, key) => 
                <GuestItem
                  key={key}
                  guest={guest}
                /> )
              }
            </ul>
          ) :
          (
            <p>Guests not found</p>
          )
        }
      </div>
    );
  }
}

export default GuestList;
