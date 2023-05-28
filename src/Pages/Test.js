// import { useContext, useState } from "react";
// import GeneralContext from "../Context/ContextApi";
// import axios from "axios";
// import { useEffect } from "react";

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

//   return (
//     <div className="flex justify-center mt-20">
//       <form action="" className="">
//         <div>
//           <label htmlFor="">propertyType</label>
//           <input
//             className="border-2 border-black "
//             type="text"
//             onChange={(e) => setPropertyType(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="">bedrooms</label>
//           <input
//             className="border-2 border-black "
//             type="number"
//             onChange={(e) => setBedrooms(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="">squareFT</label>
//           <input
//             className="border-2 border-black "
//             type="text"
//             onChange={(e) => setSquareFT(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="">price</label>
//           <input
//             className="border-2 border-black "
//             type="number"
//             onChange={(e) => setPrice(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="">bathroom</label>
//           <input
//             className="border-2 border-black "
//             type="number"
//             onChange={(e) => setBathroom(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="">balcony</label>
//           <input
//             className="border-2 border-black "
//             type="number"
//             onChange={(e) => setBalcony(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="">yearbuilt</label>
//           <input
//             className="border-2 border-black "
//             type="number"
//             onChange={(e) => setYearBuilt(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="">status</label>
//           <input
//             className="border-2 border-black "
//             type="text"
//             onChange={(e) => setStatus(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="">lift</label>
//           <input
//             className="border-2 border-black "
//             type="number"
//             onChange={(e) => setLift(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="">location</label>
//           <input
//             className="border-2 border-black "
//             type="text"
//             onChange={(e) => setLocation(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="">descriptionProp</label>
//           <input
//             className="border-2 border-black "
//             type="text"
//             onChange={(e) => setDescriptionProp(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="">refrenceNo</label>
//           <input
//             className="border-2 border-black "
//             type="number"
//             onChange={(e) => setRefrenceNo(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="">garage</label>
//           <input
//             className="border-2 border-black "
//             type="number"
//             onChange={(e) => setGarage(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="">contract</label>
//           <input
//             className="border-2 border-black "
//             type="text"
//             onChange={(e) => setContract(e.target.value)}
//           />
//         </div>

//         <div>
//           <label htmlFor="">ACrooms</label>
//           <input
//             className="border-2 border-black "
//             type="text"
//             onChange={(e) => setACRooms(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="">HightSpeedWifi</label>
//           <input
//             className="border-2 border-black "
//             type="text"
//             onChange={(e) => setHightSpeedWifi(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="">image</label>
//           <input
//             className="border-2 border-black "
//             type="file"
//             //CONVERTING TO BASE64
//             onChange={handleImage}
//             multiple
//           />
//         </div>
//         {/**POSTING A NEW PROPERTY HOUSE */}
//         <button
//           onClick={handleSendData}
//           className="border-2 border-black  px-2 py-4"
//         >
//           {uploading ? "Uploading..." : "Submit"}
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Test;
