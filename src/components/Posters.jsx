import "./Posters.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";

function Posters() {
  const BASE_DIR = "/Event_Posters";
  const posters = [
    "Book Exhibition - Poster - Nimeshika.jpg",
    "Crafter’s Corner (1) - Srinidhi Kalyan.png",
    "Ctrl Alt Jeopardy - Sneha Thejus.png",
    "Drag race plate_1711785563048 - Sharanya Menon.jpg",
    "Dramatic Harmonies Poster - Srivageesh Srinidhi.png",
    "epic - SUMA SANJANA.jpg",
    "Escape room - Nandini Kanagaraj.jpg",
    "IMG-20240330-WA0006 - Keerthi Ragav.jpg",
    "IMG-20240330-WA0014 - Keerthi Ragav.jpg",
    "IMG-20240330-WA0015 - Tarunya G.jpg",
    "kalanjali-investo - Hemanth koushik.png",
    "kalanjali’24 - DIVINE.jpg",
    "MAKE YOUR OWN MEME (1) - Sri Chaithanya.png",
    "MISC Kalanjali poster - Naveen Raj.png",
    "OCD - Ajay Ratnam.png",
    "Page Pursuit -  Poster - Nimeshika.jpg",
    "Pixalated Playoffs - Sneha Thejus.png",
    "riddleverse - Satyam Sharma.png",
    "Rising Icons Poster - Srivageesh Srinidhi.jpg",
    "Science Spotlight - Sri Chaithanya.png",
    "Serpentine Chronickes  Prakriti - Charitha.png",
    "Sketch sprint - Srinidhi Kalyan.png",
    "Theater workshop - Pranav Chintalapudi.jpg",
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
