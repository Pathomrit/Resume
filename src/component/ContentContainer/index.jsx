import { useEffect, useState } from "react";
import FormatedDate from "../FormatedDate";
import Title from "../Title";
import Image from "../Image";
import Contact from "../Contact";
import Content from "../Content";
import Skill from "../Skill";

const ContentContainer = ({
  onInitial,
  title: sectionTitle = "",
  data = [],
}) => {
  const [isMouseEnter, setisMouseEnter] = useState({});
  const Section_ID = `${sectionTitle}-section`;
  useEffect(() => {
    onInitial(Section_ID);
  }, []);
  return (
    <div id={Section_ID} className="mt-28 lg:mt-28  scroll-m-10">
      <div className="text-primaryTitle text-2xl font-medium">
        {sectionTitle}
      </div>
      {data.map(
        ({ date, title, link, material, description, skill, picture }, i) => (
          <div
            key={`${Section_ID}-${i}-${title.replaceAll(" ", "")}`}
            className={`grid grid-cols-[25%_75%] gap-x-4 py-8 transition-all pl-3 ${
              isMouseEnter[`${Section_ID}-${i}`]
                ? "bg-primarySubBg rounded-lg"
                : ""
            }`}
            onMouseEnter={() =>
              setisMouseEnter({ [`${Section_ID}-${i}`]: true })
            }
            onMouseLeave={() =>
              setisMouseEnter({ [`${Section_ID}-${i}`]: false })
            }
          >
            <div className="space-y-4 text-xl">
              <FormatedDate date={date} />
              <Image img={picture} />
            </div>
            <div className="flex flex-col gap-y-4">
              <Title
                isHilight={isMouseEnter[`${Section_ID}-${i}`]}
                title={title}
                link={link}
              />

              {material.length > 0 ? (
                <div className="text-2xl flex gap-x-4">
                  {material.map((j, k) => (
                    <Contact
                      key={`${j}-mater-${k}`}
                      isHilight={isMouseEnter[`${Section_ID}-${i}`]}
                      icon={j.type}
                      link={j.link}
                    />
                  ))}
                </div>
              ) : null}

              <div className="w-5/6 ">
                {description.map((j, k) => (
                  <Content key={`${j}-descrip-${k}`} content={j} />
                ))}
              </div>
              {skill.map((j, k) => (
                <Skill
                  key={`${j}-skill-${k}`}
                  isHilight={isMouseEnter[`${Section_ID}-${i}`]}
                  data={j}
                />
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
};
export default ContentContainer;
