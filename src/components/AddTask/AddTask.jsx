import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';

import Button from '../Button';
import Input from '../Input';

import { Container } from './styles';

class AddTask extends React.Component {
  static propTypes = {
    onAdd: PropTypes.func.isRequired,
  }

  constructor() {
    super();
    this.state = {
      value: '',
    };

    this._handleChange = this._handleChange.bind(this);
    this._handleAdd = this._handleAdd.bind(this);
  }

  _handleChange(value) {
    this.setState({ value });
  }

  _handleAdd() { //to avisando para o app
    this.props.onAdd(this.state.value);
    this.setState({ value: '' });
  }

  render() {
    const style = {
      margin: 12,
    };

    return (
      <Container>
        <Input mudou={this._handleChange} value={this.state.value}/>
        <RaisedButton label="Adicionar" secondary onClick={this._handleAdd} style={style} />
        {/* <Button label="Adicionar" bgColor="#b2757d" onClick={this._handleAdd}/> */}
      </Container>
    );
  }
}

export default AddTask;
