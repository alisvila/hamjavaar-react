import React, { Component } from 'react'

class UserPage extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
      return(
        <div>
        <div className="container">
          <div className="content">
            <ul v-if="users && users.length" id="foo">
              <li v-for="user in users" key="user.id">
              this is user component
                {/* {{ user.username }} */}
              </li>
            </ul>
          </div>
        </div>
        </div>
      );
    }

}

export default UserPage