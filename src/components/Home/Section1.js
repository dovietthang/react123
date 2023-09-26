import React from "react";
import logo from "../../Assets/Style/wp-content/themes/southteam/images/logo_1.png";

function Section1() {
  return (
    <section id="landing">
      <div id="particle-slider" style={{ height: "100vh" }}>
        <div class="slides">
          <div id="first-slide" class="slide" data-src={logo}></div>
        </div>
        <canvas class="draw"></canvas>
      </div>
    </section>
  );
}
export default Section1;
