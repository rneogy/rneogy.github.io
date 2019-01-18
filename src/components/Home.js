import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
        <div class='row'>
            <div id='main-col' class='col text-right'>
                <div class='name animated fadeIn'>Rupayan Neogy</div>
                <div class="animated fadeIn delay-1s">
                    <div class='tagline'>A Vocal Developer</div>
                    <h2 class='mt-5'>Projects:</h2>
                    <h3>
                        <a href="/6.837FluidSimulation" class='link'>2D Coffee (Fluid) Simulation in WebGL</a>
                    </h3>
                    <h3>
                        <a href="/ShapeShooter" class='link'>ShapeShooter (game created in 3 days)</a>
                    </h3>
                    <h1>
                        <a href='https://github.com/rneogy' class="fab fa-github-square"></a>&nbsp;
                        <a href='https://www.linkedin.com/in/rupayan-neogy' class="fab fa-linkedin"></a>
                    </h1>
                </div>
            </div>
        </div>
    );
  }
}

export default Home;
