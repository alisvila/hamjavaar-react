import React, { Component } from 'react';
import PannelMenu from './PannelMenu';
import SideMenu from './SidePannel';

class PannelHome extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <>
            <div className="container">
                <SideMenu />
                <section className="columns">
                <PannelMenu />
                <div className="column">
                    <p>this is pannel</p>
                </div>
                </section>
                </div>
            </>
        )
    }

}

export default PannelHome