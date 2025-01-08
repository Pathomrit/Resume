import { faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <div className="flex items-end text-3xl gap-5 lg:ml-5 lg:pb-5">
      <a href="https://github.com/Pathomrit?tab=repositories" target="_blank">
        <span>
          <FontAwesomeIcon
            className="hover:scale-125 hover:text-primaryTitle transition-all"
            icon={faGithub}
          />
        </span>
      </a>
      <a href="https://www.facebook.com/pathomrit.jarutikorn/" target="_blank">
        <span>
          <FontAwesomeIcon
            className="hover:scale-125 hover:text-primaryFacebook transition-all"
            icon={faFacebook}
          />
        </span>
      </a>
    </div>
  );
};
export default Contact;
