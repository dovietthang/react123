import React, { useEffect } from "react";
import $ from "jquery";

function MySVG() {
  useEffect(() => {
    // Sử dụng jQuery trong useEffect
    $(window).on("load", function () {
      $(".dor-preloader").addClass("preloader-dor-animate");
      setTimeout(function () {
        $(".dor-preloader").removeClass("preloader-dor-animate");
      }, 1500);
      setTimeout(function () {
        $(".smooth-transition-loader").fadeOut();
      }, 2000);
    });
  }, []);
  return (
    <div class="smooth-transition-loader mimic-ajax">
      <div class="st-loader">
        <div class="st-loader1">
          <div class="dor-preloader">
            <svg
              x="0px"
              y="0px"
              width="400px"
              height="120px"
              viewBox="0 0 360 100"
              enable-background="new 0 0 277.667 119.667"
            >
              <path
                class="letter-1"
                fill="none"
                stroke="#FFFFFF"
                stroke-width="4"
                stroke-miterlimit="10"
                d="M6,69.3c0,6,2.1,10.9,6.2,15c4.1,4,9.1,5.9,15.1,5.9c6,0,11.1-1.9,15.3-5.8c4.2-3.9,6.3-8.9,6.3-14.9  c0-6.1-2-10.7-5.9-14c-1.7-1.4-6.9-3.9-6.9-3.9l-0.6-0.2c0,0-9-2.9-14.2-5c-4.8-1.9-6.6-3.3-7.6-4.2c-0.6-0.6-1.7-1.5-2.7-2.9  c-3.1-4.2-3.1-8.9-3.1-11c0-1.5,0-5.1,2-9.1c0.3-0.7,1.6-3.3,4.4-5.8c0.9-0.9,2.7-2.4,5.3-3.6c0.8-0.4,4.6-2.2,10-2.2  c1.7,0,5.3,0.1,9.4,2c1,0.5,3.3,1.7,5.7,3.9c2.7,2.6,4,5.3,4.4,6.1c1.7,3.6,1.9,7,1.9,8.9"
              />
              <path
                class="letter-2"
                fill="none"
                stroke="#FFFFFF"
                stroke-width="4"
                stroke-miterlimit="10"
                d="M137.8,19.8c-8.1-8.1-17.8-12.1-29.1-12.1c-11.4,0-21.1,4.1-29.2,12.2c-8,8.2-12,17.9-12,29.3  c0,11.1,4.1,20.6,12.3,28.6c8.1,7.9,17.7,11.9,28.9,11.9c11.2,0,20.9-4,29-12c8.2-8,12.2-17.6,12.2-28.9S145.9,27.9,137.8,19.8z"
              />
              <line
                class="line-2"
                fill="none"
                stroke="#FFFFFF"
                stroke-width="4"
                stroke-miterlimit="10"
                x1="84.8"
                y1="94.6"
                x2="134.7"
                y2="3.7"
              />
              <path
                class="letter-3"
                fill="none"
                stroke="#FFFFFF"
                stroke-width="4"
                stroke-miterlimit="10"
                d="M168.8,3.9v58c0,3,0.2,5.9,0.6,8.6c0.5,3.4,1.4,6.2,2.5,8.2c4.2,7.6,10.6,11.4,19.2,11.4  c8.6,0,15-3.8,19.2-11.4c1.1-2,2-4.8,2.5-8.2c0.4-2.7,0.7-5.6,0.7-8.6v-58"
              />
              <line
                class="line-3"
                fill="none"
                stroke="#FFFFFF"
                stroke-width="4"
                stroke-miterlimit="10"
                x1="228"
                y1="7.7"
                x2="282"
                y2="7.7"
              />
              <line
                class="line-2"
                fill="none"
                stroke="#FFFFFF"
                stroke-width="4"
                stroke-miterlimit="10"
                x1="255"
                y1="93.7"
                x2="255"
                y2="7.7"
              />
              <path
                class="letter-2"
                fill="none"
                stroke="#FFFFFF"
                stroke-width="4"
                stroke-miterlimit="10"
                d="M296,48.2h48"
              />
              <line
                class="line-3"
                fill="none"
                stroke="#FFFFFF"
                stroke-width="4"
                stroke-miterlimit="10"
                x1="344"
                y1="93.7"
                x2="344"
                y2="3.7"
              />
              <line
                class="line-2"
                fill="none"
                stroke="#FFFFFF"
                stroke-width="4"
                stroke-miterlimit="10"
                x1="296"
                y1="3.7"
                x2="296"
                y2="93.7"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MySVG;
