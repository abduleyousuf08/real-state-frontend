import { useState, useEffect } from "react";
import { createContext, useCallback } from "react";
import axios from "axios";

//COMPONENTS
import Card from "../screens/Card";

const GeneralContext = createContext();

function Provider({ children }) {
  //GENERAL VARIABLES
  const [showIndex, setShowIndex] = useState(0);
  const [count, setCount] = useState(0);
  const [activeOne, setActiveOne] = useState("rent");
  //CONETNT FETCHING VARIABLES
  const [loading, setLoading] = useState(true);
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
  const [data, setData] = useState([]);
  const [infoLoading, setInfoLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3000/propertyInfo/houseList")
      .then((res) => {
        setRentHouses(res.data.rentHouses);
        setSaleHouses(res.data.saleHouses);
        setLoading(false);
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  //FETCHING ONE PROPERTY
  const fetchingOneProperty = (id) => {
    axios
      .get(`http://localhost:3000/propertyInfo/oneHouse/${id}`)
      .then((res) => {
        setData(res.data);
        setInfoLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };

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

  //finally rendering that two types maped on the screen
  const renderActiveOne = () => {
    switch (activeOne) {
      case "sale":
        return <Card data={saleHouses} />;
      case "rent":
        return <Card data={rentHouses} />;
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
    const result = await axios.post(
      "http://localhost:3000/propertyInfo/postHouse",
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

    setImages([]);
    setUploading(false);
  };

  ///VALUE TO SHARE

  const valueToShare = {
    //FETCHING VALUE TO SHARE @CONTENT PAGE
    handleNext,
    handlePrev,
    loading,

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
    fetchingOneProperty,
    data,
    infoLoading,
  };

  return (
    <GeneralContext.Provider value={valueToShare}>
      {children}
    </GeneralContext.Provider>
  );
}

export { Provider };
export default GeneralContext;
