(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){},20:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(7),o=a.n(i),s=(a(15),a(17),a(1)),c=a(2),l=a(4),m=a(3),h=a(5),d=(a(20),a(8)),u=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).doFunction=function(){var e;(e=a.props).fn.apply(e,Object(d.a)(a.props.args))},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("h3",null,r.a.createElement("span",{className:"link",onClick:this.doFunction},this.props.text))}}]),t}(n.Component),p=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{id:"main-col",className:"col text-right"},r.a.createElement("div",{className:"name animated fadeIn"},"Rupayan Neogy"),r.a.createElement("div",{className:"animated fadeIn delay-1s"},r.a.createElement("div",{className:"tagline"},"A Vocal Developer"),r.a.createElement("h2",{className:"mt-5"},"Projects:"),this.props.content.map(function(t,a){return r.a.createElement(u,{fn:e.props.changePage,args:[!1,a],text:t.title})}),r.a.createElement("h1",{className:"mt-4"},r.a.createElement("a",{href:"https://github.com/rneogy"},r.a.createElement("i",{className:"fab fa-github-square"})),"\xa0",r.a.createElement("a",{href:"https://www.linkedin.com/in/rupayan-neogy"},r.a.createElement("i",{className:"fab fa-linkedin"})),"\xa0",r.a.createElement("a",{href:"mailto:rneogy@mit.edu"},r.a.createElement("i",{className:"fas fa-envelope-square"}))))))}}]),t}(n.Component),g=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.content.link?r.a.createElement("a",{className:"link h3",href:this.props.content.link},"Click here to see it in action!"):null;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{id:"main-col",className:"col text-right"},r.a.createElement("div",{className:"name animated fadeIn"},this.props.content.title),r.a.createElement("div",{className:"animated fadeIn delay-1s"},r.a.createElement("div",{className:"tagline"},this.props.content.tagline),r.a.createElement("h3",{className:"my-5"},this.props.content.description),e,r.a.createElement(u,{fn:this.props.changePage,args:[!0,-1],text:"Back"}))))}}]),t}(n.Component),f=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).changePage=function(e,t){a.setState({onHomePage:e,currentPage:t})},a.content=[{title:"Inspectre",tagline:"2D Puzzle Platformer",description:"Over the course of a semester, I created a video game with a group of 4 others for the class Advanced Game Studio. Our final product was a side-scrolling 2D puzzle platformer where the player utilizes his ability to transform into a spectral from to explore a mansion, possess every day objects, and solve puzzles. The overall gameplay experience runs between 30 minutes to an hour, with several rooms to explore and a light story arc."},{title:"Latte Art Simulator",tagline:"2D WebGL Fluid Simulation",description:"For the final project in my Graphics class, I implemented a Latte Art Simulator with a teammate. This involved learning the basics of 2D fluid simulation, picking up some WebGL background, and designing an aesthetically pleasing simulation for mixing cream into a cup of coffee.",link:"/6.837FluidSimulation"},{title:"ShapeShooter",tagline:"Hand-drawn 2D Shooter Game",description:"After creating Inspectre, I decided I wanted to test how quickly I could develop a new game now that I had experience with Unity.\n        I also wanted to learn more about creating art, since that wasn't my main focus in Inspectre. With this in mind, I set out to create a game in one weekend, drawing all the art for it myself.\n        The result was ShapeShooter, a challenging endless top-down shape-matching shooter.",link:"/ShapeShooter"},{title:"Orchestrate",tagline:"Gesture-based Conducting",description:"I designed a system that allowed users to conduct an audibly responsive orchestra with natural hand gestures. Users could adjust tempo\n        and dynamics on the fly, and they could even perform special gestures for effects such as fermatas. Simple voice commands were added as well to allow\n        for verbal control of dynamics."}],a.state={onHomePage:!0,currentPage:0},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e;if(this.state.onHomePage)e=r.a.createElement(p,{content:this.content,changePage:this.changePage});else{var t=this.content[this.state.currentPage];e=r.a.createElement(g,{content:t,index:this.state.currentPage,changePage:this.changePage})}return r.a.createElement("div",{className:"container"},e)}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(24)}},[[9,2,1]]]);
//# sourceMappingURL=main.403e60b8.chunk.js.map