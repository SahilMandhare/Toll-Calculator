import React, { useState } from "react";
import { useSelector } from "react-redux";
import Details from "./details";

const maindetail = () => {
  const data = useSelector((state) => state.tolldata.data);

  const [show, setShow] = useState(false);

  const showDetails = () => {
    setShow(!show);
  };
  // console.log(data)

  return data ? (
    <>
      <div className="m-10 flex gap-5 justify-center items-center">
        <div className="p-8 flex gap-3 justify-center items-center bg-green-500 bg-opacity-50 rounded-lg">
          <h5>Distance : </h5>
          <span>{data.summary.distance.metric}</span>
        </div>
        <div className="p-8 flex gap-3 justify-center items-center bg-yellow-500 bg-opacity-50 rounded-lg">
          <h5>Fuel : </h5>
          <span>{data.costs.fuel} Lr</span>
        </div>
        <div className="p-8 flex gap-3 justify-center items-center bg-red-500 bg-opacity-50 rounded-lg">
          <h5>Price : </h5>
          <span>
            {data.costs.cash} {data.tolls[0].currency}
          </span>
        </div>
        <div className="p-8 flex gap-3 justify-center items-center bg-blue-500 bg-opacity-50 rounded-lg">
          <h5>Duration : </h5>
          <span>{data.summary.duration.text}</span>
        </div>
        <div onClick={showDetails} className="underline">
          Additional Information
        </div>
        {show && <Details click={showDetails} />}
      </div>
    </>
  ) : null;
};

export default maindetail;
