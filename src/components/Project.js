import React, { Component } from 'react';
import Link from './Link';

class Project extends Component {

    render() {
        return (
            <div className='row'>
                <div id='main-col' className='col text-right'>
                    <div className='name animated fadeIn'>{this.props.title}</div>
                    <div className="animated fadeIn delay-1s">
                        <div className='tagline'>{this.props.tagline}</div>
                        <h2 className='mt-5'>{this.props.description}</h2>
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
