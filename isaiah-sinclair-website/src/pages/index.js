import { Link } from "react-router-dom";
import isaiahSinclairImage from "../assets/grtmpicnic.jpg";

const Home = () => {
  return (
      <div className="container-fluid">
        <div className="p-4 home-header text-white rounded">
          <h2 className="container-fluid">Hey! My name is Isaiah.</h2>
          <p className="container-fluid">
            I am a Computer Science student who has a passion for programming,
            marathon running and economics. I enjoy the process of learning and
            problem-solving, and have established a strong work ethic to achieve
            my goals.
          </p>
        </div>
        <div className="home-image-container container-fluid">
          <img
            src={isaiahSinclairImage}
            alt="Isaiah Sinclair"
            className="home-image-responsive rounded"
          />
          <em>Photo Credits: Randy Moore (<Link to="https://www.pv3photo.com/">PV3 Photo</Link>)</em>
        </div>
      </div>
  );
};

export default Home;
