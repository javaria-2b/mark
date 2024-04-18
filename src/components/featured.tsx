import React from "react";

const imageData = [
  { src: "/banner-1.jpg", alt: "Description of first image" },
  { src: "/banner-2.jpg", alt: "Description of second image" },
  { src: "/banner-3.jpg", alt: "Description of third image" },
  { src: "/banner-1.jpg", alt: "Description of first image" },
  { src: "/banner-2.jpg", alt: "Description of second image" },
  { src: "/banner-3.jpg", alt: "Description of third image" },
];

const Featured = () => {
  return (
    <div className="flex items-center space-x-4">
      {imageData.map((image, index) => (
        <div key={index} className=" flex justify-start items-center">
          <img src={image.src} alt={image.alt} className="h-48 w-48" />
        </div>
      ))}
    </div>
  );
};

export default Featured;
