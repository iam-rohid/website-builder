import { BsLayoutSidebar, BsLayoutSidebarReverse } from "react-icons/bs";
import {
  AiOutlineDesktop,
  AiOutlineMobile,
  AiOutlineTablet,
} from "react-icons/ai";
import { IoMoonSharp, IoSunnySharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, DeviceSizes, StateType } from "../../store";
import { useEffect } from "react";

const ToolBar = () => {
  const dispatch = useDispatch();

  const { ChangeDeviceSize, ShowLeftPanel, ShowRightPanel, ChangeDarkMode } =
    bindActionCreators(actionCreators, dispatch);

  const [showLeftPanel, showRightPanel, deviceSize, darkMode] = useSelector(
    (state: StateType) => [
      state.editor.showLeftPanel,
      state.editor.showRightPanel,
      state.editor.deviceSize,
      state.editor.darkMode,
    ]
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    return () => {};
  }, [darkMode]);

  return (
    <div className="tool-bar">
      <button
        className={`tool-bar-icon-btn border-right  ${
          showLeftPanel && "active"
        }`}
        onClick={() => ShowLeftPanel(!showLeftPanel)}
      >
        <BsLayoutSidebar className={`tool-bar-icon`} />
      </button>
      <div className="tool-bar-content-wrapper"></div>

      <div className="device-size-btn-wrapper border-left">
        <button
          onClick={() => ChangeDeviceSize(DeviceSizes.DESKTOP)}
          className={`tool-bar-icon-btn desktop-btn ${
            deviceSize === DeviceSizes.DESKTOP && "active"
          }`}
        >
          <AiOutlineDesktop className="tool-bar-icon" />
        </button>
        <button
          onClick={() => ChangeDeviceSize(DeviceSizes.TABLET)}
          className={`tool-bar-icon-btn desktop-btn ${
            deviceSize === DeviceSizes.TABLET && "active"
          }`}
        >
          <AiOutlineTablet className="tool-bar-icon" />
        </button>
        <button
          onClick={() => ChangeDeviceSize(DeviceSizes.MOBILE)}
          className={`tool-bar-icon-btn desktop-btn ${
            deviceSize === DeviceSizes.MOBILE && "active"
          }`}
        >
          <AiOutlineMobile className="tool-bar-icon" />
        </button>
      </div>

      <button
        className={`tool-bar-icon-btn border-left active`}
        onClick={() => ChangeDarkMode(!darkMode)}
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
        onClick={() => ShowRightPanel(!showRightPanel)}
      >
        <BsLayoutSidebarReverse className={`tool-bar-icon`} />
      </button>
    </div>
  );
};

export default ToolBar;
