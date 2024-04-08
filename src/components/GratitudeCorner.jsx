import Typewriter from "typewriter-effect";
import "./GratitudeCorner.css";

function GratitudeCorner() {
  const strings = [
    "Thanks for visiting!",
    "സന്ദർശിച്ചതിന് നന്ദി!",
    "సందర్శించినందుకు ధన్యవాదాలు!",
    "வருகைக்கு நன்றி!",
    "Thanks for visiting!",
    "भ्रमण गर्नुभएकोमा धन्यवाद!",
    "ಆಗಮನಕ್ಕಾಗಿ ಧನ್ಯವಾದಗಳು!",
    "आने के लिए धन्यवाद!",
    "Thanks for visiting!",
    "পরিদর্শনের জন্য ধন্যবাদ!",
    "भेट दिल्याबद्दल धन्यवाद!",
  ];
  return (
    <div id="gratitude-corner">
      <Typewriter
        options={{
          strings: strings,
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
}

export default GratitudeCorner;
