import LeftPanel from "../components/Editor/LeftPanel";
import RightPanel from "../components/Editor/RightPanel";
import ToolBar from "../components/Editor/ToolBar";
import ViewPort from "../components/Editor/ViewPort";
import EditorProvider from "../contexts/EditorContext";
export type deviceType = "desktop" | "tablet" | "mobile";

const Editor = () => {
  return (
    <EditorProvider>
      <div className="editor">
        <ToolBar />
        <ViewPort />
        <LeftPanel />
        <RightPanel />
      </div>
    </EditorProvider>
  );
};

export default Editor;
