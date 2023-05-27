import { useContext, useState } from "react";
import GeneralContext from "../Context/ContextApi";
import axios from "axios";
import { useEffect } from "react";

function Test() {
  const [inputs, setInputs] = useState('')
  const {
    uploading,
    setPropertyType,
    setBedrooms,
    setSquareFT,
    setPrice,
    setBathroom,
    setBalcony,
    setYearBuilt,
    setStatus,
    setLift,
    setLocation,
    setDescriptionProp,
    setRefrenceNo,
    setGarage,
    setContract,
    setACRooms,
    setHightSpeedWifi,
    handleImage,
    handleSendData,
  } = useContext(GeneralContext);
  /////

  const fetchData = async () => {
    const input = { propertyType: inputs }
    const response = await axios.post('http://localhost:3000/propertyInfo/houseList', input);
    console.log(response);
  };
  

  return (
    <div className="flex justify-center mt-20">
      <form action="" className="" onSubmit={fetchData}>
        <div>
          <label htmlFor="">propertyType</label>
          <input
            className="border-2 border-black "
            type="text"
            value={inputs}
            onChange={(e) => setInputs(e.target.value)}
          />
        </div>
        <button
          className="border-2 border-black  px-2 py-4">
        Submit
        </button>
      </form>
    </div>
  );
}

export default Test;
