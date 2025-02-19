import React from "react";
import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactPage = ({ id }) => {
  const form = useRef();
  const [loader, setloader] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setloader(true);

    emailjs
      .sendForm(
        "service_jjpb6tq",
        "template_eaw52ht",
        form.current,
        "vwSrJ918OllPQ-NVX"
      )
      .then(
        (result) => {
          setloader(false);
          console.log(result.text);
          toast.success("Email sent successfully");
          form.current.reset();
        },
        (error) => {
          setloader(false);
          console.log(error.text);
          toast.error("Failed to send email");
        }
      );
  };

  return (
    <div
      className="flex flex-row bg-orange-100 w-full h-full px-50 py-50 ct-main"
      id={id}
    >
      <div className="flower-pattern"></div>
      <div className="left px-50 py-50 h-full w-full flex flex-col align-center justify-center mx-20 my-20">
        <div className="flex flex-col align-center justify-center map-div leading-9">
          <h1 className="font-bold text-2xl text-red-900 underline">முகவரி:</h1>
          <h1 className="font-bold text-xl text-red-900 leading-9">
        

          ஸ்ரீ ஆதி வராகி அம்மன் அருட்பணி அறக்கட்டளை | ஆதி வராகி அம்மன் பரிகார ஆலயம் | ஸ்ரீ நவகிரக திருக்கோயில்கள் | நவ வராகி திருக்கோயில்கள் | இந்தியா | தமிழ்நாடு | திருச்சி | பதிவு எண்: 118/2022 | தொடர்பு எண்: 90925 26272 | <br />
            தமிழ்நாடு 620001

          </h1>
          <br />
          <h1 className="font-bold text-2xl text-red-900 underline">கூகிள் வரைபடத்தில் இடத்தைப் பார்க்கவும்:</h1>
          <br />
          <iframe
            width="406"
            height="274"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=SHRI%20AADHI%20VARAHI%20AMMAN%20PARIGARA%20TEMPLE,%20101,%20Shanmuga%20Nagar,%20Uyyakondan%20Thirumalai,%20Sholanganallur,%20Tamil%20Nadu%20620102&output=embed" 
            ></iframe>
        </div>
      </div>
      <div className="right bg-orange-100 h-full w-full px-50 py-50">
        <section className="px-50 py-50">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-red-900">
              தொடர்பு கொள்ளவும்
            </h2>
            <form ref={form} onSubmit={sendEmail} className="space-y-8">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-red-900">
                  உங்கள் மின்னஞ்சல் ஐடி
                </label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  placeholder="name@gmail.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone number" className="block mb-2 text-sm font-medium text-red-900">
                  தொலைபேசி எண்
                </label>
                <input
                  name="subject"
                  type="text"
                  id="subject"
                  className="block p-3 w-full text-sm rounded-lg border border-gray-300 shadow-sm"
                  placeholder="எப்படிக்கு உதவ முடியும் என்பதை எங்களுக்கு தெரியப்படுத்தவும்"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-red-900">
                  உரை/சூழல்கள்
                </label>
                <textarea
                  name="msg"
                  id="message"
                  rows="6"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300"
                  placeholder="கருத்தை விடுங்கள்..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-red-900 hover:bg-primary-800"
              >
                மின்னஞ்சல் அனுப்பவும்
              </button>
            </form>
          </div>
        </section>
      </div>
      <ToastContainer theme="dark" />
    </div>
  );
};

export default ContactPage;
