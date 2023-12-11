import React, { useEffect, useState } from "react";

const BasicUseEffect = () => {
  const [test, setTest] = useState(0);

  useEffect(() => {
    if (test === 0) {
      document.title = "whatsApp";
    } else {
      document.title = `(${test} new messages)`;
    }
  });
  //   useEffect(()=>{
  //     console.log('hello');
  //   },[])
  return (
    <>
      <div className="container text-center text-capitalize">
        <h1>{test}</h1>
        <div onClick={() => setTest(test + 1)} className="btn btn-dark">
          Click
        </div>
      </div>
    </>
  );
};

export default BasicUseEffect;
