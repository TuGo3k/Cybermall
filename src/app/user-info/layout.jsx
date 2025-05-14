import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";

export default function Layout({ children }) {
  return (
    <section className="w-full h-fit flex flex-col bg-white">
      <Header />
      <div className="w-full px-[10vw] py-[132px] gap-7 h-full flex flex-col lg:flex-row bg-white">
        {children}
      </div>
      <Footer />
    </section>
  );
}
