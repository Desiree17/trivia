import React, { Component } from 'react';
// import components


class Question extends Component {
  
  render() {
    return (
      <div>
        {this.props.questiontext}
        </div>
    );
  }
}

export default Question;