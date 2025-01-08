import { useEffect, useState } from "react";
import LeftSection from "./section/LeftSection";
import RightSection from "./section/RightSection";

function App() {
  const [sectionIds, setSectionIds] = useState([]);
  const [navbarItems, setNevbarItems] = useState([]);
  const [currentSection, setCurrectSection] = useState("");
  const addSectionIds = (sectionId) => {
    // console.log(sectionId);
    const elementId = document.getElementById(sectionId).id;
    setSectionIds((prev) => [...new Set([...prev, elementId])]);
    const elementTitle =
      document.getElementById(sectionId).childNodes[0].textContent;
    const obj = { title: elementTitle, sectionId: elementId };
    setNevbarItems((prev) => {
      if (prev.findIndex((e) => e.title === obj.title) < 0) {
        return [...prev, obj];
      } else {
        return prev;
      }
    });
  };
  const handleScroll = () => {
    for (let index = 0; index < sectionIds.length; index++) {
      const element = sectionIds[index];
      // console.log("scroll", element);
      const elOffsetTop = document
        .getElementById(element)
        .getClientRects()[0].y;
      const height =
        document.getElementById(element).getClientRects()[0].height * 0.5;
      const viewHeight = window.innerHeight * 0.3;
      if (elOffsetTop <= 0) {
        if (elOffsetTop + height > viewHeight) {
          setCurrectSection(element);
        }
        // setCurrectSection(element);
      } else if (elOffsetTop > 0 && elOffsetTop < viewHeight) {
        setCurrectSection(element);
      }
    }
  };
  useEffect(() => {
    if (sectionIds.length > 0) {
      setCurrectSection(sectionIds[0]);
    }
  }, [sectionIds]);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionIds]);
  return (
    <div>
      <div className="mx-auto max-w-6xl gap-y-5 grid lg:grid-cols-[40%_60%] mt-10">
        <LeftSection
          navbarItems={navbarItems}
          currentSection={currentSection}
        />
        <RightSection onInitial={addSectionIds} />
      </div>
    </div>
  );
}

export default App;
