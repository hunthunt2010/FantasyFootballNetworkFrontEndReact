import React, {Component} from 'react';
import {connect} from 'react-redux';

export class Home extends Component {

  render() {
    return (
      <span>
        It worked
      </span>
    );
  }
}

Home.propTypes = {};

export default connect(null, null)(Home);