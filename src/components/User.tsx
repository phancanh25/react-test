import React, { useState } from "react";
import { UserProps } from "./User.types";
export const User = ({ name, age, designation }: UserProps) => {
  const [display, setDisplay] = useState(false);
  const handleDisplay = () => {
    setDisplay(!display);
  };
  return (
    <div className="Contact" onClick={handleDisplay}>
      <p>{name}</p>
      {display && (
        <div className="detail">
          <p>{age}</p>
          <p>{designation}</p>
        </div>
      )}
    </div>
  );
};
