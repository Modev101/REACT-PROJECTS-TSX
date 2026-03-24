import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
function Share() {
  return (
    <>
      <div className="arrow_box  lg:bottom-[35%] lg:right-[28.2%] -bottom-4 right-1/3">
        <span className="text-xs tracking-widest font-semibold">SHARE</span>
        <FontAwesomeIcon
          icon={faFacebook}
          className="text-sky-400 hover:text-sky-600 cursor-pointer"
        />
        <FontAwesomeIcon
          icon={faTwitter}
          className="text-sky-400 hover:text-sky-600 cursor-pointer"
        />
        <FontAwesomeIcon
          icon={faPinterest}
          className="text-red-600 hover:text-red-800 cursor-pointer"
        />
      </div>
    </>
  );
}
export default Share;
