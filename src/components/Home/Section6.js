import React from "react";
import blog16 from "../../Assets/Style/wp-content/uploads/2018/03/thiet-ke-website.png";
import blog17 from "../../Assets/Style/wp-content/uploads/2019/08/bg_gt_3.png";

function Section6() {
  return (
    <section>
      <div
        class="featured-2"
        style={{ backgroundColor: "#f7f7f7", padding: "25px 0" }}
      >
        <div class="container">
          <div class="row mb-4">
            <div class="col-md-4">
              <div
                data-aos="zoom-in"
                data-aos-duration="2000"
                data-aos-anchor-placement="center-bottom"
              >
                <img
                  src={blog16}
                  alt="Thiết kế Website chuyên nghiệp South Team"
                />
              </div>
            </div>
            <div class="col-md-8">
              <div
                class="featured-content"
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-anchor-placement="center-bottom"
              >
                <h2>Thiết kế Website chuyên nghiệp South Team</h2>
                <p>
                  Với tốc độ phát triển Internet cao hiện nay, xu hướng người
                  dùng tìm kiếm thông tin trên Internet ngày càng tăng. Đây là
                  thị trường thu nhỏ của việc kinh doanh truyền thống, hình thức
                  kinh doanh trên Internet đã ra đời. Trong xu thế đó, việc các
                  cá nhân, doanh nghiệp cần thiết kế một website chuyên nghiệp
                  là rất cần thiết.
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-8">
              <div
                class="featured-content"
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-anchor-placement="center-bottom"
              >
                <h2 class="text-uppercase text-left">
                  Thiết kế website chuyên nghiệp là gì?
                </h2>
                <p>
                  Thiết kế web hay thiết kế website đơn giản là công việc tạo
                  một trang web cho cá nhân, công ty, doanh nghiệp hoặc tổ chức.
                  Có 2 phương thức chính để thiết kế:
                </p>
                <p>
                  <strong>Thiết kế web tĩnh</strong> là sử dụng các đoạn mã HTML
                  (HTML5), hình ảnh, Video, Audio, Flash, Javascript (jQuery) và
                  CSS để tạo một giao diện cho trang web.
                </p>
                <p>
                  <strong>Thiết kế web động</strong> là thiết kế website chuyên
                  nghiệp, có hệ thống cơ sở dữ liệu dùng để cung cấp thông tin
                  cho website, có khả năng quản lý dữ liệu tốt, tương tác trên
                  hệ thống, dễ cập nhật nội dung và thêm các tính năng tiện ích
                  quản lý cho doanh nghiệp, thân thiện với người dùng.
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <div
                data-aos="fade-left"
                data-aos-duration="2000"
                data-aos-anchor-placement="center-bottom"
              >
                <img
                  src={blog17}
                  alt="Thiết kế Website chuyên nghiệp tại tphcm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Section6;
