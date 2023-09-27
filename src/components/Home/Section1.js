import logo from "../../Assets/Style/wp-content/themes/southteam/images/logo_1.png";
import { useCallback } from "react";
import Particles from "react-particles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

function Section1() {
      const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadSlim(engine);
      }, []);

      const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
      }, []);
  return (
    <section id="landing">
      <Particles
        id="tsparticles"
        url="http://foo.bar/particles.json"
        init={particlesInit}
        loaded={particlesLoaded}
      />

      {/* <div id="particle-slider" style={{ height: "100vh" }}>
        <div class="slides">
          <div
            id="first-slide"
            class="slide"
            data-src="../../Assets/Style/wp-content/themes/southteam/images/logo_1.png"
          ></div>
        </div>
        <canvas class="draw"></canvas>
      </div> */}
    </section>
  );
}
export default Section1;
