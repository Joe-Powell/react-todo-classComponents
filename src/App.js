
import React, { Component } from 'react';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      newItem: "",
      list: []
    }

  }




  // grab values from input and make into state onChange
  //we are using onChange instead of with back-end name attributes
  //onChange meas when the value changes from its original on submission...
  updateState(key, value) {
    // update react state
    this.setState({
      [key]: value
    })
  }



  deleteItem(id) {
    // current list of items
    const list = [...this.state.list];

    //filter out item being deleted
    const updatedList = list.filter(item => item.id != id);

    this.setState({ list: updatedList });

  }

  addItem() {

    //create item with unique id
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem
    }

    // copy of curent list of items
    const list = [...this.state.list];

    //add new item to list
    list.push(newItem);

    // update state with new list and reset newItem input
    this.setState({
      list,
      newItem: ""
    })
  }





  render() {
    return (
      <div>
        <div>
          Add item
          <br />
          <input type='text' placholder='Add item here' value={this.state.newItem} onChange={e => this.updateState('newItem', e.target.value)} />
          <button onClick={() => this.addItem()} >Add</button>
          <br />
          <ul>
            {this.state.list.map(item => {
              return (
                <li key={item.id}>
                  {item.value}
                  <button onClick={() => this.deleteItem(item.id)}>X</button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}






