import HomeComtent from "./HomeComtent";
import HomeWrapper from "./HomeWrapper";
import FooterFullWrapper from "./FooterFullWrapper";
import React, { useEffect } from "react";

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
  useEffect(() => {
    (function (w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({
        "gtm.start": new Date().getTime(),
        event: "gtm.js",
      });

      const f = d.getElementsByTagName(s)[0];
      const j = d.createElement(s);
      const dl = l !== "dataLayer" ? "&l=" + l : "";
      j.async = true;
      j.src = `https://www.googletagmanager.com/gtm5445.html?id=${i}${dl}`;

      f.parentNode.insertBefore(j, f);
    })(window, document, "script", "dataLayer", "GTM-WXPHX67");
  }, []); // Empty dependency array means this effect runs once after the component mounts

  return (
    <div id="content" class="site-content">
      <HomeComtent />
      <HomeWrapper />

    </div>
  );
}

export default Home;
