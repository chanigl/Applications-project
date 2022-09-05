import React from "react";

const ratings = [1, 2, 3, 4, 5];

const Rating = ({ rating, setRating }) => {
  return (
    <div>
      <h2>Minimum Rating of App</h2>
      <select
        style={{ width: "40%", textAling: "center", fontSize: "1.5em" }}
        onChange={(e) => {
          setRating(e.target.value);
        }}
      >
        <option value={0}>select...</option>
        {ratings.map((el) => (
          <option> {el} </option>
        ))}
      </select>
    </div>
  );
};

export default Rating;
