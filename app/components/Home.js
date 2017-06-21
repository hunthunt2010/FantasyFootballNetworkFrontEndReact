import React, {Component} from 'react';
import * as T from 'prop-types';
import {sayHello} from '../actions';
import {connect} from 'react-redux';

class Home extends Component {

  render() {
    let {message} = this.props;
    console.log(this.props);
    let messageSpan = message ? <span>{message}</span> : null;
    return (
      <div>
        {messageSpan}
        <button onClick={this.props.sayHello}>Say Hello</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sayHello: () => {
      dispatch(sayHello());
    }
  };
};

const mapStateToProps = state => {
  const {example} = state;
  return {
    message: example.message
  };
};

Home.propTypes = {
  sayHello: T.func,
  message: T.string
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);