import { useState } from "react";
import { useEditor } from "../../../contexts/EditorContext";
import ColorPicker from "./ColorPicker";

const RightPanel = () => {
  const { showRightPanel, addClassToSelectedElement, selectedElementID } =
    useEditor();
  const [classValue, setClassValue] = useState("");
  return (
    <div className={`right-panel ${showRightPanel ? "show" : "hide"}`}>
      <ColorPicker />
    </div>
  );
};

export default RightPanel;
