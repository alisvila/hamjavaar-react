import React, { Component } from 'react';

  function Footer() {
    let dt = new Date();
    let year = dt.getFullYear()

    return (
        <footer className="footer">
            <div className="content has-text-centered">
                
                <span> Copyright © { year } hamjavaar inc.</span>
                
            </div>
        </footer>
    );
  }


export default Footer;