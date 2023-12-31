import React from "react";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <footer id="colophon" class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="site-info"> © Copyright 2014. Designed by SouthTeam - Bản quyền thiết kế web thuộc về SouthTeam
            </div>
          </div>
          <div class="col-lg-6"></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
