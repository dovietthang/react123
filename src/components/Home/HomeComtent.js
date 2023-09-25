import React, { useEffect } from "react";
import $ from "jquery";

import qt from "../../Assets/Style/wp-content/themes/southteam/images/qt.png";
// import qt2 from "../../Assets/Style/wp-content/themes/southteam/images/qt2.png";
// import qt3 from "../../Assets/Style/wp-content/themes/southteam/images/qt3.png";
// import qt4 from "../../Assets/Style/wp-content/themes/southteam/images/qt4.png";
// import qt5 from "../../Assets/Style/wp-content/themes/southteam/images/qt5.png";

function HomeComtent() {
  useEffect(() => {
    // Sử dụng jQuery trong useEffect
    $(window).on('load', function () {
      $(".dor-preloader").addClass("preloader-dor-animate");
      setTimeout(function () {
        $(".dor-preloader").removeClass("preloader-dor-animate");
      }, 1500);
      setTimeout(function () {
        $(".smooth-transition-loader").fadeOut();
      }, 2000);
    });


    //   var init = function () {
    //     var isMobile = navigator.userAgent &&
    //       navigator.userAgent.toLowerCase().indexOf('mobile') >= 0;
    //     var isSmall = window.innerWidth < 1000;

    //     var ps = new ParticleSlider({
    //       ptlGap: isMobile || isSmall ? 3 : 0,
    //       ptlSize: isMobile || isSmall ? 3 : 1,
    //       width: 1e9,
    //       height: 1e9
    //     });

    //     (window.addEventListener
    //       ? window.addEventListener('click', function () { ps.init(true) }, false)
    //       : window.onclick = function () { ps.init(true) });
    //   };

    //   var initParticleSlider = function () {
    //     var psScript = document.createElement('script');
    //     (psScript.addEventListener
    //       ? psScript.addEventListener('load', init, false)
    //       : psScript.onload = init);
    //     psScript.src = 'wp-content/themes/southteam/js/build.js';
    //     psScript.setAttribute('type', 'text/javascript');
    //     document.body.appendChild(psScript);
    //   };

    //   (window.addEventListener
    //     ? window.addEventListener('load', initParticleSlider, false)
    //     : window.onload = initParticleSlider);
  }, []);

  return (
    <div id="content" class="site-content">
      <div class="smooth-transition-loader mimic-ajax">
        <div class="st-loader">
          <div class="st-loader1">
            <div class="dor-preloader"> <svg x="0px" y="0px" width="400px" height="120px" viewBox="0 0 360 100"
              enable-background="new 0 0 277.667 119.667">
              <path class="letter-1" fill="none" stroke="#FFFFFF" stroke-width="4" stroke-miterlimit="10"
                d="M6,69.3c0,6,2.1,10.9,6.2,15c4.1,4,9.1,5.9,15.1,5.9c6,0,11.1-1.9,15.3-5.8c4.2-3.9,6.3-8.9,6.3-14.9  c0-6.1-2-10.7-5.9-14c-1.7-1.4-6.9-3.9-6.9-3.9l-0.6-0.2c0,0-9-2.9-14.2-5c-4.8-1.9-6.6-3.3-7.6-4.2c-0.6-0.6-1.7-1.5-2.7-2.9  c-3.1-4.2-3.1-8.9-3.1-11c0-1.5,0-5.1,2-9.1c0.3-0.7,1.6-3.3,4.4-5.8c0.9-0.9,2.7-2.4,5.3-3.6c0.8-0.4,4.6-2.2,10-2.2  c1.7,0,5.3,0.1,9.4,2c1,0.5,3.3,1.7,5.7,3.9c2.7,2.6,4,5.3,4.4,6.1c1.7,3.6,1.9,7,1.9,8.9" />
              <path class="letter-2" fill="none" stroke="#FFFFFF" stroke-width="4" stroke-miterlimit="10"
                d="M137.8,19.8c-8.1-8.1-17.8-12.1-29.1-12.1c-11.4,0-21.1,4.1-29.2,12.2c-8,8.2-12,17.9-12,29.3  c0,11.1,4.1,20.6,12.3,28.6c8.1,7.9,17.7,11.9,28.9,11.9c11.2,0,20.9-4,29-12c8.2-8,12.2-17.6,12.2-28.9S145.9,27.9,137.8,19.8z" />
              <line class="line-2" fill="none" stroke="#FFFFFF" stroke-width="4" stroke-miterlimit="10" x1="84.8"
                y1="94.6" x2="134.7" y2="3.7" />
              <path class="letter-3" fill="none" stroke="#FFFFFF" stroke-width="4" stroke-miterlimit="10"
                d="M168.8,3.9v58c0,3,0.2,5.9,0.6,8.6c0.5,3.4,1.4,6.2,2.5,8.2c4.2,7.6,10.6,11.4,19.2,11.4  c8.6,0,15-3.8,19.2-11.4c1.1-2,2-4.8,2.5-8.2c0.4-2.7,0.7-5.6,0.7-8.6v-58" />
              <line class="line-3" fill="none" stroke="#FFFFFF" stroke-width="4" stroke-miterlimit="10" x1="228"
                y1="7.7" x2="282" y2="7.7" />
              <line class="line-2" fill="none" stroke="#FFFFFF" stroke-width="4" stroke-miterlimit="10" x1="255"
                y1="93.7" x2="255" y2="7.7" />
              <path class="letter-2" fill="none" stroke="#FFFFFF" stroke-width="4" stroke-miterlimit="10"
                d="M296,48.2h48" />
              <line class="line-3" fill="none" stroke="#FFFFFF" stroke-width="4" stroke-miterlimit="10" x1="344"
                y1="93.7" x2="344" y2="3.7" />
              <line class="line-2" fill="none" stroke="#FFFFFF" stroke-width="4" stroke-miterlimit="10" x1="296"
                y1="3.7" x2="296" y2="93.7" />
            </svg></div>
          </div>
        </div>
      </div>
      <div class="wrapper" id="home-page-wrapper">
        <div id="resizable-container">
          <section id="landing">
            <div id="particle-slider" style={{ height: '100vh' }}>
              <div class="slides">
                <div id="first-slide" class="slide" data-src="wp-content/themes/southteam/images/logo_1.png"></div>
              </div><canvas class="draw"></canvas>
            </div>
          </section>
          <section id="why-choose-us">
            <div class="container">
              <div class="why-left text-center">
                <h2 class="red text-shadown">Quy trình làm việc chuyên nghiệp</h2>
                <p class="text">Sở hữu hàng trăm mẫu giao diện thiết kế hiện đại,
                  tích hợp đầy đủ chức năng giúp bạn có thể dễ dàng thao tác chỉnh sửa theo mong muốn.
                  Website dễ dàng lên TOP Google trong lần đầu submit. Cam kết không phát sinh bất kì thêm chi phí nào.
                </p>
                <div class="why-modul">
                  <div class="row">
                    <div class="col-md col-6">
                      <div class="process-step mb-3" data-aos="fade-right" data-aos-duration="1500">
                        <div class="row">
                          <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="st-icon step1-icon">
                              <img src={qt} className="img-fluid logo" alt="Thiết kế Website chuyên nghiệp uy tín" />
                            </div>
                          </div>
                          <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="step-ct st1">
                              <span>Tìm hiểu và tư vấn<br /> xây dựng Website</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md col-6">
                      <div class="process-step mb-3" data-aos="fade-right" data-aos-duration="1500">
                        <div class="row">
                          <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="st-icon step2-icon">
                              <img src="../../Assets/Style/wp-content/themes/southteam/images/qt2.png" alt="Thiết kế Website tại tphcm" />
                            </div>
                          </div>
                          <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="step-ct st2"> <span>Báo giá, tạo ý tưởng <br />&amp; Demo giao diện Website</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md col-6">
                      <div class="process-step mb-3" data-aos="fade-bottom" data-aos-duration="1500">
                        <div class="row">
                          <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="st-icon step3-icon">
                              <img src="../../Assets/Style/wp-content/themes/southteam/images/qt3.png"
                                alt="Thiết kế Website uy tín" />
                            </div>
                          </div>
                          <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="step-ct st3"> <span>Ký hợp đồng <br />thiết kế Website</span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md col-6">
                      <div class="process-step mb-3" data-aos="fade-left" data-aos-duration="1500">
                        <div class="row">
                          <div class="col-md-12 col-ms-12 col-xs-12">
                            <div class="st-icon step4-icon"> <img src="../../Assets/Style/wp-content/themes/southteam/images/qt4.png"
                              alt="Thiết kế Website uy tín giá rẻ tại tphcm" /></div>
                          </div>
                          <div class="col-md-12 col-ms-12 col-xs-12">
                            <div class="step-ct st4"> <span>Xây dựng Module <br />&amp; hoàn thiện Website</span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md">
                      <div class="process-step" data-aos="fade-left" data-aos-duration="1500">
                        <div class="row">
                          <div class="col-md-12 col-ms-12 col-xs-12">
                            <div class="st-icon step5-icon"> <img src="../../Assets/Style/wp-content/themes/southteam/images/qt5.png"
                              alt="Nghiệm thu thanh lý hợp đồng" /></div>
                          </div>
                          <div class="col-md-12 col-ms-12 col-xs-12">
                            <div class="step-ct st5"> <span>Nghiệm thu, thanh lý HĐ <br />&amp; Chuyển giao công
                              nghệ</span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="featured">
            <div className="featured-1" style={{ backgroundImage: 'url("../../Assets/Style/wp-content/uploads/2018/11/bg-do.jpg")', backgroundSize: '100%', padding: '25px 0' }}>
              <div class="container">
                <div class="row">
                  <div class="col-md-6">
                    <div class="featured-content">
                      <h3>Giao diện chuyên nghiệp, đẹp mắt</h3>
                      <ul>
                        <li data-aos="slide-right" data-aos-duration="1500" data-aos-anchor-placement="center-bottom">
                          Giao diện cực nhẹ, tải trang cực nhanh</li>
                        <li data-aos="slide-right" data-aos-duration="1500" data-aos-anchor-placement="center-bottom">Sử
                          dụng các công nghệ tiên tiến cho hiệu ứng bắt mắt</li>
                        <li data-aos="slide-right" data-aos-duration="1500" data-aos-anchor-placement="center-bottom">
                          Đầy đủ các chức năng, tương thích với mọi thiết bị</li>
                        <li data-aos="slide-right" data-aos-duration="1500" data-aos-anchor-placement="center-bottom">
                          Chuẩn SEO, lên TOP google ngay lần đầu Submit</li>
                        <li data-aos="slide-right" data-aos-duration="1500" data-aos-anchor-placement="center-bottom">
                          Bảo hành, bảo trì không phát sinh chi phí</li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="featured-img" data-aos="zoom-in" data-aos-duration="2000"
                      data-aos-anchor-placement="center-bottom"> <img
                        src="wp-content/themes/southteam/images/featured-1.png"
                        alt="Thiết kế Website chuyên nghiệp uy tín" /></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="needed-reason">
            <div class="container">
              <h1>Hãy chọn nhu cầu thiết kế website của bạn</h1>
              <div class="needed-reason-content">
                <div class="item">
                  <div class="kode-financial-silde"> <a href="thiet-ke-website-doanh-nghiep/index.html" rel="nofollow">
                    <i class="fa fa-briefcase"></i>
                    <h6>Thiết kế website</h6>
                    <h3>Giới thiệu - Doanh Nghiệp</h3>
                    <p>Phát triển và thúc đẩy doanh nghiệp, gia tăng giá trị thương hiệu</p>
                  </a></div>
                </div>
                <div class="item center">
                  <div class="kode-financial-silde center"> <a href="thiet-ke-website-theo-yeu-cau/index.html"
                    rel="nofollow"><i class="fa fa-recycle"></i>
                    <h6>Thiết kế website</h6>
                    <h3>Theo yêu cầu</h3>
                    <p>Bạn chỉ cần tập trung vào dịch vụ của mình, Phát triển tất cả chức năng phù hợp với nhu cầu của
                      bạn hãy để chúng tôi</p> <a href="thiet-ke-website-theo-yeu-cau/index.html"
                        style={{ position: 'relative', zIndex: '9' }} rel="nofollow"><span>Xem chi tiết</span></a>
                  </a></div>
                </div>
                <div class="item">
                  <div class="kode-financial-silde"> <a href="thiet-ke-website-ban-hang/index.html" rel="nofollow"><i
                    class="fa fa-shopping-cart"></i>
                    <h6>Thiết kế website</h6>
                    <h3>Shop bán hàng</h3>
                    <p>Bạn chỉ cần nâng cao chất lượng sản phẩm của mình, tiếp cận và bán hàng online là nhiệm vụ của
                      chúng tôi</p>
                  </a></div>
                </div>
                <div class="clearfix"></div>
              </div>
              <h2>Hoặc chọn theo nghành nghề của bạn để chọn giao diện phù hợp nhất</h2>
              <div class="cat-thumb">
                <ul class="list-cat">
                  <li><a href="danh-muc/mau-giao-dien-website-ban-hang.html" title="Mẫu Website bán hàng"><img
                    src="../../Assets/Style/wp-content/uploads/2022/01/006-online-shopping.png" alt="Mẫu Website bán hàng" />
                    <h5>Mẫu Website bán hàng</h5>
                  </a></li>
                  <li><a href="danh-muc/mau-website-bds.html" title="Mẫu Website BĐS"><img
                    src="../../Assets/Style/wp-content/uploads/2022/01/005-house.png" alt="Mẫu Website BĐS" />
                    <h5>Mẫu Website BĐS</h5>
                  </a></li>
                  <li><a href="danh-muc/mau-website-du-lich.html" title="Mẫu Website du lịch"><img
                    src="../../Assets/Style/wp-content/uploads/2022/01/007-map.png" alt="Mẫu Website du lịch" />
                    <h5>Mẫu Website du lịch</h5>
                  </a></li>
                  <li><a href="danh-muc/mau-website-giao-duc.html" title="Mẫu Website giáo dục"><img
                    src="../../Assets/Style/wp-content/uploads/2022/01/004-education.png" alt="Mẫu Website giáo dục" />
                    <h5>Mẫu Website giáo dục</h5>
                  </a></li>
                  <li><a href="danh-muc/mau-website-gioi-thieu.html" title="Mẫu Website giới thiệu"><img
                    src="../../Assets/Style/wp-content/uploads/2022/01/002-monitoring.png" alt="Mẫu Website giới thiệu" />
                    <h5>Mẫu Website giới thiệu</h5>
                  </a></li>
                  <li><a href="danh-muc/mau-website-my-pham.html" title="Mẫu Website mỹ phẩm"><img
                    src="../../Assets/Style/wp-content/uploads/2022/01/008-cosmetics.png" alt="Mẫu Website mỹ phẩm" />
                    <h5>Mẫu Website mỹ phẩm</h5>
                  </a></li>
                  <li><a href="danh-muc/mau-website-nha-hang-am-thuc.html" title="Mẫu Website nhà hàng ẩm thực"><img
                    src="../../Assets/Style/wp-content/uploads/2022/01/001-restaurant.png" alt="Mẫu Website nhà hàng ẩm thực" />
                    <h5>Mẫu Website nhà hàng ẩm thực</h5>
                  </a></li>
                  <li><a href="danh-muc/mau-website-thoi-trang.html" title="Mẫu Website thời trang"><img
                    src="../../Assets/Style/wp-content/uploads/2022/01/009-fashion.png" alt="Mẫu Website thời trang" />
                    <h5>Mẫu Website thời trang</h5>
                  </a></li>
                  <li><a href="danh-muc/mau-website-tin-tuc.html" title="Mẫu Website tin tức"><img
                    src="../../Assets/Style/wp-content/uploads/2022/01/010-news.png" alt="Mẫu Website tin tức" />
                    <h5>Mẫu Website tin tức</h5>
                  </a></li>
                  <li><a href="danh-muc/mau-website-o-to.html" title="Mẫu Website Xe cộ"><img
                    src="../../Assets/Style/wp-content/uploads/2022/01/011-car-rental.png" alt="Mẫu Website Xe cộ" />
                    <h5>Mẫu Website Xe cộ</h5>
                  </a></li>
                </ul>
                <div class="clearfix"></div>
              </div>
            </div>
          </section>
          <section class="services pt-4 pb-4">
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-4 col-sm-12 col-xs-12">
                  <div class="section-title">
                    <h1 class="rotate-title text-shadown red float-md-right text-center">Dịch vụ</h1>
                  </div>
                </div>
                <div class="col-md-8 col-sm-12 col-xs-12">
                  <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-6">
                      <div class="block-portfolio "> <a class="overlay" href="dich-vu/thiet-ke-website/index.html"></a>
                        <span class="rotate-status rotate-title">Web Design</span>
                        <img alt="" class="img-responsive"
                          src="../../Assets/Style/wp-content/uploads/2017/12/blog8.jpg" />
                        <img alt="" class="img-additional" src="../../Assets/Style/wp-content/uploads/2018/10/10.png"
                        />
                        <div class="portfolio-info"> <span class="project-name font-weight-bold text-uppercase">Thiết kế
                          Website</span> <span class="project-category text-shadown">Thiết kế hiện đại theo ý tưởng
                            khách hàng</span></div>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6">
                      <div class="block-portfolio"> <a class="overlay" href="dich-vu/google-adwords/index.html"></a>
                        <span class="rotate-status rotate-title">Google Adwords</span> <img alt=""
                          class="img-responsive" src="../../Assets/Style/wp-content/uploads/2018/10/bg-adsw.jpg"
                        /> <img alt="" class="img-additional"
                          src="../../Assets/Style/wp-content/uploads/2017/12/adwords.png" />
                        <div class="portfolio-info fadeInUp animated"> <span
                          class="project-name font-weight-bold text-uppercase">Google Adwords</span> <span
                            class="project-category text-shadown">Quảng cáo trên Google</span></div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                      <div class="block-portfolio"> <a class="overlay"
                        href="dich-vu/dich-vu-quan-tri-website/index.html"></a> <span
                          class="rotate-status rotate-title">Quản trị Website</span> <img alt="" class="img-responsive"
                            src="../../Assets/Style/wp-content/uploads/2017/12/blog2.jpg" /> <img alt=""
                              class="img-additional" src="../../Assets/Style/wp-content/uploads/2018/10/cateloge_1.png"
                        />
                        <div class="portfolio-info"> <span class="project-name font-weight-bold text-uppercase">Quản trị
                          Website</span> <span class="project-category text-shadown">Cập nhật nội dung Website</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                      <div class="block-portfolio"> <a class="overlay" href="dich-vu/marketing-online/index.html"></a>
                        <span class="rotate-status rotate-title">Marketing Online</span> <img alt=""
                          class="img-responsive" src="../../Assets/Style/wp-content/uploads/2017/12/blog1.jpg"
                        /> <img alt="" class="img-additional"
                          src="../../Assets/Style/wp-content/uploads/2018/10/34.png" />
                        <div class="portfolio-info"> <span
                          class="project-name font-weight-bold text-uppercase">Marketing Online </span> <span
                            class="project-category text-shadown">Chiến lược tổng thể tiếp cận KH online</span></div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                      <div class="block-portfolio"> <a class="overlay" href="dich-vu/viet-bai-chuan-seo/index.html"></a>
                        <span class="rotate-status rotate-title">Viết bài chuẩn SEO</span> <img alt=""
                          class="img-responsive" src="../../Assets/Style/wp-content/uploads/2017/12/blog7.jpg" />
                        <img alt="" class="img-additional" src="../../Assets/Style/wp-content/uploads/2018/10/11.png"
                        />
                        <div class="portfolio-info"> <span class="project-name font-weight-bold text-uppercase">Viết bài
                          chuẩn SEO </span> <span class="project-category text-shadown">Cung cấp bài viết chỉ từ
                            25000đ/bài</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div class="featured-2" style={{ backgroundColor: '#f7f7f7', padding: '25px 0' }}>
              <div class="container">
                <div class="row mb-4">
                  <div class="col-md-4">
                    <div data-aos="zoom-in" data-aos-duration="2000" data-aos-anchor-placement="center-bottom"> <img
                      src="../../Assets/Style/wp-content/uploads/2018/03/thiet-ke-website.png"
                      alt="Thiết kế Website chuyên nghiệp South Team" /></div>
                  </div>
                  <div class="col-md-8">
                    <div class="featured-content" data-aos="zoom-in" data-aos-duration="1000"
                      data-aos-anchor-placement="center-bottom">
                      <h2>Thiết kế Website chuyên nghiệp South Team</h2>
                      <p> Với tốc độ phát triển Internet cao hiện nay, xu hướng người dùng tìm kiếm thông tin trên
                        Internet ngày càng tăng. Đây là thị trường thu nhỏ của việc kinh doanh truyền thống, hình thức
                        kinh doanh trên Internet đã ra đời. Trong xu thế đó, việc các cá nhân, doanh nghiệp cần thiết kế
                        một website chuyên nghiệp là rất cần thiết.</p>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-8">
                    <div class="featured-content" data-aos="fade-right" data-aos-duration="2000"
                      data-aos-anchor-placement="center-bottom">
                      <h2 class="text-uppercase text-left">Thiết kế website chuyên nghiệp là gì?</h2>
                      <p>Thiết kế web hay thiết kế website đơn giản là công việc tạo một trang web cho cá nhân, công ty,
                        doanh nghiệp hoặc tổ chức. Có 2 phương thức chính để thiết kế:</p>
                      <p><strong>Thiết kế web tĩnh</strong> là sử dụng các đoạn mã HTML (HTML5), hình ảnh, Video, Audio,
                        Flash, Javascript (jQuery) và CSS để tạo một giao diện cho trang web.</p>
                      <p><strong>Thiết kế web động</strong> là thiết kế website chuyên nghiệp, có hệ thống cơ sở dữ liệu
                        dùng để cung cấp thông tin cho website, có khả năng quản lý dữ liệu tốt, tương tác trên hệ
                        thống, dễ cập nhật nội dung và thêm các tính năng tiện ích quản lý cho doanh nghiệp, thân thiện
                        với người dùng.</p>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div data-aos="fade-left" data-aos-duration="2000" data-aos-anchor-placement="center-bottom"> <img
                      src="../../Assets/Style/wp-content/uploads/2019/08/bg_gt_3.png" alt="Thiết kế Website chuyên nghiệp tại tphcm" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="bg-white py-5 d-none">
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <h2 class="text-danger font-blackout mb-3 font-20" data-aos="slide-right" data-aos-duration="2000"
                    data-aos-anchor-placement="bottom-bottom">Ưu điểm của thiết kế Website chuyên nghiệp tại South Team
                  </h2>
                  <div class="featured-content">
                    <ul>
                      <li data-aos="slide-right" data-aos-duration="1500" data-aos-anchor-placement="center-bottom">Mang
                        lại các giao dịch thương mại to lớn, hiệu quả cao, tăng doanh thu.</li>
                      <li data-aos="slide-right" data-aos-duration="1500" data-aos-anchor-placement="center-bottom">Mang
                        lại lượt tìm kiếm và số lượng lượt xem hấp dẫn, tạo ấn tượng, niềm tin cho người tham quan
                        website</li>
                      <li data-aos="slide-right" data-aos-duration="1500" data-aos-anchor-placement="center-bottom">Mang
                        lại lợi ích trực tiếp tới hiệu quả bán hàng, giới thiệu sản phẩm, là cầu nối cung-cầu, tạo lên
                        một sàn giao dịch Internet phong phú và hấp dẫn</li>
                      <li data-aos="slide-right" data-aos-duration="1500" data-aos-anchor-placement="center-bottom">rao
                        đổi thông tin hàng hóa sản phẩm, dịch vụ của mình tới người tiêu dùng. Là kênh phân phối ít chi
                        phí nhất, kinh doanh hiệu quả nhất, mọi lúc, mọi nơi.</li>
                      <li data-aos="slide-right" data-aos-duration="1500" data-aos-anchor-placement="center-bottom">Niêm
                        yết thông tin giao dịch trên sàn giao dịch Internet.</li>
                    </ul>
                  </div>
                </div>
                <div class="col-lg-12">
                  <h2 class="mb-3 font-20" data-aos="slide-left" data-aos-duration="2000"
                    data-aos-anchor-placement="bottom-bottom"
                    style={{
                      border: '1px dashed #007bff',
                      color: '#007bff',
                      display: 'inline-block',
                      padding: '5px 10px',
                    }}>
                    Thiết kế website chuyên nghiệp với South Team, tại sao không ?</h2>
                  <p> <a href="dich-vu/thiet-ke-website/index.html">Thiết kế Website South Team</a> là đội ngũ thiết kế
                    website chuyên nghiệp uy tín, áp dụng mọi công nghệ tiên tiến nhất hiện nay. Tương thích với mọi
                    thiết bị, dễ dàng lên TOP Google. Không bình thường là một website, giá trị chúng tôi đem lại cho
                    khách hàng của mình là sự hiệu quả của khi tiếp cận khách hàng trên Internet.Chúng tôi cung cấp dịch
                    vụ thiết kế website chuyên nghiệp , cam kết cho ra những sản phẩm thiết kế website chuyên nghiệp,
                    hiệu quả cùng với khả năng tương thích cao trên mọi nền tảng cũng như tính thẩm mỹ, ứng dụng cao
                    trên các công cụ tìm kiếm. Vì thế, <strong>South Team</strong> luôn phục vụ tốt nhất để đáp ứng mong
                    muốn của khách hàng.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* <script type="application/ld+json">{
        "@context": "https://schema.org",
        "@type": "Organization",
        "url": "https://southteam.vn/",
        "logo": "https://southteam.vn/wp-content/themes/southteam/images/logo-white.png",
        "contactPoint": [{
          "@type": "ContactPoint",
        "telephone": "+84938049434",
        "contactType": "customer service"
  }]
}</script>
      <script type="application/ld+json">{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [{
          "@type": "Question",
        "name": "South Team có triển khai dịch vụ thiết kế website ở Hà Nội không?",
        "acceptedAnswer": {
          "@type": "Answer",
        "text": "Có chứ, hiện nay chúng tôi đã và đang triển khai dịch vụ thiết kế website toàn quốc, thậm chí là các khách hàng ở nước ngoài. Các khách hàng ở TPHCM có thể làm việc trực tiếp tại Văn phòng địa chỉ số 318/16 Phan Văn Trị, Phường 11, Bình Thạnh, HCM. Còn lại có thể làm việc trực tuyến mà không có bất kì vấn đề gì"
    }
  },{
          "@type": "Question",
        "name": "south Team có hỗ trợ bảo hành, bảo trì sau khi bàn giao website không?",
        "acceptedAnswer": {
          "@type": "Answer",
        "text": "Chúng tôi có chính sách bảo hành và bảo trì lỗi code website trọn đời, với các khách hàng sử dụng hosting bên South Team sẽ được hỗ trợ chỉnh sửa bố cục website theo yêu cầu. Tất nhiên là chúng tôi sẽ có hướng dẫn bàn giao sử dụng website với mọi khách hàng và mọi website"
    }
  },{
          "@type": "Question",
        "name": "Website bên South Team thiết kế có chuẩn SEO chứ?",
        "acceptedAnswer": {
          "@type": "Answer",
        "text": "Đội ngũ South Team luôn sử dụng những công nghệ mới và tiên tiến trên thế giới nhằm đem đến một website chất lượng và hiện đại. Chúng tôi luôn ưu tiên sử dụng mã nguồn mở Wordpress để thiết kế website nhằm hướng đến xu hướng: gọn, nhẹ, chuẩn và đẹp"
    }
  },{
          "@type": "Question",
        "name": "Ngoài thiết kế Website, South Team còn có những dịch vụ gì?",
        "acceptedAnswer": {
          "@type": "Answer",
        "text": "Hiện nay South Team đang triển khai các dịch vụ tiếp cận khách hàng Online một cách tổng thể như: thiết kế website, Tối ưu Web SEO top Google, Quảng Cáo,...Trong đó Thiết kế Web và Dịch vụ SEO là 2 ngành chủ lực với hàng ngàn khách hàng đã sử dụng"
    }
  }]
}</script>
      <script type="application/ld+json">{
        "@context": "https://schema.org/",
        "@type": "CreativeWorkSeries",
        "name": "Thiết kế Website chuyên nghiệp uy tín tại TPHCM - Bảng giá Web trọn gói ✔️",
        "aggregateRating": {
          "@type": "AggregateRating",
        "ratingValue": "4.9",
        "bestRating": "5",
        "ratingCount": "186"
    }
}</script> */}
      {/* <script>var init = function () {
          var isMobile = navigator.userAgent &&
            navigator.userAgent.toLowerCase().indexOf('mobile') >= 0;
        var isSmall = window.innerWidth < 1000;

        var ps = new ParticleSlider({
          ptlGap: isMobile || isSmall ? 3 : 0,
        ptlSize: isMobile || isSmall ? 3 : 1,
        width: 1e9,
        height: 1e9
          });

        (window.addEventListener
        ? window.addEventListener('click', function () {ps.init(true)}, false)
        : window.onclick = function () {ps.init(true)});
        }

        var initParticleSlider = function () {
          var psScript = document.createElement('script');
        (psScript.addEventListener
        ? psScript.addEventListener('load', init, false)
        : psScript.onload = init);
        psScript.src = 'wp-content/themes/southteam/js/build.js';
        psScript.setAttribute('type', 'text/javascript');
        document.body.appendChild(psScript);
        }

        (window.addEventListener
        ? window.addEventListener('load', initParticleSlider, false)
        : window.onload = initParticleSlider);</script> */}
      <div class="zalo-fix"><a class="click--zalo" href="https://zalo.me/0367559981" target="_blank"></a>
      </div>
      <div class="phone-fixed">
        <a href="tel:0938049434" class="hotline-mobi" rel="nofollow">
          <div class="website-alo-phone">
            <div class="quydinh-tip quydinh-tip-2">0938.049.434</div>
            <div class="animated infinite zoomIn website-alo-ph-circle"></div>
            <div class="animated infinite pulse website-alo-ph-circle-fill"></div>
            <div class="animated infinite tada website-alo-ph-img-circle"><i class="fa fa-phone" aria-hidden="true"></i>
            </div>
          </div>
        </a></div>
      <a href="#page" class="gotop"><i class="fa fa-chevron-up"></i></a>
    </div>
  );
}
export default HomeComtent;
