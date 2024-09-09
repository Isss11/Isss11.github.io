import React from "react";
import isaiahSinclairImage from "../assets/hamiltonmarathonphoto.jpg";

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="p-4 home-header text-white rounded">
        <h2 className="container-fluid">Hey! My name is Isaiah.</h2>
        <p className="container-fluid">
          I am a Computer Science student who has a passion for programming,
          running and economics. I enjoy the process of learning and
          problem-solving, and have established a strong work ethic to achieve
          my goals.
        </p>
      </div>
      <img
        src={isaiahSinclairImage}
        alt="Isaiah Sinclair"
        className="img-fluid container-fluid rounded"
      />
    </div>
  );
};

export default Home;
