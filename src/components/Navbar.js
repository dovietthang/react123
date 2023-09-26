import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <header id="masthead" class="site-header">
      <div class="middle-header">
        <div class="container">
          <div class="row">
            <div class="col-lg-2 col-8">
              <div class="logo-site">
                {/* <a href="index.html" title="Thiết kế website chuyên nghiệp">
                <img src="wp-content/themes/southteam/images/logo-white.png" alt="Thiết kế Website chuyên nghiệp">
              </a> */}
                <Navbar.Brand href="/" className="d-flex">
                  <img
                    src={logo}
                    className="img-fluid"
                    
                    alt="brand"
                  />
                </Navbar.Brand>
              </div>
            </div>
            <div class="col-lg-10 col-4">
              <div class="primery-menu">
                <div class="menu-menu-chinh-container">
                  <ul id="primary-menu" class="menu">
                    <li
                      id="menu-item-13"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-2 current_page_item menu-item-13"
                    >
                      <a href="index.html" aria-current="page">
                        Trang chủ
                      </a>
                    </li>
                    <li
                      id="menu-item-156"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-156"
                    >
                      <a href="gioi-thieu/index.html">Giới thiệu</a>
                    </li>
                    <li
                      id="menu-item-48"
                      class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-48"
                    >
                      <a href="#">Dịch vụ</a>
                      <ul class="sub-menu">
                        <li
                          id="menu-item-71"
                          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-71"
                        >
                          <a href="dich-vu/thiet-ke-website/index.html">
                            Thiết kế Website
                          </a>
                        </li>
                        <li
                          id="menu-item-67"
                          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-67"
                        >
                          <a href="dich-vu/dich-vu-quan-tri-website/index.html">
                            Quản trị Website
                          </a>
                        </li>
                        <li
                          id="menu-item-70"
                          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-70"
                        >
                          <a href="dich-vu/marketing-online/index.html">
                            Marketing Online
                          </a>
                        </li>
                        <li
                          id="menu-item-69"
                          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-69"
                        >
                          <a href="dich-vu/google-adwords/index.html">
                            Google Ads
                          </a>
                        </li>
                        <li
                          id="menu-item-68"
                          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-68"
                        >
                          <a href="dich-vu/viet-bai-chuan-seo/index.html">
                            Viết bài chuẩn SEO
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li
                      id="menu-item-49"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-49"
                    >
                      <a href="bang-gia-thiet-ke-website/index.html">
                        Bảng giá
                      </a>
                    </li>
                    <li
                      id="menu-item-15"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-15"
                    >
                      <a href="giao-dien-website-mau/index.html">
                        Giao diện website mẫu
                      </a>
                      <ul class="sub-menu">
                        <li
                          id="menu-item-72"
                          class="menu-item menu-item-type-taxonomy menu-item-object-danh-muc menu-item-72"
                        >
                          <a href="danh-muc/mau-giao-dien-website-ban-hang/index.html">
                            Mẫu Website bán hàng
                          </a>
                        </li>
                        <li
                          id="menu-item-75"
                          class="menu-item menu-item-type-taxonomy menu-item-object-danh-muc menu-item-75"
                        >
                          <a href="danh-muc/mau-website-gioi-thieu/index.html">
                            Mẫu Website giới thiệu
                          </a>
                        </li>
                        <li
                          id="menu-item-76"
                          class="menu-item menu-item-type-taxonomy menu-item-object-danh-muc menu-item-76"
                        >
                          <a href="danh-muc/mau-website-thoi-trang/index.html">
                            Mẫu Website thời trang
                          </a>
                        </li>
                        <li
                          id="menu-item-73"
                          class="menu-item menu-item-type-taxonomy menu-item-object-danh-muc menu-item-73"
                        >
                          <a href="danh-muc/mau-website-bds/index.html">
                            Mẫu Website BĐS
                          </a>
                        </li>
                        <li
                          id="menu-item-74"
                          class="menu-item menu-item-type-taxonomy menu-item-object-danh-muc menu-item-74"
                        >
                          <a href="danh-muc/mau-website-du-lich/index.html">
                            Mẫu Website du lịch
                          </a>
                        </li>
                        <li
                          id="menu-item-78"
                          class="menu-item menu-item-type-taxonomy menu-item-object-danh-muc menu-item-78"
                        >
                          <a href="danh-muc/mau-website-khach-san/index.html">
                            Mẫu Website khách sạn
                          </a>
                        </li>
                        <li
                          id="menu-item-77"
                          class="menu-item menu-item-type-taxonomy menu-item-object-danh-muc menu-item-77"
                        >
                          <a href="danh-muc/mau-website-xay-dung/index.html">
                            Mẫu Website xây dựng
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li
                      id="menu-item-2323"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2323"
                    >
                      <a href="du-an-da-thuc-hien/index.html">Các dự án</a>
                    </li>
                    <li
                      id="menu-item-17"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-17"
                    >
                      <a href="lien-he/index.html">Liên hệ</a>
                    </li>
                  </ul>
                </div>{" "}
                <a
                  class="btn-regis"
                  data-toggle="modal"
                  data-target="#regis-all"
                >
                  {" "}
                  Đăng ký ngay
                </a>
              </div>{" "}
              <a
                class="mobile-menu hidden-lg-up pull-right"
                href="javascript:;"
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
