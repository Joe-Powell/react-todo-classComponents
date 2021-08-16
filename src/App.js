
import React, { Component } from 'react';
import './css/style.css';





export default class App extends Component {
  constructor() {
    super();

    this.state = {
      newItem: "",
      list: []
    }

  }




  // grab values from input and make into state onChange

  updateState(key, value) {
    // update react state
    this.setState({
      [key]: value
    })
  }

  // ok

  deleteItem(id) {
    // current list of items
    const list = [...this.state.list];

    //filter out item being deleted
    const updatedList = list.filter(item => item.id !== id);

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

    console.log(typeof this.state.list)

    return (

      <div className='container'>
        <h2>To Do List</h2>
        <br />
        <form className="form">
          <input type='text' placholder='Add item here' value={this.state.newItem} onChange={e => this.updateState('newItem', e.target.value)} />
          <button className='addBtn' type='button' onClick={() => this.addItem()} >+</button>
        </form>
        <br />
        <div className='item'>
          {this.state.list.map(item => {
            return (
              <p key={item.id}>
                {item.value}
                <button onClick={() => this.deleteItem(item.id)}>✔</button>
              </p>
            )
          })
          }
        </div>
      </div>

    )


  }



}






