import { getHtml } from "../../lib/generateElements";
import { useEditor } from "../../contexts/EditorContext";

const ViewPort = () => {
  const { showLeftPanel, showRightPanel, deviceSize, elements } = useEditor();

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
