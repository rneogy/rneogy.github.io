import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home";
import Project from "./components/Project";

class App extends Component {
  constructor(props) {
    super(props);

    this.content = [
      {
        title: "Inspectre",
        tagline: "2D Puzzle Platformer",
        description:
          "Over the course of a semester, I created a video game with a group of 4 others for the class Advanced Game Studio. Our final product was a side-scrolling 2D puzzle platformer where the player utilizes his ability to transform into a spectral from to explore a mansion, possess every day objects, and solve puzzles. The overall gameplay experience runs between 30 minutes to an hour, with several rooms to explore and a light story arc."
      },
      {
        title: "Latte Art Simulator",
        tagline: "2D WebGL Fluid Simulation",
        description:
          "For the final project in my Graphics class, I implemented a Latte Art Simulator with a teammate. This involved learning the basics of 2D fluid simulation, picking up some WebGL background, and designing an aesthetically pleasing simulation for mixing cream into a cup of coffee.",
        link: "/6.837FluidSimulation"
      },
      {
        title: "ShapeShooter",
        tagline: "Hand-drawn 2D Shooter Game",
        description: `After creating Inspectre, I decided I wanted to test how quickly I could develop a new game now that I had experience with Unity.
        I also wanted to learn more about creating art, since that wasn't my main focus in Inspectre. With this in mind, I set out to create a game in one weekend, drawing all the art for it myself.
        The result was ShapeShooter, a challenging endless top-down shape-matching shooter.`,
        link: "/ShapeShooter"
      },
      {
        title: "Orchestrate",
        tagline: "Gesture-based Conducting",
        description: `I designed a system that allowed users to conduct an audibly responsive orchestra with natural hand gestures. Users could adjust tempo
        and dynamics on the fly, and they could even perform special gestures for effects such as fermatas. Simple voice commands were added as well to allow
        for verbal control of dynamics.`
      },
      {
        title: "Spotify Explorer",
        tagline: "Interactive and Animated Data using D3",
        description: `I created this web-app as an assignment for MIT's Interactive Data Visualization class (6.894). 
        The experience focuses on dynamic and interesting interaction techniques using d3.js. I built this visualization 
        over the course of a couple weeks on a team of two others.`,
        link: "/Spotify-Explorer"
      }
    ];

    this.state = {
      onHomePage: true,
      currentPage: 0
    };
  }

  changePage = (homePage, i) => {
    this.setState({
      onHomePage: homePage,
      currentPage: i
    });
  };

  render() {
    let el;
    if (this.state.onHomePage) {
      el = <Home content={this.content} changePage={this.changePage} />;
    } else {
      const content = this.content[this.state.currentPage];
      el = (
        <Project
          content={content}
          index={this.state.currentPage}
          changePage={this.changePage}
        />
      );
    }
    return <div className="container">{el}</div>;
  }
}

export default App;
