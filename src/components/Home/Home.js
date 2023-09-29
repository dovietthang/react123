import HomeComtent from "./HomeComtent";
import HomeWrapper from "./HomeWrapper";
import GoogleTagManager from "./GoogleTagManager";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

// Import tệp CSS
import "../../Assets/Style/wp-content/cache/min/1/wp-content/themes/southteam/style-bda8a3e2a314d486574927ffb77d5bbe.css"; // Import tệp CSS
import "../../Assets/Style/wp-content/cache/min/1/wp-content/themes/southteam/css/font-awesome-c28910b13683dd0c7dd202fa7208389d.css"; // Import tệp CSS
import "../../Assets/Style/wp-content/cache/min/1/wp-content/themes/southteam/css/bootstrap-d1881920b8a3112ed740aa678f3b8d6c.css"; // Import tệp CSS

function Home() {
  useEffect(() => {
    // Đoạn mã JavaScript của bạn
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
      <GoogleTagManager/>
      <HomeComtent />
      <HomeWrapper />
      <Helmet>
        <script type="text/javascript">
          {`
            // Đoạn mã JavaScript của bạn
            var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
            (function () {
              var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
              s1.async = true;
              s1.src = 'https://embed.tawk.to/5aa4e7f3d7591465c70874ab/default';
              s1.charset = 'UTF-8';
              s1.setAttribute('crossorigin', '*');
              s0.parentNode.insertBefore(s1, s0);
            })();
          `}
        </script>
      </Helmet>
    </div>
  );
}

export default Home;
