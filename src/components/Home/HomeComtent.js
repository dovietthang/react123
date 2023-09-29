import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import CSS của AOS
import Section1 from "./Section1"; // Kiểm tra đường dẫn này
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";
import MySVG from "./MySVG";
function HomeComtent() {
  useEffect(() => {
    // Khởi tạo AOS khi component được render
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <div>
      <MySVG />
      <div class="wrapper" id="home-page-wrapper">
        <div id="resizable-container">
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
          <Section6 />
          <Section7 />
        </div>
      </div>
    </div>
  );
}

export default HomeComtent;
