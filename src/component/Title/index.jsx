import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Title = ({ isHilight, title, link }) => {
  if (!link) {
    return <div className="text-xl">{title}</div>;
  }
  return (
    <div className="text-xl">
      <a href={link} target="_blank">
        {title}
        <FontAwesomeIcon
          icon={faArrowRight}
          className={`text-sm -rotate-45 pl-1 transition-all ease-in-out ${
            isHilight ? "translate-x-1 -translate-y-1" : ""
          }`}
        />
      </a>
    </div>
  );
};
export default Title;
