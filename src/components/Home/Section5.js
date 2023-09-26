import React from "react";
import blog8 from "../../Assets/Style/wp-content/uploads/2017/12/blog8.jpg";
import blog10 from "../../Assets/Style/wp-content/uploads/2018/10/10.png";
import blog11 from "../../Assets/Style/wp-content/uploads/2018/10/bg-adsw.jpg";
import blog12 from "../../Assets/Style/wp-content/uploads/2017/12/adwords.png";
import blog2 from "../../Assets/Style/wp-content/uploads/2017/12/blog2.jpg";
import blog13 from "../../Assets/Style/wp-content/uploads/2018/10/cateloge_1.png";
import blog1 from "../../Assets/Style/wp-content/uploads/2017/12/blog1.jpg";
import blog14 from "../../Assets/Style/wp-content/uploads/2018/10/34.png";
import blog7 from "../../Assets/Style/wp-content/uploads/2017/12/blog7.jpg";
import blog15 from "../../Assets/Style/wp-content/uploads/2018/10/11.png";
function Section5() {
  return (
    <section class="services pt-4 pb-4">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-4 col-sm-12 col-xs-12">
            <div class="section-title">
              <h1 class="rotate-title text-shadown red float-md-right text-center">
                Dịch vụ
              </h1>
            </div>
          </div>
          <div class="col-md-8 col-sm-12 col-xs-12">
            <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-6">
                <div class="block-portfolio ">
                  <a
                    class="overlay"
                    href="dich-vu/thiet-ke-website/index.html"
                  ></a>
                  <span class="rotate-status rotate-title">Web Design</span>
                  <img alt="" class="img-responsive" src={blog8} />
                  <img alt="" class="img-additional" src={blog10} />
                  <div class="portfolio-info">
                    <span class="project-name font-weight-bold text-uppercase">
                      Thiết kế Website
                    </span>
                    <span class="project-category text-shadown">
                      Thiết kế hiện đại theo ý tưởng khách hàng
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-6">
                <div class="block-portfolio">
                  <a
                    class="overlay"
                    href="dich-vu/google-adwords/index.html"
                  ></a>
                  <span class="rotate-status rotate-title">Google Adwords</span>
                  <img alt="" class="img-responsive" src={blog11} />
                  <img alt="" class="img-additional" src={blog12} />
                  <div class="portfolio-info fadeInUp animated">
                    <span class="project-name font-weight-bold text-uppercase">
                      Google Adwords
                    </span>
                    <span class="project-category text-shadown">
                      Quảng cáo trên Google
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="block-portfolio">
                  <a
                    class="overlay"
                    href="dich-vu/dich-vu-quan-tri-website/index.html"
                  ></a>
                  <span class="rotate-status rotate-title">
                    Quản trị Website
                  </span>
                  <img alt="" class="img-responsive" src={blog2} />
                  <img alt="" class="img-additional" src={blog13} />
                  <div class="portfolio-info">
                    <span class="project-name font-weight-bold text-uppercase">
                      Quản trị Website
                    </span>
                    <span class="project-category text-shadown">
                      Cập nhật nội dung Website
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="block-portfolio">
                  <a
                    class="overlay"
                    href="dich-vu/marketing-online/index.html"
                  ></a>
                  <span class="rotate-status rotate-title">
                    Marketing Online
                  </span>
                  <img alt="" class="img-responsive" src={blog1} />
                  <img alt="" class="img-additional" src={blog14} />
                  <div class="portfolio-info">
                    <span class="project-name font-weight-bold text-uppercase">
                      Marketing Online
                    </span>
                    <span class="project-category text-shadown">
                      Chiến lược tổng thể tiếp cận KH online
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="block-portfolio">
                  <a
                    class="overlay"
                    href="dich-vu/viet-bai-chuan-seo/index.html"
                  ></a>
                  <span class="rotate-status rotate-title">
                    Viết bài chuẩn SEO
                  </span>
                  <img alt="" class="img-responsive" src={blog7} />
                  <img alt="" class="img-additional" src={blog15} />
                  <div class="portfolio-info">
                    <span class="project-name font-weight-bold text-uppercase">
                      Viết bài chuẩn SEO
                    </span>
                    <span class="project-category text-shadown">
                      Cung cấp bài viết chỉ từ 25000đ/bài
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Section5;
