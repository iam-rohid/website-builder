import { getHtml } from "../../lib/generateElements";
import { deviceType } from "../../pages/Editor";
import Element from "../../models/element";

const ViewPort = (props: {
  showLeftPanel: boolean;
  showRightPanel: boolean;
  deviceSize: deviceType;
  elements: Element[];
}) => {
  const { showLeftPanel, showRightPanel, deviceSize, elements } = props;

  return (
    <div
      className={`view-port ${showLeftPanel && "has-left-panel"} ${
        showRightPanel && "has-right-panel"
      }`}
    >
      <div className="wrapper">
        <div
          className={`frame ${
            deviceSize === "mobile"
              ? "mobile"
              : deviceSize === "tablet"
              ? "tablet"
              : "desktop"
          }`}
          style={{
            transform: `translate(-50%, -50%)`,
          }}
        >
          <iframe title="hello" srcDoc={getHtml(elements)}></iframe>
        </div>
      </div>
    </div>
  );
};

export default ViewPort;
