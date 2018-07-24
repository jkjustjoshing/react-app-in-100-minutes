import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import firestore from './firestore';

class AddItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      number: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();

    firestore.collection('items').add(this.state).then(() => {
      // Redirect to list route
      this.props.history.push('');
    });
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
        <input type="number" name="number" value={this.state.number} onChange={this.handleChange} />

        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default withRouter(AddItem);
