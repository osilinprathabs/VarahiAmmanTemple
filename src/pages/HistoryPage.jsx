import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "../App.css";
import oldphoto from "../images/oldpic.png";
import moola from "../images/templeVAT.png";
import ganapati from "../images/ganesha.jpg";

import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Importing icons

const HistoryPage = ({ id }) => {
  const sectionsRef = useRef([]);
  const contentRef = useRef(); // Ref for the additional content
  const [showMore, setShowMore] = useState(false); // State to handle showing more content

  useEffect(() => {
    // Animation logic for initial section loading
    sectionsRef.current.forEach((section, index) => {
      const leftDiv = section.querySelector(".left-div");
      const rightDiv = section.querySelector(".right-div");

      gsap.fromTo(
        leftDiv,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          delay: index * 0.6,
        }
      );

      gsap.fromTo(
        rightDiv,
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          delay: index * 0.6 + 0.3,
        }
      );
    });
  }, []);

  // Toggle between showing more or less content with slow motion effect
  const toggleShowMore = () => {
    if (showMore) {
      // Animate content hide with slow motion
      gsap.to(contentRef.current, {
        opacity: 0,
        height: 0,
        duration: 1, // Slow motion duration
        ease: "power2.inOut",
        onComplete: () => setShowMore(false),
      });
    } else {
      // Animate content reveal with slow motion
      setShowMore(true);
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, height: 0 },
        {
          opacity: 1,
          height: "auto",
          duration: 1, // Slow motion duration
          ease: "power2.inOut",
        }
      );
    }
  };

  return (
    <>
      <div id={id} className="history w-full h-full flex p-3 bg-orange-100">
        <div className="flex flex-col items-center">
          <h1 className="text-center text-4xl font-extrabold text-red-900 underline mt-16">
            வரலாறு
          </h1>
          <br />
          <div className="flex justify-center align-center">
            <div>
              <img src={oldphoto} className="image1" alt="old photo" />
              <p className="text-center text-xl font-bold text-red-900 mt-3">
                பழைய கோயில்
              </p>
            </div>
            <div>
              <img src={moola} className="image1" alt="" />
              <p className="text-center text-xl font-bold text-red-900 mt-3">
                வராஹி அம்மன் கோயில் மoola ஸானித்யா
              </p>
            </div>
          </div>

          <p
            className="px-10 py-1 leading-30 text-justify text-red-900 font-serif font-semibold"
            style={{ lineHeight: "1.6em" }}
          >
            திருச்சி நகரில் அமைந்துள்ள வராஹி அம்மன் கோயில், பாரம்பரிய மற்றும்
            ஆன்மிக அர்த்தங்களையும் கொண்ட ஒரு மிக முக்கியமான பக்தி தலம் ஆகும். 
            இந்த கோயில் வராஹி அம்மன் மூர்த்தி மற்றும் அவரது பரம்பரை ஆழ்ந்த ஆன்மிக
            வலிமையையும் பக்தர்களுக்கு வணக்கம் அளிக்கும் இடமாக திகழ்கின்றது. இந்த
            கோயிலின் பாரம்பரியத்தை நாம் அடுத்த தலைமுறைக்கு பரிமாறி இருக்கின்றோம்.
            {!showMore && (
              <>... {/* Add ellipsis to indicate more content */}</>
            )}
          </p>
          <div
            ref={contentRef}
            style={{
              overflow: "hidden",
              width: "full",
              height: showMore ? "auto" : "0",
            }}
          >
            <p
              className="px-10 py-1 leading-30 text-justify text-red-900 font-serif font-semibold"
              style={{ lineHeight: "1.6em" }}
            >
              வராஹி அம்மன் கோயிலின் முக்கியத்துவம் பண்டையகாலத்திலிருந்து
              ஆரம்பமானது. இந்த கோயில் ஆன்மிக ஆராதனை மற்றும் பல புனிதமான
              இடங்களுக்கான வழிகாட்டியாக திகழ்கின்றது. இது ஒரு முக்கியமான
              பண்டிகை காலங்களில் பூஜைகள் மற்றும் நன்னயத்துடன் பக்தர்களின் வாழ்வின்
              மகிழ்ச்சியும் ஆன்மிகப் பாதுகாப்பும் அளிக்கும் இடமாக திகழ்கின்றது.
              இந்த கோயிலில் பல திருவிழாக்கள் மற்றும் மஹா பூஜைகள் நடைபெறுகின்றன.
              அவை பக்தர்களின் மனதை ஆறுதலாகவும், ஆன்மிக அனுபவங்களையும் வழங்குகின்றன.
              இந்த கோயிலின் கதையும் வரலாறும் இதன் ஆன்மிகப் பெருமையை ஒட்டி வளர்ந்துள்ளது.
            </p>
            <br></br>
            <center>
              <h1  className="text-center text-2xl font-extrabold text-red-900 underline mt-10">
                வராஹி அம்மன் கோயிலின் அனுபவம்
              </h1>
              <br />
              <div className="ganesha ">
                <img src={ganapati} className="image3" alt="old photo" />
                <p className="text-center text-xl font-bold text-red-900 mt-3">
                  வராஹி அம்மன்
                </p>
              </div>
            </center>

            {/* Slow motion additional content */}

            {showMore && (
              <p
                className="px-10 py-1 leading-30 text-justify text-red-900 font-serif font-semibold"
                style={{ lineHeight: "1.6em" }}
              >
                {/* Additional content */}
                நான் என்னுடைய நண்பர்களுடன் இந்த கோயிலைச் செல்லும்போது, 
                அதில் உணர்ந்த ஆன்மிக அனுபவத்தை பகிர்ந்துகொள்கிறேன். 
                வராஹி அம்மன் கோயிலில் நடைபெற்ற பூஜைகள் எவ்வாறு எங்கள் வாழ்க்கையில்
                வலிமையையும் ஆதாரத்தையும் வழங்கினை என்று நாங்கள் அனுபவித்தோம்.
              </p>
            )}
          </div>

          {/* Read More Button */}
          <div className="flex justify-center my-4">
            <button
              onClick={toggleShowMore}
              className="bg-red-900 gap-2 text-white px-6 py-2 rounded-full flex items-center space-x-2 transition-transform transform hover:scale-105"
            >
              {showMore ? "குறும்பட தகவல்" : "மேலும் தகவல்"}{" "}
              {showMore ? <FaChevronUp /> : <FaChevronDown />}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HistoryPage;
