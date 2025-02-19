import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import IconButton from "@mui/material/IconButton";
import ArrowLeftIcon from "@mui/icons-material/ArrowBack";
import ArrowRightIcon from "@mui/icons-material/ArrowForward";
import Mandir from "../images/Mandir.svg";
import diya from "../images/Diya.svg";

const TempleEvent = ({ id }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleFeatures, setVisibleFeatures] = useState(4);
  const [slideAmount, setSlideAmount] = useState(20); // Default slideAmount
  const containerRef = useRef(null);

  const totalFeatures = 7;

  useEffect(() => {
    const handleResize = () => {
      let newVisibleFeatures;
      let newSlideAmount;
      if (window.innerWidth <= 480) {
        newVisibleFeatures = 1;
        newSlideAmount = 14.3; // Slide 100% for one item
      } else if (window.innerWidth <= 640) {
        newVisibleFeatures = 2;
        newSlideAmount = 14.4; // Slide 50% for two items
      } else if (window.innerWidth <= 1024) {
        newVisibleFeatures = 3;
        newSlideAmount = 14.4; // Slide 33.33% for three items
      } else {
        newVisibleFeatures = 4;
        newSlideAmount = 14.4; // Slide 25% for four items
      }
      setVisibleFeatures(newVisibleFeatures);
      setSlideAmount(newSlideAmount);
      setCurrentIndex(0);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    gsap.set(containerRef.current, { x: 0 });
  }, [visibleFeatures]);

  const slideLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      gsap.to(containerRef.current, {
        x: `+=${slideAmount}%`,
        duration: 0.5,
        ease: "power2.inOut",
      });
    }
  };

  const slideRight = () => {
    if (currentIndex < totalFeatures - visibleFeatures) {
      setCurrentIndex(currentIndex + 1);
      gsap.to(containerRef.current, {
        x: `-=${slideAmount}%`,
        duration: 0.5,
        ease: "power2.inOut",
      });
    }
  };

  return (
    <div
      id={id}
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgb(244, 119, 40) 50%, #fff7e7 50%)",
        backgroundSize: "90% 110%",
        height: "100vh",
        position: "relative",
      }}
    >
      <div className="top-pattern"></div>

      <section className="events-section py-12 text-center overflow-hidden relative min-h-screen">
        <div
          className="absolute md:top-0 md:left-0 xs:w-0 h-48 md:w-full z-20"
          style={{
            backgroundImage: `url(${diya})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            pointerEvents: "none",
          }}
        ></div>

        <div className="absolute top-0 right-0 xs:w-0 h-full md:w-full z-20">
          <div
            className="h-48 w-full"
            style={{
              backgroundImage: `url(${diya})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              transform: "rotate(180deg) scaleY(-1)",
              pointerEvents: "none",
            }}
          ></div>
        </div>
        <div
          className="absolute top-[80px] left-0 md:h-[300px] w-[50vw] bg-no-repeat bg-left bg-contain sm:h-[250px] xs:h-[250px] animate-slideInLeft"
          style={{
            backgroundImage: `url(${Mandir})`,
          }}
        ></div>
        <div
          className="absolute top-[80px] left-[730px] md:h-[300px] w-[50vw] bg-no-repeat bg-left bg-contain sm:h-[250px] xs:h-[250px] animate-slideInLeft"
          style={{
            backgroundImage: `url(${Mandir})`,
            transform: "rotate(180deg) scaleY(-1)",
          }}
        ></div>
        <div className="w-screen overflow-hidden relative min-h-[600px] z-30">
          <h2 className="text-4xl mb-3 mt-2 text-gray-800 font-semibold">
            நிகழ்ச்சிகள்
          </h2>

          <div
            className="flex transition-transform duration-500 ease-in-out"
            ref={containerRef}
            style={{
              width: `${totalFeatures * (100 / visibleFeatures)}%`,
              height: "450px",
              marginTop: 100,
            }}
          >
            {[
              {
                title: "ஒவ்வொரு வாரமும் நடைபெறும் பூஜைகள்",
                description:
                  "ஒவ்வொரு வெள்ளிக்கிழமை : வெள்ளிக்கிழமை காலை 8:00 மணிக்கு தேவியின் சன்னிதியில் விசேஷ பூஜை நடைபெறும். மதியம் 12:30 மணிக்கு அன்னதான நிகழ்ச்சிகள் நடைபெறும். மாலை 7:30 மணிக்கு நடைபெறும் பூஜை கோவிலின் அமைதியை முழுமையாக அர்ப்பணிக்கும். இந்த பூஜைகள் பக்தர்களுக்கு பக்தி மற்றும் அமைதியைக் கொடுக்கின்றன, இது நமது சமூகவின் ஆன்மிக முன்னேற்றத்திற்கு உதவுகின்றது.",
                icon: "https://cdn-icons-png.flaticon.com/512/8574/8574987.png",
              },
              {
                title: "மாதாந்திர பூஜைகள்",
                description:
                  "ஒவ்வொரு சங்கராந்தி: இந்த நாளில் மதியத்தில் விசேஷ பூஜை நடைபெறும். இந்த பூஜை நாக தேவனை வழிபடுவதற்கும், பூமி மற்றும் பயிர்களுக்கு நல்ல செழிப்பு கிடைக்கும் என்பதற்கான நம்பிக்கையைக் கொண்டுள்ளது. பின்னர் அன்னசந்தர்ப்பணம் மற்றும் பிரசாத விநியோகம் நடைபெறும். இது நமது பக்கத்து மக்கள் மத்தியில் அன்பை வளர்க்கவும், ஒற்றுமையை வலுப்படுத்தவும் உதவுகின்றது.",
                icon: "https://cdn-icons-png.flaticon.com/512/4791/4791033.png",
              },
              {
                title: "ஜாத்ரா மகோத்சவம்",
                description:
                  "மார்ச் 25: நமது கோவிலில் நடைபெறும் ஆண்டு விழா. இந்த நாளில் பக்தர்கள் பல்வேறு ஆன்மிக நிகழ்ச்சிகளில் பங்கேற்கின்றனர், மரவணிகை, பஜனைகள் மற்றும் விசேஷ பூஜைகள் நடைபெறும். கிராமத்தின் அனைத்து மக்கள் மற்றும் வெளி பக்தர்கள் வந்து தங்கள் வாழ்க்கையை ஆன்மிகமாக பூர்த்தி செய்கின்றனர்.",
                icon: "https://cdn-icons-png.flaticon.com/512/4093/4093225.png",
              },
              {
                title: "தசரா",
                description:
                  "விசேஷ திருவிழாக்கள் மற்றும் பூஜைகள்: தசரா திருவிழாவின் விசேஷ நாட்களில், கோவிலில் விசேஷ பூஜைகள், ஹோமம் மற்றும் சிவி தேவியின் பல வடிவங்களுக்கு அர்ப்பணிக்கும் பூஜைகள் நடைபெறும். இந்த நாட்களில் நமது பாரம்பரியம் மற்றும் கலாச்சாரம் ஒவ்வொரு மூலையில் காட்டப்படுகிறது, பக்தர்கள் பக்தி மற்றும் மரியாதையுடன் இந்த திருவிழாவை கொண்டாடுகின்றனர்.",
                icon: "https://cdn-icons-png.flaticon.com/512/4284/4284428.png",
              },
              {
                title: "வரமஹாலட்சுமி பூஜை",
                description:
                  "வரமஹாலட்சுமி பூஜையின் போது, பக்தர்கள் ஸ்ரீ மகாலட்சுமி தேவியின் வழிபாட்டை மேற்கொள்கிறார்கள். இந்த பூஜை வீட்டிற்கு நல்லதற்கு, செல்வம் மற்றும் வளம் வருவதற்கான அறிகுறி. பூஜையின் பிறகு தேவியின் சன்னிதியில் ஹோமம் மற்றும் அன்னசந்தர்ப்பணம் போன்ற நிகழ்ச்சிகள் நடைபெறும், இது நமது சமுதாயத்தில் ஒற்றுமை உணர்வை அதிகரிக்க உதவுகிறது.",
                icon: "https://cdn-icons-png.flaticon.com/512/15371/15371815.png",
              },
              {
                title: "கணேஷ் சதுர்த்தி",
                description:
                  "விசேஷ பூஜைகள் மற்றும் திருவிழா: கணேஷ் சதுர்த்தியின் போது, பக்தர்கள் ஆதரவு கொண்டு கணேஷனை வழிபடுகின்றனர். பூஜையின் நேரத்தில் பல விசேஷ ஆன்மிக நிகழ்ச்சிகள் நடைபெறும், கணபதி விஸர்ஜனத்தின் போது சந்தோஷமான மரவணிகைகள் மற்றும் பஜனைகள் நடைபெறும். இந்த திருவிழா மகிழ்ச்சி, செல்வம் மற்றும் பக்தியை கொண்டு வருகிறது.",
                icon: "https://cdn-icons-png.flaticon.com/512/8574/8574910.png",
              },
              {
                title: "யக்ஷகானம் குழு",
                description:
                  "பாச்கேரே ஸ்ரீ துர்காபரமேஸ்வரி யக்ஷகானம் மண்டலம், சரபாடி: இந்த குழு, நமது சமூதாயின் கலாச்சார பாரம்பரியத்தின் பெருமையாக விளங்குகிறது. கோவிலின் விழா காலத்தில், யக்ஷகானம் மூலம் தேவையின் முக்கியத்துவத்தை, தர்மத்தின் கருத்துக்களை மற்றும் வாழ்க்கை நெறிகளை கற்றுக்கொடுக்க உதவுகிறது. யக்ஷகானம் காதலர்கள் இதை மிகவும் ஆர்வமாக பார்வையிடுகின்றனர்.",
                icon: "https://cdn-icons-png.flaticon.com/512/564/564102.png",
              },
            ].map((feature, index) => (
              <div key={index} className="w-[25%] p-5 box-border group">
                <div className="bg-white border border-gray-200 rounded-3xl shadow-md p-5 h-full flex flex-col justify-between group-hover:bg-[#F5D0A9] group-hover:text-white transition-colors duration-300">
                  <img src={feature.icon} alt="" className="h-12 w-12 mb-2" />
                  <h3 className="text-xl text-[#F5D0A9] mb-2 mt-2 font-semibold group-hover:text-white text-left">
                    {feature.title}
                  </h3>
                  <p
className="text-gray-700 group-hover:text-[#000000]"
style={{
                      textAlign: "justify",
                      lineHeight: "1.6em",
                      marginTop: "10px",
                    }}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows at the bottom */}
          <div className="flex justify-center mt-4">
            <IconButton
              color="primary"
              onClick={slideLeft}
              disabled={currentIndex === 0}
              sx={{
                marginRight: 1.5,
                color: "#fff",
                backgroundColor: "#182856",
                "&:hover": { backgroundColor: "#0f1a2b" },
              }}
            >
              <ArrowLeftIcon />
            </IconButton>
            <IconButton
              color="primary"
              onClick={slideRight}
              disabled={currentIndex >= totalFeatures - visibleFeatures}
              sx={{
                marginLeft: 1.5,
                color: "#fff",
                backgroundColor: "#182856",
                "&:hover": { backgroundColor: "#0f1a2b" },
              }}
            >
              <ArrowRightIcon />
            </IconButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TempleEvent;
