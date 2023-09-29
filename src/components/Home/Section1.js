import React from "react";
import ParticleImage, {
  Vector,
  forces,
} from "react-particle-image";
import logo from "../../Assets/Style/wp-content/themes/southteam/images/logo_1.png";
import useWindowSize from "@rooks/use-window-size";

function Section1() {
  // Định nghĩa các tùy chọn cho hạt bụi
  const particleOptions = {
    filter: ({ x, y, image }) => {
      // Lọc các pixel dựa trên điều kiện
      const pixel = image.get(x, y);
      return pixel.b > 50; // Chọn các pixel có giá trị màu xanh (blue) lớn hơn 50
    },
    color: ({ x, y, image }) => {
      // Lấy pixel tại vị trí (x, y) trên hình ảnh
      const pixel = image.get(x, y);
      // Trả về màu của pixel dưới dạng chuỗi RGB
      return `rgb(${pixel.r}, ${pixel.g}, ${pixel.b})`;
    },
    radius: () => Math.random() * 0.7 + 0.3, // Kích thước nhỏ hơn
    mass: () => 20, // Khối lượng của hạt bụi
    friction: () => 0.15, // Ma sát
    initialPosition: ({ canvasDimensions }) => {
      // Vị trí ban đầu của hạt bụi
      return new Vector(
        canvasDimensions.width / 2,
        canvasDimensions.height / 2
      );
    },
  };

  // Định nghĩa sức mạnh chuyển động khi di chuyển chuột
  const motionForce = (x, y) => {
    return forces.disturbance(x, y, 70); // Tăng sức mạnh lên 10
  };

  const { innerWidth, innerHeight } = useWindowSize();
  console.log( innerWidth, innerHeight)

  return (
    <section id="landing">
      <div id="particle-slider" style={{ height: "100vh" }}>
        <div className="slides">
          <div id="first-slide" className="slide text-center">
            <ParticleImage
              src={logo} // Đường dẫn đến hình ảnh nền
              // width={Number(innerWidth)}
              width={800}
              height={Number(innerHeight)}
              scale={0.9} // Tỉ lệ hiển thị hình ảnh
              entropy={5} // Mức độ ngẫu nhiên của hạt bụi
              speed={0.1}
              maxParticles={15000} // Số lượng hạt bụi tối đa
              particleOptions={particleOptions} // Các tùy chọn của hạt bụi
              mouseMoveForce={motionForce} // Sức mạnh chuyển động khi di chuyển chuột
              touchMoveForce={motionForce} // Sức mạnh chuyển động khi cảm ứng
              backgroundColor="transparent" // Đặt màu nền thành màu trong suốt
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section1;
