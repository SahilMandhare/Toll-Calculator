import React, { useEffect, useState } from "react";
import Input from "../reuse/input";
import Button from "../reuse/button";
import Label from "../reuse/label";
import Select from "../reuse/select";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../redux/tollinfo";
import axios from "axios";

const searchtoll = () => {
  const [tollFrom, setTollFrom] = useState("");
  const [tollTo, setTollTo] = useState("");
  const [tollType, setTollType] = useState("Car");

  const dispatch = useDispatch();

  const tollHandler = async (e) => {
    e.preventDefault();
    dispatch(
      update({
        from: tollFrom,
        to: tollTo,
        type: tollType,
      })
    );

    if (tollFrom && tollTo) {
      getData();
    }
  };

  const getData = async () => {
    try {
      const data = await axios.post("http://localhost:4000/toll", {
        body: {
          from: tollFrom,
          to: tollTo,
        },
      });
      console.log(data.data);
    } catch (error) {
      throw error;
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white-900">
            Find the Path
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            action="/"
            onSubmit={tollHandler}
            method="POST"
          >
            <div>
              <Label htmlFor="from" name="From" />
              <div className="mt-2">
                <Input
                  id="from"
                  name="from"
                  type="text"
                  value={tollFrom}
                  onChange={(e) => {
                    setTollFrom(e.target.value);
                  }}
                  placeholder="Enter Current Address"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <Label htmlFor="to" name="To" />
              </div>
              <div className="mt-2">
                <Input
                  id="to"
                  name="to"
                  type="text"
                  value={tollTo}
                  onChange={(e) => {
                    setTollTo(e.target.value);
                  }}
                  placeholder="Enter Destination Address"
                />
              </div>
            </div>

            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <div className="flex items-center justify-between">
                <Label htmlFor="vehicle" name="Select" />
              </div>
              <Select
                name="vehicle"
                id="vehicle"
                value={tollType}
                onChange={(e) => {
                  setTollType(e.target.value);
                }}
              />
            </div>

            <div>
              <Button type="submit" name="Submit" onSubmit={tollHandler} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default searchtoll;
