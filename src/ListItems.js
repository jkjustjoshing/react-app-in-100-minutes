import React, { Component } from "react";
import firestore from './firestore';
class ListItems extends Component {

  constructor(props) {
    super(props)
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    firestore.collection("items").get().then((querySnapshot) => {
      let arr = [];
      querySnapshot.forEach(data => arr.push(data.data()));
      this.setState({ items: arr });
    });
  }

  render() {
    return <ul>
      {
        this.state.items.map(item => <li>{item.name}, {item.number}</li>)
      }
    </ul>
  }
}

export default ListItems;
