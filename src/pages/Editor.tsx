import { useState } from "react";
import LeftPanel from "../components/Editor/LeftPanel";
import RightPanel from "../components/Editor/RightPanel";
import ToolBar from "../components/Editor/ToolBar";
import ViewPort from "../components/Editor/ViewPort";
import Text from "../models/text";
import Element from "../models/element";
import Group from "../models/group";
export type deviceType = "desktop" | "tablet" | "mobile";

const Editor = () => {
  const [showLeftPanel, setShowLeftPanel] = useState(true);
  const [showRightPanel, setShowRightPanel] = useState(false);

  const [deviceSize, setDeviceSize] = useState<deviceType>("desktop");

  const text = new Text();
  const group = new Group();
  const group2 = new Group();
  text.childrens = ["Hello World"];

  group.childrens = [text, text];
  group2.childrens = [group];

  const [elements, setElements] = useState<Element[]>([group2, text, text]);

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
        elements={elements}
      />
      <LeftPanel showLeftPanel={showLeftPanel} elements={elements} />
      <RightPanel showRightPanel={showRightPanel} />
    </div>
  );
};

export default Editor;
