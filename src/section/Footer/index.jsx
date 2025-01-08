import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="flex justify-end mt-20 lg:mb-3">
      <span>
        {" "}
        Powered by React.js and Tailwind
        <FontAwesomeIcon icon={faGithub} className="pl-2" />
      </span>
    </div>
  );
};
export default Footer;
