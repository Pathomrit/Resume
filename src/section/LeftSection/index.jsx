import Contact from "../Contact";
import Header from "../Header";
import Navbar from "../Navbar";

const LeftSection = ({ navbarItems, currentSection }) => {
  return (
    <div className="lg:sticky top-10 px-5 gap-y-5 grid lg:grid-rows-[30%_65%_5%] lg:h-[90vh]">
      <Header />
      <Navbar navbarItems={navbarItems} currentSection={currentSection} />
      <Contact />
    </div>
  );
};

export default LeftSection;
