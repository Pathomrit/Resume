import { useEffect } from "react";
import { data } from "../../content/about.js";
const About = ({ onInitial, title: title = "" }) => {
  const Section_ID = `${title}-section`;
  useEffect(() => {
    onInitial(Section_ID);
  }, []);
  return (
    <div className="space-y-4 scroll-m-14" id={Section_ID}>
      <div className="text-primaryTitle text-2xl font-medium">{data.title}</div>
      <div className="w-5/6 mx-5">{data.description}</div>
    </div>
  );
};
export default About;
