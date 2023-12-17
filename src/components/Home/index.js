import React from "react";

const Home = () => {
  return (
    // <div
    //   className="hero min-h-screen"
    //   style={{
    //     backgroundImage:
    //       "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
    //   }}
    // >
    //   <div className="hero-overlay bg-opacity-60"></div>
    //   <div className="hero-content text-center text-neutral-content">
    //     <div className="max-w-md">
    //       <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
    //       <p className="mb-5">
    //         Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
    //         excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
    //         a id nisi.
    //       </p>
    //       <button className="btn btn-primary">Start Reading</button>
    //     </div>
    //   </div>
    // </div>
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content -z-0 flex-col lg:flex-row">
        <img
          src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Holy Quran!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn bg-primary text-white">Start Reading</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
