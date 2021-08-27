import { BsLayoutSidebar, BsLayoutSidebarReverse } from "react-icons/bs";
import {
  AiOutlineDesktop,
  AiOutlineMobile,
  AiOutlineTablet,
} from "react-icons/ai";
import { IoMoonSharp, IoSunnySharp } from "react-icons/io5";
import { useEditor } from "../../contexts/EditorContext";

const ToolBar = () => {
  const {
    showLeftPanel,
    setShowLeftPanel,
    showRightPanel,
    setShowRightPanel,
    deviceSize,
    setDeviceSize,
    darkMode,
    setDarkMode,
  } = useEditor();

  return (
    <div className="tool-bar">
      <button
        className={`tool-bar-icon-btn border-right  ${
          showLeftPanel && "active"
        }`}
        onClick={() => setShowLeftPanel(!showLeftPanel)}
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
        className={`tool-bar-icon-btn border-left active`}
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? (
          <IoMoonSharp className={`tool-bar-icon`} />
        ) : (
          <IoSunnySharp className={`tool-bar-icon`} />
        )}
      </button>

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
