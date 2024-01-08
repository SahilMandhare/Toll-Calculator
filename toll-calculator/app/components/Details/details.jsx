import React from "react";
import { useSelector } from "react-redux";

const details = (props) => {
  const data = useSelector((state) => state.tolldata.data);

  return data ? (
    <>
      <div className="m-10 ml-1 absolute w-2/4 h-auto top-1/4 left-0 bg-slate-700 rounded-lg">
        <h1 onClick={props.click} className="m-1 text-right">X</h1>
        <h1 className="m-2 text-center">Deatils</h1>
        <div className="my-8 mx-16">
          <table className="text-center w-full table-fixed">
            <thead>
              <tr>
                <th>Toll Name</th>
                <th>Price ({data.tolls[0].currency})</th>
                <th>Distance (KM)</th>
              </tr>
            </thead>
            <tbody>
              {data
                ? data.tolls.map((toll) => {
                    if (toll.name) {
                      return (
                        <tr>
                          <td>{toll.name}</td>
                          <td>{toll.cashCost}</td>
                          <td>{Number(toll.arrival.distance) / 1000}</td>
                        </tr>
                      );
                    } else {
                      return (
                        <>
                          <tr>
                          <td rowSpan="2">Start : {toll.start.name} <br /> <br /> End : {toll.end.name}</td>
                          <td>-</td>
                          <td>{Number(toll.start.arrival.distance) / 1000}</td>
                          </tr>
                          <tr>
                          <td>{toll.cashCost}</td>
                          <td>{Number(toll.end.arrival.distance) / 1000}</td>
                          </tr>
                        </>
                      );
                    }
                  })
                : null}
            </tbody>
          </table>
        </div>
      </div>
    </>
  ) : null
};

export default details;
