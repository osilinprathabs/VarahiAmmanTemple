import React from "react";
import bottomBorder from "../assets/title-img-orange.svg";
import mainOwner from "../images/profile.png";
 
 
const TeamMember = ({ name, role, description, image }) => {
  return (
    <div className="w-64 m-4 flex flex-col items-center">
      <div className="relative w-full h-80">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div
        className="relative mt-2 text-center"
        style={{
          width: "100%",
          paddingBottom: "0.5rem",
        }}
      >
        <div className="border-t-2 border-orange-500 pt-2">
          <div
            className="absolute -bottom-2 left-1/2 transform -translate-x-1/2"
            style={{
              borderWidth: "8px",
              borderColor: "transparent transparent #ef5521 transparent",
              borderStyle: "solid",
              borderTopWidth: "0",
              borderBottomWidth: "0",
              width: "0",
              height: "0",
              content: "",
            }}
          />
        </div>
        <p className="font-semibold text-[#ef5521ff]">{name}</p>
        <p className="text-sm">{role}</p>
      </div>
    </div>
  );
};

const ManagementPage = ({ id }) => {
  const teamMembers = [
    {
      name: "சிவகுரு என்கிற சிவா பாலசுப்ரமணியன்.",
      role: "நிறுவனர் மற்றும் நிர்வாக அறங்காவலர்",
      image: mainOwner
    },
 
    {
      name: "அமுதா பெ",
      role: "அறங்காவலர் ",
      image: mainOwner
    },
    {
      name: "மாரிமுத்து அ",
      role: "அறங்காவலர் ",
      image: mainOwner
    },
 
  ];


  return (
    <div id={id} className="bg-[#fff7e7] w-full min-h-[100vh] pt-20">
      <h2 className="font-bold md:text-3xl xs:text-xl flex justify-center text-[#ef5521ff]">
        கோவிலின் நிர்வாக குழு
      </h2>
      <div className="flex justify-center mt-4">
        <img src={bottomBorder} alt="Bottom Border" className="md:w-1/4" />
      </div>
      <div className="flex flex-wrap justify-center mt-8">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default ManagementPage;
