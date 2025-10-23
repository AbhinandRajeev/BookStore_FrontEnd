import React from 'react';

function Preloader() {
  return (
    <div className="h-screen flex flex-col justify-center items-center ">
      <div className="mb-6">
        <img
          src="/images/preloadergif.gif"
          alt=""
          className="h-32 "
        />
      </div>
      <h1 className="text-2xl font-semibold text-black tracking-wide animate-pulse">
        Stacking up the shelves...
      </h1>

    </div>
  );
}

export default Preloader;
