import React from "react";

const label = (props) => {
  return (
    <label htmlFor={props.htmlFor} className="block text-sm font-medium leading-6 text-white-900">
      {props.name}
    </label>
  );
};

export default label;
