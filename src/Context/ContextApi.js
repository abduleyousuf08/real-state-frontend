import { useState, useEffect } from "react";
import { createContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";

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
  //OTHER VALUES
  const [data, setData] = useState([]);
  const [infoLoading, setInfoLoading] = useState(true);
  //NEW POSTING VALUES
  const [values, setValues] = useState({
    bedrooms: 0,
    bathroom: 0,
    yearBuilt: null,
    addFavorite: false,
    squareFT: null,
    price: 0,
    propertyType: null,
    city: null,
    country: null,
    selectedFiles: [],
    contractTime: 1,
    discount: 0,
    propertyNo: null,
    zipCode: 0,
    contract: "rent",
    garage: false,
    balcony: false,
    fullyFurnished: false,
    quiteSaroundings: false,
    homeSecurity: false,
    ACRooms: false,
    oven: false,
    bathHub: false,
  });

  const [images, setImages] = useState([]);
  const [submiting, setSubmitting] = useState(true);
  //MAKING SCHEDULE VAIRABLES
  const token = localStorage.getItem("token");
  const tokenParsed = JSON.parse(token);

  //SEARCH PROPERTIES VARIABLE
  const [inputs, setInputs] = useState({});
  const [searchedProperties, setSearchedProperties] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/propertyInfo/houseList")
      .then((res) => {
        setRentHouses(res.data.rentHouses);
        setSaleHouses(res.data.saleHouses);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  // //FETCHING ONE PROPERTY
  const fetchingOneProperty = (id) => {
    axios
      .get(`http://localhost:3000/propertyInfo/oneHouse/${id}`)
      .then((res) => {
        setData(res.data);
        setInfoLoading(false);
        //console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  //FE
  const getSearchedProperties = async () => {
    const response = await axios.get(
      "http://localhost:3000/propertyInfo/search",
      {
        params: {
          location: inputs.search,
          options: inputs.options,
          contract: inputs.contract,
        },
      }
    );

    setSearchedProperties([...searchedProperties, response.data]);
  };

  //MAKING SCHEDULE FROM THE INFO PAGE
  const makeSchedule = async (date, id) => {
    date = date.toDateString();
    await axios
      .post(
        "http://localhost:3000/schedule/makeSchedule",
        { date, propertyId: id },

        {
          headers: { Authorization: tokenParsed.token },
        }
      )
      .then((res) => {
        toast.success(res.data.Message);
      })
      .catch((e) => {
        toast.error(e.response.data.Message);
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
        return saleHouses.slice(0, 3).map((house) => <Card data={house} />);
      case "rent":
        return rentHouses.slice(0, 3).map((house) => <Card data={house} />);
    }
  };

  ///POSTING SOMETHING TO THE DATABASE AND BACKEND
  const handleImage = (event) => {
    if (event.target.files.length > 4) {
      return toast.error("Only 4 images are allowed! ");
    }
    const files = Array.from(event.target.files);
    setValues((prev) => ({ ...prev, selectedFiles: files }));
    files.forEach((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onloadend = () => {
        setImages((oldArray) => [...oldArray, reader.result]);
      };
    });
  };

  const handleSendData = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    const tokenParsed = JSON.parse(token);
    const tokenID = tokenParsed.token;
    await axios
      .post(
        "http://localhost:3000/propertyInfo/postHouse",
        { values, images },
        {
          headers: { authorization: tokenID },
        }
      )
      .then((res) => {
        toast.success(res.data.MESSAGE);
        setSubmitting(false);
      })
      .catch((e) => {
        {
          toast.error(e.response.data.ERROR);
        }
      });
  };

  ///VALUE TO SHARE
  const valueToShare = {
    //FETCHING VALUE TO SHARE @CONTENT PAGE
    handleNext,
    handlePrev,
    setInfoLoading,
    data,
    loading,
    showIndex,
    renderActiveOne,
    handleSendData,
    fetchingOneProperty,
    setValues,
    values,
    handleImage,
    setInputs,
    submiting,
    inputs,
    getSearchedProperties,
    searchedProperties,
    makeSchedule,
  };

  return (
    <GeneralContext.Provider value={valueToShare}>
      {children}
    </GeneralContext.Provider>
  );
}

export { Provider };
export default GeneralContext;
