import ContentContainer from "../../component/ContentContainer";
import About from "../About";
import { data as dataProject } from "../../content/project";
import Footer from "../Footer";
import SkillTech from "../Skill";
const RightSection = ({ onInitial }) => {
  return (
    <div className="grid px-5 lg:p-2 mt-10 lg:mt-0">
      <About onInitial={onInitial} title="About" />
      <SkillTech onInitial={onInitial} title="Skill" />
      <ContentContainer
        onInitial={onInitial}
        title="Project"
        data={dataProject}
      />
      <Footer />
    </div>
  );
};
export default RightSection;
