import React from "react";

const Image = ({ imageUrl }) => {
  console.log(imageUrl);
  return (
    <div>
      <img src={imageUrl} />
    </div>
  );
};

export default Image;
