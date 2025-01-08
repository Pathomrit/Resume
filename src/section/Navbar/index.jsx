import { faArrowRight, faL } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Navbar = ({ navbarItems, currentSection }) => {
  const [isMouseEnter, setIsMouseEnter] = useState({});
  const handleClick = (sectionId) => {
    // console.log(sectionId);
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };
  // console.log(navbarItems);
  return (
    <div className="hidden lg:flex flex-col font-semibold mt-72 text-xl">
      {navbarItems.map((e, i) => (
        <div
          key={`nav-${e}-${i}`}
          onClick={() => handleClick(e.sectionId)}
          onMouseEnter={() => setIsMouseEnter({ [e.title]: true })}
          onMouseLeave={() => setIsMouseEnter({ [e.title]: false })}
          className="cursor-pointer flex py-2"
        >
          <div>
            <FontAwesomeIcon
              icon={faArrowRight}
              className={`new-arrow ${
                currentSection === e.sectionId
                  ? "text-primaryTitle"
                  : isMouseEnter[e.title]
                  ? ""
                  : "hidden"
              }`}
            />
          </div>
          <div
            className={`${
              currentSection === e.sectionId || isMouseEnter[e.title]
                ? "translate-x-3"
                : ""
            } transition-all ease-out`}
          >
            {e.title}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
