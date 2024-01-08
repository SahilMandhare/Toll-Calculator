import React from "react";

const button = (props) => {
  return (
    <button
      type={props.type}
      onSubmit={props.onSubmit}
      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      {props.name}
    </button>
  );
};

export default button;
