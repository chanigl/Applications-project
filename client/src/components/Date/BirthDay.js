import React from "react";

const BirthDay = ({ age, setAge }) => {
  function calculate_age(dob) {
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }

  return (
    <div>
      <h2>Date of Birth</h2>
      <input
        type={"date"}
        onMouseOut={(e) => {
          setAge(calculate_age(new Date(e.target.value)));
        }}
      />
    </div>
  );
};

export default BirthDay;
