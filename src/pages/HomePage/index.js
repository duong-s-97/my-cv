import React from "react";
import homeBanner from "../../assets/banner/home-main.svg";
import avatar from "../../assets/logo/avatar.svg";
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
          <div className="mb-20 text-5xl font-semibold leading-[1.5] text-center ">
            Đôi lời về bản thân
          </div>
          <div className="grid-cols-12 md:grid">
            <div className="col-span-9 p-4 text-xl md:text-3xl">
              <p>
                Xin chào! <br />
                Mình tên là Dương, Cảm ơn mọi người đã dành thời gian ghé thăm
                và đánh giá sản phẩm của mình.
                <br />
                <br />- 2015 - đầu 2018: Học tập tại đại học Kinh tế - Kỹ thuật
                công nghiệp. tòa nhà giảng dạy tại Lĩnh Nam, Hà Nội.
                <br />
                <br />- 2018 - 2019: Bảo lưu học tập và làm công nhân xây dựng
                sau đó làm nhân viên cơ khí, bảo trì nhà máy gạch.
                <br />
                <br />- 2019 - 2022: Làm nhân viên giao nhân cho công ty Giao
                hàng tiết kiệm.
                <br />
                <br />- 2022 - đến nay: Theo học tại FPT Aptech địa chỉ 8A Tôn
                Thất Thuyết, Hà Nội và đã tốt nghiệp, hiện tại đang chờ nhận
                bằng.
              </p>
              <br />
              <br />
              <p>Ngoài việc lập trình, mình cũng có những sở thích khác !</p>
              <br />
              <div className="pl-10 ">
                <div className="flex mb-3">
                  <div className="w-10">
                    <i className="fa-light fa-beer-mug"></i>
                  </div>
                  Gặp gỡ bạn bè
                </div>
                <div className="flex mb-3">
                  <div className="w-10">
                    <i className="fa-light fa-game-console-handheld"></i>
                  </div>
                  Chơi game
                </div>
                <div className="flex mb-3">
                  <div className="w-10">
                    <i className="fa-light fa-route"></i>
                  </div>
                  Du lịch
                </div>
              </div>
            </div>
            <div className="col-span-3 p-4 ">
              <div className="z-10 flex justify-center">
                <img src={avatar} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
