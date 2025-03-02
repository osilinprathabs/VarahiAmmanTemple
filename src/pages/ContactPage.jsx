import React from "react";
import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";


  const ContactPage = ({ id }) => {
    const form = useRef();
    const [from_name, setName] = useState('');
    const [from_email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [gov_id, setGovID] = useState('');  
    const [message, setMessage] = useState('');
    const [loader, setLoader] = useState(false);
  
    const sendEmail = (e) => {
      e.preventDefault();
      setLoader(true);
  
      emailjs
        .sendForm(
          "service_1urcmlu",  //op service ID API downward   
          "template_tgrnjgk",
          e.target,
          "TfeTbv8r3Qf4h3hqv"  //Private Key OP
        )

        .then(
          (result) => {
            setLoader(false);
            console.log(result.text);
            toast.success("Email sent successfully");
            form.current.reset();
            // Reset state values
            setName('');
            setEmail('');
            setPhone('');
            setAddress('');
            setGovID('');
            setMessage('');
          },
          (error) => {
            setLoader(false);
            console.log(error.text);
            toast.error("Failed to send email");
          }
        );
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      
      const formData = new FormData(form.current);
      const formValues = {
        from_name: formData.get("from_name").trim(),
        from_email: formData.get("from_email").trim(),
        phone: formData.get("phone").trim(),
        address: formData.get("address").trim(),
        gov_id: formData.get("gov_id").trim(),
        message: formData.get("message").trim()
      };
  
      // Check if any field is empty
      if (!formValues.from_name || !formValues.from_email || !formValues.phone || 
          !formValues.address || !formValues.gov_id || !formValues.message) {
        toast.error("எல்லா உள்ளீடுகளையும் நிரப்பவும்");
        return;
      }
  
      try {
        setLoader(true);
        // Make API call to PHP backend
        const response = await axios.post(
          "http://localhost/varahi_amman_temple/submit",  
          formValues,
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        );
  
        if (response.data.success) {
          // If API call is successful, then send the email
          sendEmail(e);
          toast.success("Form submitted successfully");
        } else {
          throw new Error(response.data.message || "API call failed");
        }
      } catch (error) {
        setLoader(false);
        console.error("API Error:", error);
        toast.error(error.response?.data?.message || "Failed to submit form");
      }
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
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=SHRI%20AADHI%20VARAHI%20AMMAN%20PARIGARA%20TEMPLE,%20101,%20Shanmuga%20Nagar,%20Uyyakondan%20Thirumalai,%20Sholanganallur,%20Tamil%20Nadu%20620102&output=embed" 
          ></iframe>
        </div>
      </div>
      <div className="right bg-orange-100 h-full w-full px-50 py-50">
        <section className="px-50 py-50">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-4xl w-3/4 tracking-tight font-extrabold text-center text-red-900">
              தொடர்பு கொள்ளவும்
            </h2>
             <br></br>
            <form ref={form} onSubmit={sendEmail} className="space-y-8">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-red-900">
                  உங்கள் பெயர்
                </label>
                <input
                  name="from_name"
                  type="text"
                  id="name"
                  value={from_name} onChange={(e)=> setName(e.target.value)}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-3/4 p-2.5"
                  placeholder="உங்கள் பெயர்"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-red-900">
                  உங்கள் மின்னஞ்சல் ஐடி
                </label>
                <input
                  name="from_email"
                  type="email"
                  id="from_email"
                  value={from_email} onChange={(e)=> setEmail(e.target.value)}

                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-3/4 p-2.5"
                  placeholder="name@gmail.com"
                  required
                />
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone number" className="block mb-2 text-sm font-medium text-red-900">
                  தொலைபேசி எண்
                </label>
                <input
                  name="phone"
                  type="text"
                  id="phone"
                  value={phone} onChange={(e)=> setPhone(e.target.value)}

                  className="block p-3 w-3/4 text-sm rounded-lg border border-gray-300 shadow-sm"
                  placeholder="எப்படிக்கு உதவ முடியும் என்பதை எங்களுக்கு தெரியப்படுத்தவும்"
                  required
                />
              </div>

              {/* Address Field */}
              <div>
                <label htmlFor="address" className="block mb-2 text-sm font-medium text-red-900">
                  முகவரி
                </label>
                <input
                  name="address"
                  type="text"
                  id="address"
                  value={address} onChange={(e)=> setAddress(e.target.value)}

                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-3/4 p-2.5"
                  placeholder="உங்கள் வீட்டு முகவரி"
                  required
                />
              </div>

              {/* Government ID Field */}
              <div>
                <label htmlFor="govId" className="block mb-2 text-sm font-medium text-red-900">
                 அரசு ஐடி ஆதாரம் / ஏதேனும் ஐடி ஆதாரம்
                </label>
                <input 
                  name="gov_id"
                  type="text"
                  id="gov_id"
                  value={gov_id} onChange={(e)=> setGovID(e.target.value)}

                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-3/4 p-2.5"
                  placeholder="ஆதார் எண் / பான் எண்
"
                  required
                />
              </div>

              {/* Message Field */}
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-red-900">
                  உரை/சூழல்கள்
                </label>
                <textarea
                  name="message"
                  id="message"
                  value={message} onChange={(e)=> setMessage(e.target.value)}

                  rows="6"
                  className="block p-2.5 w-3/4 text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300"
                  placeholder="கருத்தை விடுங்கள்..."
                ></textarea>
              </div>

              <button
                type="submit"  onSubmit={handleSubmit}
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
