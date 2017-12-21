import React from 'react';
import InputFilter from './Input';
import PubSub from 'pubsub-js';

class Filter extends React.Component {

  constructor() {
    super();
    this.state = {
      'value': "",
    }

    this._handleChange = this._handleChange.bind(this);
  }

  _handleChange(value) {
    this.setState({'value': value});
    PubSub.publish("FILTER_TASK", value);
  }

  render() {
    return(
      <div>
        <InputFilter placeholder="Filtro" mudou={this._handleChange}/>
      </div>
    );
  }
}

export default Filter;