import React from "react";


const Image = ({data}) => {
    console.log(data);
    const image = data.imageUrl;
    return (
        <div>
            <img src={image}/>
        </div>
    );
}

export default Image;