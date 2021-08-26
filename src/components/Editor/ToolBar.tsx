import React from "react";

import { BsLayoutSidebar, BsLayoutSidebarReverse } from "react-icons/bs";
import {
  AiOutlineDesktop,
  AiOutlineMobile,
  AiOutlineTablet,
} from "react-icons/ai";
import { deviceType } from "../../pages/Editor";
const ToolBar = (props: {
  showLeftPanel: boolean;
  setShowleftPanel: (value: boolean) => void;
  showRightPanel: boolean;
  setShowRightPanel: (value: boolean) => void;
  deviceSize: deviceType;
  setDeviceSize: (value: deviceType) => void;
}) => {
  const {
    showLeftPanel,
    setShowleftPanel,
    showRightPanel,
    setShowRightPanel,
    deviceSize,
    setDeviceSize,
  } = props;
  return (
    <div className="tool-bar">
      <button
        className={`tool-bar-icon-btn border-right  ${
          showLeftPanel && "active"
        }`}
        onClick={() => setShowleftPanel(!showLeftPanel)}
      >
        <BsLayoutSidebar className={`tool-bar-icon`} />
      </button>
      <div className="tool-bar-content-wrapper"></div>
      <div className="device-size-btn-wrapper border-left">
        <button
          onClick={() => setDeviceSize("desktop")}
          className={`tool-bar-icon-btn desktop-btn ${
            deviceSize === "desktop" && "active"
          }`}
        >
          <AiOutlineDesktop className="tool-bar-icon" />
        </button>
        <button
          onClick={() => setDeviceSize("tablet")}
          className={`tool-bar-icon-btn desktop-btn ${
            deviceSize === "tablet" && "active"
          }`}
        >
          <AiOutlineTablet className="tool-bar-icon" />
        </button>
        <button
          onClick={() => setDeviceSize("mobile")}
          className={`tool-bar-icon-btn desktop-btn ${
            deviceSize === "mobile" && "active"
          }`}
        >
          <AiOutlineMobile className="tool-bar-icon" />
        </button>
      </div>
      <button
        className={`tool-bar-icon-btn border-left ${
          showRightPanel && "active"
        }`}
        onClick={() => setShowRightPanel(!showRightPanel)}
      >
        <BsLayoutSidebarReverse className={`tool-bar-icon`} />
      </button>
    </div>
  );
};

export default ToolBar;
