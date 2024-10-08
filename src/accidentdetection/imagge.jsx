import React from 'react';

const Imagge = () => {
  // Array of image sources from the public folder
  const imageArray = [
    "acc1.jpg",
    "acc2.jpg",
    "acc3.jpg"
  ];

  return (
    <section className="space-y-8 rounded-3xl border-8 border-white">
      {imageArray.map((imageSrc, index) => (
        <div key={index} className="relative rounded-3xl  lg:h-[90vh] h-auto bg-fill bg-center">
          <img
            className="rounded-2xl h-full w-full bg-fill"
            src={imageSrc}
            alt={`bg-${index + 1}`}
          />
          <div className="absolute inset-0 bg-[rgba(0,0,0,0.20)] bg-opacity-10 rounded-2xl"></div>
        </div>
      ))}
    </section>
  );
};

export default Imagge;
