import React, { useEffect, useState } from "react";

const Window = () => {
  const [size, setSize] = useState(window.innerWidth);

  const handleSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleSize);
    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, [size]);
  return (
    <>
      <div className="container text-center">
        <h1>Window size: {size}px</h1>
      </div>
    </>
  );
};
export default Window;
