import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { IoWalletOutline } from "react-icons/io5";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { RiStackLine } from "react-icons/ri";

const iconContainer: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100px",
  height: "100px",
  borderRadius: "50%",
  backgroundColor: "#008DDA",
};

const icon: React.CSSProperties = {
  width: "48px",
  height: "48px",
  color: "white",
};

const WorkProcess = () => {
  return (
    <div className="wrapper">
      <h1 className="header1">Our Work Process</h1>
      <h2 className="header2">Our Professional Car Washing Process</h2>
      <div className="mt-10 flex flex-col lg:flex-row justify-center items-center gap-4">
        <div className="flex flex-col items-center justify-center gap-4">
          <div style={iconContainer}>
            <FaRegFileAlt style={icon} />
          </div>
          <p className="font-semibold text-lg text-center">Choose your service</p>
        </div>
        <MdOutlineDoubleArrow className="text-5xl rotate-90 lg:rotate-0" />
        <div className="flex flex-col items-center justify-center gap-4">
          <div style={iconContainer}>
            <FaRegCalendarCheck style={icon} />
          </div>
          <p className="font-semibold text-lg text-center">Make an appointment</p>
        </div>
        <MdOutlineDoubleArrow className="text-5xl rotate-90 lg:rotate-0" />
        <div className="flex flex-col items-center justify-center gap-4">
          <div style={iconContainer}>
            <RiStackLine style={icon} />
          </div>
          <p className="font-semibold text-lg text-center">Get your service</p>
        </div>
        <MdOutlineDoubleArrow className="text-5xl rotate-90 lg:rotate-0" />
        <div className="flex flex-col items-center justify-center gap-4">
          <div style={iconContainer}>
            <IoWalletOutline style={icon} />
          </div>
          <p className="font-semibold text-lg text-center">Arrive and pay</p>
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;
