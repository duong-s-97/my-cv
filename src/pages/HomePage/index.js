import React from "react";
import homeBanner from "../../assets/banner/home-main.svg";
import "./home.css";

function HomePage() {
  return (
    <div id="home-page">
      <div className="px-3 text-white ">
        <div className="container max-w-6xl py-8 mx-auto text-left">
          <div className="flex flex-col md:grid md:grid-cols-12">
            <div className="z-10 col-span-7 md:pt-20">
              <h1 className="pb-4 pl-6 text-4xl md:pl-12 md:text-5xl">
                Xin Chào!
                <span className="ml-2 wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <h1 className="pl-6 mb-10 text-3xl lg:text-5xl name md:pl-11">
                Mình là
                <br className="md:hidden" />
                <span className="font-bold text-purple-100 md:ml-4 ">
                  Tống Minh Dương
                </span>
              </h1>
              <div className="hidden text-3xl lg:text-5xl md:block h1 pl-11 sub-title">
                Front End Developer ...
              </div>
            </div>
            <div className="col-span-5 pb-5">
              <img src={homeBanner} alt="" />
            </div>
          </div>
        </div>
        <div className="container max-w-6xl py-8 mx-auto text-left">
          <div className="mb-20 text-5xl font-semibold text-center ">
            Đôi lời về bản thân
          </div>
          <div className="grid grid-cols-12">
            <div className="col-span-9 ">goi thieu ban than</div>
            <div className="col-span-3 ">avatar</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
