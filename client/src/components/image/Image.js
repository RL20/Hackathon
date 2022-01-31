import React from "react";

const Image = ({ imageUrl }) => {
  return (
    <div>
      <img src={imageUrl} className="imageHolder" alt="food" />
    </div>
  );
};

export default Image;
