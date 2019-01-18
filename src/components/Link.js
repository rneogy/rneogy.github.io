import React, { Component } from 'react';

class Link extends Component {

    doFunction = () => {
        this.props.fn(...this.props.args);
    }

    render() {
        return (
            <h3>
                <span className='link' onClick={this.doFunction}>{this.props.text}</span>
            </h3>
        );
  }
}

export default Link;
