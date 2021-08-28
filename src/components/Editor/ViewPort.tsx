import { DeviceSizes, StateType } from "../../store";
import { useSelector } from "react-redux";

const ViewPort = () => {
  const [showLeftPanel, showRightPanel, deviceSize, leftPanelWidth, html] =
    useSelector(
      (state: StateType) =>
        [
          state.editor.showLeftPanel,
          state.editor.showRightPanel,
          state.editor.deviceSize,
          state.editor.leftPanelWidth,
          state.elements.html,
        ] as [boolean, boolean, DeviceSizes, number, string]
    );

  return (
    <div
      className={`view-port ${showRightPanel && "has-right-panel"}`}
      style={{
        paddingLeft: `${showLeftPanel ? leftPanelWidth : 0}px`,
      }}
    >
      <div className="wrapper">
        <div
          className={`frame ${
            deviceSize === DeviceSizes.MOBILE
              ? "mobile"
              : deviceSize === DeviceSizes.TABLET
              ? "tablet"
              : "desktop"
          }`}
          style={{
            transform: `translate(-50%, -50%)`,
          }}
        >
          <iframe title="hello" srcDoc={html}></iframe>
        </div>
      </div>
    </div>
  );
};

export default ViewPort;
