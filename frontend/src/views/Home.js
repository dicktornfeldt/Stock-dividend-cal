import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addStock } from '../actions/stockActions';

class Home extends Component {
  state = {
    inputVal: '',
  };

  handleChange = event => {
    this.setState({
      inputVal: event.target.value,
    });
  };

  // dispatch data via redux to backend
  handleSubmit = () => {
    const data = new FormData();
    data.append('stockShort', this.state.inputVal);
    this.props.addStock(data);
  };

  render() {
    return (
      <div>
        <input name="stock" onChange={this.handleChange} value={this.state.inputVal} type="text" />
        <button onClick={this.handleSubmit}> Add </button>{' '}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    stocks: state.stockReducer,
  };
}

export default connect(
  mapStateToProps,
  {
    addStock,
  }
)(Home);
