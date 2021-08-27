import { useEditor } from "../../contexts/EditorContext";
import Element from "../../models/element";

const RightPanel = () => {
  const { showRightPanel, selectedElement, elements, setElements } =
    useEditor();
  return (
    <div className={`right-panel ${showRightPanel ? "show" : "hide"}`}>
      {selectedElement && (
        <div>
          <p>width</p>
          <input
            type="number"
            value={
              elements.filter(
                (elem: Element) => elem.uid === selectedElement
              )[0].width
            }
            onChange={(e) => {
              setElements(
                elements.map((element: Element) => {
                  if (element.uid === selectedElement) {
                    element.width = parseInt(e.target.value);
                  }
                  return element;
                })
              );
            }}
          />
        </div>
      )}
    </div>
  );
};

export default RightPanel;
