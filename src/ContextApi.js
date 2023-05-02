import { useReducer, useState, useEffect } from "react";
import { createContext, useCallback } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
//COMPONENTS
import RentCard from "./Components/RentCard";
import SaleCard from "./Components/SaleCard";

const GeneralContext = createContext();

function Provider({ children }) {
  //GENERAL VARIABLES
  const [showIndex, setShowIndex] = useState(0);
  const [count, setCount] = useState(0);
  const [activeOne, setActiveOne] = useState("rent");
  //CONETNT FETCHING VARIABLES
  const [loading, setLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [rentHouses, setRentHouses] = useState([]);
  const [saleHouses, setSaleHouses] = useState([]);
  //POSTING THE PROPERTY VARIABLES
  const [propertyType, setPropertyType] = useState("");
  const [bedrooms, setBedrooms] = useState();
  const [squareFT, setSquareFT] = useState("");
  const [price, setPrice] = useState();
  const [bathroom, setBathroom] = useState();
  const [balcony, setBalcony] = useState();
  const [yearBuilt, setYearBuilt] = useState();
  const [status, setStatus] = useState("");
  const [lift, setLift] = useState();
  const [location, setLocation] = useState("");
  const [descriptionProp, setDescriptionProp] = useState("");
  const [refrenceNo, setRefrenceNo] = useState();
  const [garage, setGarage] = useState();
  const [contract, setContract] = useState("");
  const [ownerID, setOwnerID] = useState("");
  const [homeSecurity, setHomeSecurity] = useState("");
  const [ACRooms, setACRooms] = useState("");
  const [HightSpeedWifi, setHightSpeedWifi] = useState("");
  const [images, setImages] = useState([]);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    const response = axios
      .get("http://localhost:3000/propertyInfo/rentHouses")
      .then((res) => {
        setRentHouses(res.data.rentHouses);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  useEffect(() => {
    const response = axios
      .get("http://localhost:3000/propertyInfo/saleHouses")
      .then((res) => {
        setSaleHouses(res.data.saleHouses);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  //Hanle next button scroll
  const handleNext = () => {
    const current = showIndex + 1;
    if (current > 1) {
      setActiveOne("rent");
      return setShowIndex(0);
    }
    setShowIndex(current);
    setActiveOne("sale");
  };
  //Hanle previous button scroll
  const handlePrev = () => {
    const current = showIndex - 1;
    if (current < 0) {
      setActiveOne("sale");
      return setShowIndex(1);
    }
    setShowIndex(current);
    setActiveOne("rent");
  };

  //MAPING THE RENT HOUSES ONLY
  const rentItem = rentHouses.map((rent) => <RentCard rent={rent} />);
  const saleItem = saleHouses.map((sale) => <SaleCard sale={sale} />);

  const saleCardItem = saleItem.slice(0, 3);
  const rentCardItem = rentItem.slice(0, 3);
  //finally rendering that two types maped on the screen
  const renderActiveOne = () => {
    switch (activeOne) {
      case "sale":
        return saleCardItem;
      case "rent":
        return rentCardItem;
    }
  };

  ///POSTING SOMETHING TO THE DATABASE AND BACKEND
  const handleImage = (e) => {
    if (e.target.files.length > 4) {
      return console.log("only 4 images are allowed");
    }
    const files = Array.from(e.target.files);
    files.forEach((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onloadend = () => {
        setImages((oldArray) => [...oldArray, reader.result]);
      };
    });
  };

  const handleSendData = async (event) => {
    setUploading(true);
    event.preventDefault();
    const token = localStorage.getItem("token");
    const tokenParsed = JSON.parse(token);
    console.log(tokenParsed.token);
    const tokenID = tokenParsed.token;
    const result = await axios.post("http://localhost:3000/propertyInfo/postHouse",
      {
        propertyType,
        bedrooms,
        squareFT,
        price,
        bathroom,
        balcony,
        yearBuilt,
        status,
        lift,
        location,
        descriptionProp,
        refrenceNo,
        garage,
        contract,
        ownerID,
        homeSecurity,
        ACRooms,
        HightSpeedWifi,
        images,
      },

      { headers: { authorization: tokenID } }
    );

    // console.log(result);
    // const newRentHouses = await result.data.posted;

    setUploading(false);
  };

  ///VALUE TO SHARE

  const valueToShare = {
    //FETCHING VALUE TO SHARE @CONTENT PAGE
    handleNext,
    handlePrev,
    loading,
    isLoading,
    showIndex,
    renderActiveOne,
    //POSTING VALUE TO SHARE @TESTING PAGE
    count,
    handleSendData,
    handleImage,
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
    setOwnerID,
    setHomeSecurity,
    setACRooms,
    setHightSpeedWifi,
  };

  return (
    <GeneralContext.Provider value={valueToShare}>
      {children}
    </GeneralContext.Provider>
  );
}

export { Provider };
export default GeneralContext;
