import { jsxDEV } from "react/jsx-dev-runtime";
import { data } from "../../content/skillTech";
import { useEffect } from "react";
const SkillTech = ({ onInitial, title: title = "" }) => {
  const Section_ID = `${title}-section`;
  useEffect(() => {
    onInitial(Section_ID);
  }, []);

  return (
    <div className="space-y-4 scroll-m-10 mt-24">
      <div className="text-primaryTitle text-2xl font-medium" id={Section_ID}>
        {data[0].title}
      </div>
      {data.map((i, j) => (
        <div key={j}>
          <div className="text-base grid grid-cols-2 gap-2 pl-5">
            {i.skill.map((j, k) => (
              <div key={k}>- {j}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
export default SkillTech;
