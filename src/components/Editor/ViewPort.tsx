import { DeviceSizes, stateType } from "../../store";
import { useSelector } from "react-redux";

const ViewPort = () => {
  const [showLeftPanel, showRightPanel, deviceSize] = useSelector(
    (state: stateType) => [
      state.editor.showLeftPanel,
      state.editor.showRightPanel,
      state.editor.deviceSize,
    ]
  );
  return (
    <div
      className={`view-port ${showLeftPanel && "has-left-panel"} ${
        showRightPanel && "has-right-panel"
      }`}
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
          <iframe title="hello" srcDoc={`<div></div>`}></iframe>
        </div>
      </div>
    </div>
  );
};

export default ViewPort;
