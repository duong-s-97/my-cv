import React from "react";
import "./project.css";
import weather from "../../assets/banner/weather-app.png";
import donate from "../../assets/banner/Give-AID.png";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div id="project-page">
      <div className="px-3 text-white ">
        <div className="container py-8 mx-auto text-left">
          <div>
            <div className="mb-20 text-center">
              <h1 className="text-5xl">Dự án gần đây của tôi</h1>
              <p></p>
            </div>
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col w-full p-5 mt-8 mb-16 border border-transparent rounded card md:grid md:grid-cols-12">
                <div className="order-2 px-5 lg:px-20 md:order-1 md:col-span-8">
                  <div className="mb-5 text-xl font-semibold text-center">
                    Weather
                  </div>
                  <div className="text-xl font-medium text-left">
                    Một trang web xem thông tin thời tiết hiện tại và thông tin
                    dự báo ngày mai của thành phố mà người dùng tìm kiếm.
                    <br />
                    Được xây dựng giao diện bằng
                    <span className="text-purple-100"> Reactjs</span> và
                    <span className="text-purple-100"> Tailwind css</span>. Các
                    thông tin thời gian và dự báo thời tiết được lấy từ
                    <span className="text-purple-100">
                      {""} OpenWeatherMap Api
                    </span>
                    .
                  </div>
                </div>
                <div className="flex flex-col justify-center order-1 md:order-2 md:col-span-4">
                  <div>
                    <img
                      className="shadow-md rounded-2xl shadow-white"
                      src={weather}
                      alt=""
                    />
                  </div>
                  <div className="flex justify-around py-8">
                    <Link
                      to="https://github.com/duong-s-97/weather-app"
                      target="_blank"
                      className="px-3 py-1.5 rounded-md bg-purple-400 hover:bg-purple-300"
                    >
                      <i className="fa-brands fa-github"></i> GitHub
                    </Link>
                    <Link
                      to="https://weather-tmd.vercel.app/"
                      target="_blank"
                      className="px-3 py-1.5 rounded-md bg-purple-400 hover:bg-purple-300"
                    >
                      <i className="fa-solid fa-desktop"></i> Demo
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full p-5 my-16 border border-transparent rounded card md:grid md:grid-cols-12">
                <div className="order-2 px-5 lg:px-20 md:order-1 md:col-span-8">
                  <div className="mb-5 text-xl font-semibold text-center">
                    Donate: Give-AID
                  </div>
                  <div className="text-xl font-medium text-left">
                    Trang web được xây dựng nhằm mục đích kêu gọi quyên góp từ
                    thiện, kết nối giữa người cần giúp đỡ và những cá nhân, tổ
                    chức hảo tâm. Người dùng có thể tiềm kiếm chương trình quyên
                    góp mong muốn, hoặc có thể đăng ký làm một nhà tổ chức sự
                    kiện nếu đáp ứng đủ điều kiện giấy tờ liên quan.
                    <br />
                    Được xây dựng giao diện bằng
                    <span className="text-purple-100"> Reactjs</span> và
                    <span className="text-purple-100"> Tailwind css</span>,
                    <span className="text-purple-100">{""} Ant Design</span>. Sử
                    dụng{" "}
                    <span className="text-purple-100">
                      {""} React Hook Form
                    </span>{" "}
                    để quản lý biểu mẫu.
                    <br />
                    Dự án được thực hiển bớỉ nhóm 5 thành viên: <br /> - 2
                    FrontEnd, 3 BackEnd.
                    <br /> Vai trò của tôi: xây dựng toàn bộ giao diện hệ thống,
                    gép Api, tham gia đóng góp ý kiến, xây dựng chức năng hệ
                    thống.
                  </div>
                </div>
                <div className="flex flex-col justify-center order-1 md:order-2 md:col-span-4">
                  <div>
                    <img
                      className="shadow-md rounded-2xl shadow-white"
                      src={donate}
                      alt=""
                    />
                  </div>
                  <div className="flex justify-center py-8">
                    <Link
                      to="https://github.com/xuanhanhbn/FE-Project-SEM4.git"
                      target="_blank"
                      className="px-3 py-1.5 rounded-md bg-purple-400 hover:bg-purple-300"
                    >
                      <i className="fa-brands fa-github"></i> GitHub
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
