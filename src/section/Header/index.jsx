import { faDownLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { data } from "../../content/header.js";
const Header = () => {
  return (
    <div className="mb-5">
      <div className="text-3xl lg:text-4xl text-primaryTitle font-bold mb-5">
        {data.name}
      </div>
      <div className=" text-xl lg:text-2xl text-primaryTitle font-semibold mt-2 mb-5">
        {data.title}
      </div>
      <div className="text-base w-5/6 mt-2  mb-10">
        <div className="text-xl lg:text-2xl text-primaryTitle font-semibold mt-2 mb-2">
          Personal data
        </div>
        <div className="ml-5">
          <p className="font-semibold">
            Gender :
            <span className="font-normal"> {data.personalData.gender}</span>
          </p>
          <p className="font-semibold">
            Date of birth :
            <span className="font-normal"> {data.personalData.birth}</span>
          </p>
          <p className="font-semibold">
            Age :
            <span className="font-normal">
              {" "}
              {data.personalData.age} years old
            </span>
          </p>
          <p className="font-semibold">
            Nationality :
            <span className="font-normal">
              {" "}
              {data.personalData.nationality}
            </span>
          </p>
          <p className="font-semibold">
            Religion :
            <span className="font-normal"> {data.personalData.religion}</span>
          </p>
        </div>
        <div className="text-xl lg:text-2xl text-primaryTitle font-semibold mt-2 mb-2">
          Contact
        </div>
        <div className="ml-5">
          <p className="font-semibold">
            Gender :<span className="font-normal"> {data.contact.tel}</span>
          </p>
          <p className="font-semibold">
            Email :<span className="font-normal"> {data.contact.email}</span>
          </p>
          <p className="font-semibold">
            Address :
            <span className="font-normal"> {data.contact.address}</span>
          </p>
        </div>
      </div>
      <div className="">
        <a href={data.link} target="_blank">
          <span className="bg-primaryTitle  p-3 rounded-xl pl-9 pr-4 text-lg text-white font-semibold">
            {data.btnText}
            <span className="inline-block rotate-90 ml-2 text-lg">
              <FontAwesomeIcon
                className="animate-bounce text-primarySubcontent"
                icon={faDownLong}
              />
            </span>
          </span>
        </a>
      </div>
    </div>
  );
};

export default Header;
