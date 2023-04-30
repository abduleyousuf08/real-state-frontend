import { useState } from "react";
import axios from "axios";

function OwnerTesting() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState([]);
  const [saving, setSaving] = useState(false);

  const handleImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
    };
  };

  const handleSaveOwner = async (event) => {
    event.preventDefault();
    await axios
      .post("http://localhost:3002/owner/createOwner", {
        firstName,
        lastName,
        phone,
        email,
        password,
        image,
      })
      .then((res) => {
        console.log(res);
        // setSaving(false);
        setImage([]);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <form
        action=""
        className="flex justify-center align-center flex-col ml-80 mt-80 border-2 border-black w-80 py-4 px-4 "
      >
        <div className="">
          <label htmlFor="">FirstName:</label>
          <input
            type="text"
            name=""
            id=""
            className="border-2 border-black"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">LastName:</label>
          <input
            type="text"
            name=""
            id=""
            className="border-2 border-black"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Phone:</label>
          <input
            type="number"
            name=""
            id=""
            className="border-2 border-black"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Email :</label>
          <input
            type="text"
            name=""
            id=""
            className="border-2 border-black"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Password:</label>
          <input
            type="text"
            name=""
            id=""
            className="border-2 border-black"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Image:</label>
          <input
            type="file"
            name=""
            id=""
            className="border-2 border-black"
            onChange={handleImage}
          />
        </div>
        <button
          className="border-2 border-black bg-primary w-28 ml-20 mt-6 "
          onClick={handleSaveOwner}
        >
          {saving ? "saving...." : "Save"}
        </button>
      </form>
    </div>
  );
}

export default OwnerTesting;
