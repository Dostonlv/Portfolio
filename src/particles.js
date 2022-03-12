import React from "react";
import particles_conf from "./particles.config";
import Particles from "react-particles-js";
const Particle = () => {
  return (
    <div>
      <Particles params={particles_conf} />
    </div>
  );
};

export default Particle;
