import { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";
import Category from "./components/Category/Category";
import BirthDay from "./components/Date/BirthDay";
import Rating from "./components/Rating/Rating";
import Select from "react-select";
import Application from "./components/Application/Application";

function App() {
  const [isClick, setIsClick] = useState(false);
  const [allData, setAllData] = useState([{}]);
  const [category, setCategory] = useState([{}]);
  const [age, setAge] = useState();
  const [filterCategory, setFilterCategory] = useState([{}]);
  const [rating, setRating] = useState();

  async function getData() {
    if (age && rating > 0 && filterCategory.length === 3) {
      const { data } = await axios.post("http://localhost:5000/data", {
        filterCategory,
        age,
        rating,
      });
      setAllData(data);
      setIsClick(true);
    } else {
      alert("Form not Valid!");
    }
  }

  useEffect(() => {
    setIsClick(false);
  }, [filterCategory, age, rating]);

  return (
    <div style={{ textAlign: "center", fontFamily: "Segoe UI" }}>
      <BirthDay age={age} setAge={setAge} />
      <Category setCategory={setCategory} />
      <Select
        options={category}
        isMulti
        onChange={(e) => {
          setFilterCategory(e.map((el) => el.value));
        }}
      />
      <Rating rating={rating} setRating={setRating} />
      <button
        style={{
          marginTop: "20px",
          backgroundColor: "cornflowerblue",
          width: "30%",
          height: "40px",
          fontSize: "1em",
          fontWeight: "600",
        }}
        onClick={getData}
      >
        Get Recommonded Apps!
      </button>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
        }}
      >
        {isClick &&
          allData?.map((el) => (
            <Application
              name={el.name}
              icon={el.icon}
              description={el.description}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
