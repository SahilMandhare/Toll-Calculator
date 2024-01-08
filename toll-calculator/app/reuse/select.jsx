import React from "react";

const select = (props) => {
  const cars =["Car","Truck"];
  return (
    <select
      name={props.name}
      id={props.id}
      value={props.value}
      onChange={props.onChange}
      className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    >
      {cars.map((car) => <option key={car} value={car}>{car}</option>)}
    </select>
  );
};

export default select;
