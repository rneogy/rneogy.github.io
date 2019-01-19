import React, { Component } from 'react';
import Link from './Link';

class Home extends Component {
  render() {
    return (
        <div className='row'>
            <div id='main-col' className='col text-right'>
                <div className='name animated fadeIn'>Rupayan Neogy</div>
                <div className="animated fadeIn delay-1s">
                    <div className='tagline'>A Vocal Developer</div>
                    <h2 className='mt-5'>Projects:</h2>
                    {this.props.content.map((c,i) => (
                        <Link 
                            fn={this.props.changePage}
                            args={[false, i]}
                            text={c.title}
                        />
                    ))}
                    <h1 className='mt-4'>
                        <a href='https://github.com/rneogy'><i className="fab fa-github-square"></i></a>
                        &nbsp;
                        <a href='https://www.linkedin.com/in/rupayan-neogy'><i className="fab fa-linkedin"></i></a>
                        &nbsp;
                        <a href='mailto:rneogy@mit.edu'><i className="fas fa-envelope-square"></i></a>
                    </h1>
                </div>
            </div>
        </div>
    );
  }
}

export default Home;
