import React from "react";
import Quran from "../../assets/images/quran.jpg";
import { useNavigate } from "react-router-dom/dist";
import { PATHS } from "../../constants/PathConstants";

const Home = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(PATHS.QURAN);
  };
  return (
    <>
      <div className="hero min-h-screen ">
        <div className="hero-content -z-0 flex-col lg:flex-row">
          <img
            alt="Quran"
            src={Quran}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Holy Quran!</h1>
            <p className="py-6">
              Read, study, and learn The Noble Quran. MuslimToolkit is a Sadaqah
              Jariyah. We hope to make it easy for everyone to read, study, and
              learn The Noble Quran.
            </p>
            <button onClick={onClick} className="btn bg-primary text-white">
              Start Reading
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
