import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Quran from "../../assets/images/quran.jpg";
import { getListData } from "../../store/actions/genericActions";
import { getChaptersList } from "../../store/actions/QuranActions";
import { QURAN_API } from "../../constants/UrlConstants";

const KEY = "CHAPTERS";
const URL = QURAN_API.LIST_CHAPTERS;

const Home = () => {
  const dispatch = useDispatch();
  const stateQuran = useSelector((state) => state?.quran);
  const { [KEY]: listOfChapters = [] } = stateQuran;
console.log("wow->", stateQuran)
  const onClick = () => {
    dispatch(getChaptersList(KEY, URL));
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
              Read, study, and learn The Noble Quran. Quran.com is a Sadaqah
              Jariyah. We hope to make it easy for everyone to read, study, and
              learn The Noble Quran.
            </p>
            <button onClick={onClick} className="btn bg-primary text-white">
              Start Reading
            </button>
          </div>
        </div>
        <div>
          {listOfChapters.map(chapter => {
            return <div>
              {chapter?.name_arabic}
            </div>
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
