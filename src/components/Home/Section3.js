import React from "react";
import featured from "../../Assets/Style/wp-content/themes/southteam/images/featured-1.png";
import bgDo from "../../Assets/Style/wp-content/uploads/2018/11/bg-do.jpg";

function Section3() {
    const divStyle = {
      backgroundImage: `url(${bgDo})`,
      backgroundSize: "100%",
      padding: "25px 0",
    };
  return (
    <section class="featured">
      <div className="featured-1" style={divStyle}>
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="featured-content">
                <h3>Giao diện chuyên nghiệp, đẹp mắt</h3>
                <ul>
                  <li
                    data-aos="slide-right"
                    data-aos-duration="1500"
                    data-aos-anchor-placement="center-bottom"
                  >
                    Giao diện cực nhẹ, tải trang cực nhanh
                  </li>
                  <li
                    data-aos="slide-right"
                    data-aos-duration="1500"
                    data-aos-anchor-placement="center-bottom"
                  >
                    Sử dụng các công nghệ tiên tiến cho hiệu ứng bắt mắt
                  </li>
                  <li
                    data-aos="slide-right"
                    data-aos-duration="1500"
                    data-aos-anchor-placement="center-bottom"
                  >
                    Đầy đủ các chức năng, tương thích với mọi thiết bị
                  </li>
                  <li
                    data-aos="slide-right"
                    data-aos-duration="1500"
                    data-aos-anchor-placement="center-bottom"
                  >
                    Chuẩn SEO, lên TOP google ngay lần đầu Submit
                  </li>
                  <li
                    data-aos="slide-right"
                    data-aos-duration="1500"
                    data-aos-anchor-placement="center-bottom"
                  >
                    Bảo hành, bảo trì không phát sinh chi phí
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-6">
              <div
                class="featured-img"
                data-aos="zoom-in"
                data-aos-duration="2000"
                data-aos-anchor-placement="center-bottom"
              >
                <img
                  src={featured}
                  alt="Thiết kế Website chuyên nghiệp uy tín"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Section3;
