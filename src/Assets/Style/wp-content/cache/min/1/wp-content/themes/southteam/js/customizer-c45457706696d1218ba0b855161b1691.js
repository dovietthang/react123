jQuery(function () {
  jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() >= 200) {
      jQuery("header#masthead").addClass("fixed");
      jQuery(".gotop").css({ right: "15px" });
    } else {
      jQuery("header#masthead").removeClass("fixed");
      jQuery(".gotop").css({ right: "-55px" });
    }
  });
  jQuery("a.gotop").click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = jQuery(this.hash);
      target = target.length
        ? target
        : jQuery("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        jQuery("html,body").animate(
          { scrollTop: target.offset().top - 50 },
          1000
        );
        return !1;
      }
    }
  });
});
jQuery(function () {
  jQuery("a.mobile-menu,.panel-overlay").click(function () {
    jQuery(".primery-menu,.panel-overlay, a.mobile-menu").toggleClass(
      "display"
    );
  });
  jQuery(".menu-item-has-children").prepend(
    '<i class="fa fa-plus d-lg-none"></i>'
  );
  jQuery(".menu-item-has-children i.fa").click(function () {
    jQuery(this).toggleClass("submenu-opened");
    if (jQuery(this).siblings("ul").hasClass("open")) {
      jQuery(this).siblings("ul").removeClass("open").slideUp();
    } else {
      jQuery(this).siblings("ul").addClass("open").slideDown();
    }
  });
});
window.settings = {
  google_analytics_enabled: !0,
  map_enabled: !0,
  static_url_prefix: "/static/",
  particle_slider_enabled: !0,
};
