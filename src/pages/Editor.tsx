import LeftPanel from "../components/Editor/LeftPanel";
import RightPanel from "../components/Editor/RightPanel";
import ToolBar from "../components/Editor/ToolBar";
import ViewPort from "../components/Editor/ViewPort";

const Editor = () => {
  return (
    <div className="editor">
      <ToolBar />
      <ViewPort />
      <LeftPanel />
      <RightPanel />
    </div>
  );
};

export default Editor;
