/*
We used imrc to import the React component
We used cc to generate a class

Use Ctrl + Shift + P and write format to call prettier extension
*/

import React, { Component } from 'react';

class Counter extends Component {
  state = {
    value: this.props.counter.value,
    tags: [] //'tag1', 'tag2', 'tag3'
    //imageUrl: 'https://picsum.photos/200'
  };

  // constructor() {
  //     super();
  //     //this.handleIncrement = this.handleIncrement.bind(this);
  //     //console.log('this from constructor: ', this);
  // }

  handleIncrement = () => {
    //this.props.value = 0; //this shows that props is read-only 
    this.setState({ value: this.props.value + 1 });
    //console.log('Increment clicked', this);
  };

  render() {

    return (
      // <img src={this.state.imageUrl} alt="random image" />
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button 
        onClick={() => this.props.onDelete(this.props.counter.id)} 
        className="btn btn-danger btn-sm m-2">Delete</button>
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = 'badge m-2 badge-';
    classes += this.props.counter.value === 0 ? 'warning' : 'primary';
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? 'Zero' : count;
  }
}

export default Counter;
