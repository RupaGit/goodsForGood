import React, { Children,Component }  from "react";
import "./style.css";
import ParticlesBg from 'particles-bg'
import WAVES from 'vanta/dist/vanta.waves.min'
import * as THREE from 'three'



// export default function GFGanimationContainer(props) {
//   let config = {
//     num: [4, 7],
//     rps: 0.1,
//     radius: [5, 40],
//     life: [1.5, 3],
//     v: [2, 3],
//     tha: [-40, 40],
//     alpha: [0.6, 0],
//     scale: [.1, 0.4],
//     position: "all",
//     color: ["random", "#ff0000"],
//     cross: "dead",
//     // emitter: "follow",
//     random: 15
//   };

//   if (Math.random() > 0.85) {
//     config = Object.assign(config, {
//       onParticleUpdate: (ctx, particle) => {
//         ctx.beginPath();
//         ctx.rect(
//           particle.p.x,
//           particle.p.y,
//           particle.radius * 2,
//           particle.radius * 2
//         );
//         ctx.fillStyle = particle.color;
//         ctx.fill();
//         ctx.closePath();
//       }
//     });
//   }
//   return (
//      <ParticlesBg className="animaon" type="cobweb" bg={true}/>
     
   
//   );
// }
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

class GFGanimationContainer extends React.Component {
  constructor() {
    super()
    this.vantaRef = React.createRef()
  }
  componentDidMount() {
    this.vantaEffect = WAVES({
      el: this.vantaRef.current, mouseControls: true,
      touchControls: true,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x5da8ac,
      THREE: THREE // use a custom THREE when initializing
    })
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy()
  }
  render() {
    return <div className="animaon" ref={this.vantaRef}/>
  }
}
export default GFGanimationContainer