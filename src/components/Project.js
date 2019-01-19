import React, { Component } from 'react';
import Link from './Link';

class Project extends Component {

    render() {
        const link = this.props.content.link ? (
            <a className='link h3' href={this.props.content.link}>Click here to see it in action!</a>
        ) : null;
        return (
            <div className='row'>
                <div id='main-col' className='col text-right'>
                    <div className='name animated fadeIn'>{this.props.content.title}</div>
                    <div className="animated fadeIn delay-1s">
                        <div className='tagline'>{this.props.content.tagline}</div>
                        <h2 className='my-5'>{this.props.content.description}</h2>
                        {link}
                        <Link 
                            fn={this.props.changePage}
                            args={[true, -1]}
                            text='Back'
                        />
                    </div>
                </div>
            </div>
        );
  }
}

export default Project;
