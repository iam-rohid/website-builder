import { useState } from "react";
import { useEditor } from "../../../contexts/EditorContext";

const RightPanel = () => {
  const { showRightPanel, addClassToSelectedElement, selectedElementID } =
    useEditor();
  const [classValue, setClassValue] = useState("");
  return (
    <div className={`right-panel ${showRightPanel ? "show" : "hide"}`}>
      {selectedElementID && (
        <div>
          <input
            type="text"
            value={classValue}
            onChange={(e) => setClassValue(e.target.value)}
          />
          <button
            onClick={() => {
              addClassToSelectedElement(classValue);
              setClassValue("");
            }}
          >
            Add
          </button>
        </div>
      )}
    </div>
  );
};

export default RightPanel;
