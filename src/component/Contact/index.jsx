import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = ({ isHilight, icon, link }) => {
  return (
    <div>
      <a href={link} target="_blank">
        <FontAwesomeIcon
          icon={icon}
          className={`${isHilight ? "hover:scale-125" : ""}`}
        ></FontAwesomeIcon>
      </a>
    </div>
  );
};

export default Contact;
