import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from '../components/Header';
import Footer from "../components/Footer";

class DefaultRoute extends Component {
  render() {
    return (
      <div className="pusher">
        <Header />
        <div className="page-default">
          <Route {...this.props} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default DefaultRoute;
