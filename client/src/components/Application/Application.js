import React, { useEffect, useState } from "react";

const Application = ({ name, icon, description }) => {
  const [buttonName, setButtonName] = useState("Expand");
  const [descriptionValue, setDescriptionValue] = useState();

  function handelSubmit() {
    setButtonName(buttonName == "Expand" ? " collapse" : "Expand");
  }

  useEffect(() => {
    setButtonName("Expand");
  }, [description]);

  return (
    <div
      style={{
        border: "2px solid black",
        padding: "10px",
        width: "300px",
        margin: "50px",
        height: "200px",
      }}
    >
      <img src={icon} style={{ width: "50%" }} />
      <br />
      {name}
      <br />
      <button onClick={handelSubmit}>{buttonName}</button>
      {buttonName == "Expand" ? (
        descriptionValue
      ) : (
        <div
          style={{
            border: "2px solid black",
            padding: "10px",
            width: "300px",
            marginLeft: "-12px",
            marginTop: "30px",
            backgroundColor: "cornflowerblue",
          }}
        >
          {" "}
          {description}
        </div>
      )}
    </div>
  );
};

export default Application;
