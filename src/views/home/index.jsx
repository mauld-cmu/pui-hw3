import React, { Component } from 'react';
import './Homepage.css';
import logo from './logo-01.svg';

class Homepage extends Component {
  // state = {  } 
  render() { 
    return (
      <div className="homepage">
        <header>
          <img id="logo" src={logo} alt="Bun Bun Bake Shop logo with text" width="400" />
          <div id="header-text">
            <nav>
              <div id="products-nav">
                <span>PRODUCTS</span>
              </div>
              <div id="cart-nav">
                <span>CART</span>
              </div>
            </nav>
            <hr/>
              <h1>Our hand-made cinnamon rolls</h1>
          </div>
        </header>
      </div>
    );
  }
}
 
export default Homepage;