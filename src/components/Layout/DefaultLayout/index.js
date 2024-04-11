import "../../GlobalStyles/GlobalStyles.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./layout.css";

function DefaultLayout({ children }) {
  return (
    <div id="layout">
      <Header />
      <div id="page-container" className="w-full pb-8 mx-auto  pt-36">
        <div>{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
