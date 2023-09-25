import React from "react";
import HomeComtent from "./HomeComtent";
import HomeWrapper from "./HomeWrapper";

// Import tệp CSS
import "../../Assets/Style/wp-includes/css/dist/block-library/style.min3781.css"; // Import tệp CSS
import "../../Assets/Style/wp-includes/css/classic-themes.min3781.css"; // Import tệp CSS
import "../../Assets/Style/wp-content/cache/min/1/wp-content/plugins/contact-form-7/includes/css/styles-584171c5f3615d6e5a70d2dccba64418.css"; // Import tệp CSS
import "../../Assets/Style/wp-content/plugins/table-of-contents-plus/screen.minb5ce.css"; // Import tệp CSS
import "../../Assets/Style/wp-content/cache/min/1/wp-content/themes/southteam/style-bda8a3e2a314d486574927ffb77d5bbe.css"; // Import tệp CSS
import "../../Assets/Style/wp-content/cache/min/1/wp-content/themes/southteam/css/font-awesome-c28910b13683dd0c7dd202fa7208389d.css"; // Import tệp CSS
import "../../Assets/Style/wp-content/cache/min/1/wp-content/themes/southteam/css/bootstrap-d1881920b8a3112ed740aa678f3b8d6c.css"; // Import tệp CSS
import "../../Assets/Style/wp-content/cache/min/1/wp-content/themes/southteam/css/aos-4df847f79c24d7a8dd5ed2983dbd3458.css"; // Import tệp CSS
import "../../Assets/Style/custuer.style.css"; // Import tệp CSS
// import "../../Assets/Style/"; // Import tệp CSS


function Home() {
  return (
    <div id="page" class="site">
      <HomeComtent />
      <HomeWrapper />
      <div class="panel-overlay"></div>
      <div class="zalo-fix"><a class="click--zalo" href="https://zalo.me/0367559981" target="_blank"></a></div>
      <div class="phone-fixed"> <a href="tel:0938049434" class="hotline-mobi" rel="nofollow">
        <div class="website-alo-phone">
          <div class="quydinh-tip quydinh-tip-2">0938.049.434</div>
          <div class="animated infinite zoomIn website-alo-ph-circle"></div>
          <div class="animated infinite pulse website-alo-ph-circle-fill"></div>
          <div class="animated infinite tada website-alo-ph-img-circle">
            <i class="fa fa-phone" aria-hidden="true"></i>
          </div>
        </div>
      </a>
      </div>
      <a href="#page" class="gotop"><i class="fa fa-chevron-up"></i></a>
    </div>
  );
}

export default Home;
