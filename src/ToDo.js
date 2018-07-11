import React from 'react';

export class ToDo extends React.Component {
  render(){
    return(
      <div>
      <h1>{this.props.todo}</h1>
      <button onClick = {() => this.props.deleteTodo(this.props.index)}>
          I am  done with {this.props.todo}</button>
      </div>
    );
  }
}


