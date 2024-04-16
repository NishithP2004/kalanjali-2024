import "./Posters.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";

function Posters() {
  const BASE_DIR = "/Event_Posters";
  const posters = [
    "1.png",
    "2.png",
    "3.png",
    "4.png",
    "5.png",
    "6.png",
    "7.png",
    "8.png",
    "9.png",
    "10.png",
    "11.png",
    "12.png",
    "13.png",
    "14.png",
    "15.png",
    "16.png",
    "17.png",
    "18.png",
    "19.png",
    "20.png",
    "21.png",
    "22.png",
    "23.png",
    "24.png",
    "25.png",
    "26.png",
    "27.png",
    "28.png",
    "29.png",
    "30.png",
    "31.png",
  ];

  return (
    <div className="poster-container">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        rewind={true}
        autoplay={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {posters.map((poster, index) => {
          return (
            <SwiperSlide
              key={index}
              style={{
                textAlign: "center",
                width: "auto",
              }}
            >
              <img
                src={BASE_DIR + "/" + poster}
                alt={poster}
                className="poster"
                style={{ width: "300px", height: "400px", textAlign: "center" }}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Posters;
