import "./Posters.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";

function Posters() {
  const BASE_DIR = "/Event_Posters";
  const posters = [
    "1 - Srinidhi Kalyan.png",
    "2 - Srinidhi Kalyan.png",
    "20240410_164053_0000 - Sri Chaithanya.png",
    "Abhinaya Poster - Nyx N.png",
    "AI - Naveen Raj.png",
    "CodeChef Poster - Ajay Ratnam.png",
    "Ctrl Alt Jeopardy - Sneha Thejus.png",
    "Drag race plate_1712727655630 - Sharanya Menon.jpg",
    "Escape room (Instagram Post) (1) - Daksh Dobhal.png",
    "Escape room - Nandini Kanagaraj.jpg",
    "Group_Dance_competition - Devansh Handa.png",
    "IMG-20240407-WA0040 - Nandan Vaddempudi.jpg",
    "IMG-20240407-WA0041 - Nandan Vaddempudi.jpg",
    "IMG-20240409-WA0025 - Karthikeyan Madhaiyan.jpg",
    "IMG-20240409-WA0034 - Nyneisha Baratam.jpg",
    "IMG-20240410-WA0002 - Nimeshika.jpg",
    "IMG-20240410-WA0003 - Nimeshika.jpg",
    "Investo - Nyx N.png",
    "Jeopardy Updated - Sneha Thejus.png",
    "kalanjali poster prakriti - Charitha.jpg",
    "kalanjali’24 - DIVINE.png",
    "MAKE YOUR OWN MEME_20240410_163819_0000 - Sri Chaithanya.png",
    "PixalatedPlayoffs_Latest - Sneha Thejus.png",
    "Poster-4 - Sanath Darahas Pasuluru.jpeg",
    "Poster1_Epic - SUMA SANJANA.png",
    "Poster2_Epic - SUMA SANJANA.png",
    "Poster_Escape_Room - Daksh Dobhal.png",
    "Raaga - Nyx N.jpg",
    "Raaga x Abhinaya - Nyx N.jpg",
    "riddleverse - MJ.png",
    "Solo_Dance_competition - Devansh Handa.png",
    "Street_Dance_Competition - Devansh Handa.png",
    "TAB X AMAL SHARK TANK_final - Jupiter Sinope.png",
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
