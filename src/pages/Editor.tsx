import { useState } from "react";
import LeftPanel from "../components/Editor/LeftPanel";
import RightPanel from "../components/Editor/RightPanel";
import ToolBar from "../components/Editor/ToolBar";
import ViewPort from "../components/Editor/ViewPort";

export type deviceType = "desktop" | "tablet" | "mobile";

const Editor = () => {
  const [showLeftPanel, setShowLeftPanel] = useState(true);
  const [showRightPanel, setShowRightPanel] = useState(true);

  const [deviceSize, setDeviceSize] = useState<deviceType>("desktop");

  return (
    <div className="editor">
      <ToolBar
        showLeftPanel={showLeftPanel}
        showRightPanel={showRightPanel}
        setShowleftPanel={setShowLeftPanel}
        setShowRightPanel={setShowRightPanel}
        deviceSize={deviceSize}
        setDeviceSize={setDeviceSize}
      />
      <ViewPort
        showLeftPanel={showLeftPanel}
        showRightPanel={showRightPanel}
        deviceSize={deviceSize}
      />
      <LeftPanel showLeftPanel={showLeftPanel} />
      <RightPanel showRightPanel={showRightPanel} />
    </div>
  );
};

export default Editor;
