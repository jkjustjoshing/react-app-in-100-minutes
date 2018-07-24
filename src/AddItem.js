import React, { Component } from 'react';

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
    console.log(event);
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

export default AddItem;
