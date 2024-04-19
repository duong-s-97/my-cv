import "./footer.css";

export default function Footer() {
  return (
    <div className="text-white ">
      <div className="flex flex-col items-center px-10 py-6 md:grid md:grid-cols-2">
        <div className="z-10 mb-4 md:mb-0 md:text-xl">
          Coppy from
          <a
            className="ml-2 italic font-semibold"
            href="https://soumyajit.vercel.app/"
          >
            Soumyajit Behera
          </a>
        </div>
        <div className="text-center md:text-right md:text-xl">
          <a className="px-4" href="https://github.com/duong-s-97">
            <i className="fa-brands fa-github"></i>
          </a>
          <a className="px-4" href="https://www.facebook.com/tmd.897">
            <i className="fa-brands fa-facebook"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
