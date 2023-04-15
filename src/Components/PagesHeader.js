//icon
import { FaLongArrowAltRight } from "react-icons/fa";
//images
import guryoSame from "../images/edited-images/guryo-same.png";

function PagesHeader() {
  return (
    <div className="flex bg-cyan-900 items-center  justify-evenly ">
      <img src={guryoSame} alt="LOGO" className="w-40" />
      <div className="mr-10 text-white  flex  items-center ">
        <a
          href="#"
          className="mr-8  hover:border-b-2 hover:pb-2 border-amber-400"
        >
          Propeties
        </a>
        <a
          href="#"
          className="mr-8 hover:border-b-2 hover:pb-2 border-amber-400"
        >
          Agents
        </a>
        <a
          href="#"
          className="mr-8 hover:border-b-2 hover:pb-2 border-amber-400"
        >
          Contact Us
        </a>
        <a
          href="#"
          className="mr-8 hover:border-b-2 hover:pb-2 border-amber-400"
        >
          About Us
        </a>

        <button className="ml-40 text-black bg-amber-400 border-solid border-2 border-black py-2 px-6 rounded-lg active:border-white hover:bg-cyan-900 hover:text-white hover:border-amber-400">
          Sign In
        </button>
        <button className="ml-6 border-solid border-2 border-white  py-4 px-6 rounded-lg hover:bg-black hover:text-white active:border-white hover:border-cyan-900">
          <p className="flex items-center">
            <FaLongArrowAltRight className="mr-2" size={25} />
            Submit Property
          </p>
        </button>
      </div>
    </div>
  );
}

export default PagesHeader;
