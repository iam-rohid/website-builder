import { useEditor } from "../../../contexts/EditorContext";
import Text from "../../../models/text";
import ElementsGroup from "./ElementsGroup";
import Element from "../../../models/element";
import Group from "../../../models/group";

const LeftPanel = () => {
  const { showLeftPanel, addElement, elements } = useEditor();
  const getChildrens = () => {
    return elements.filter((e: Element) => e.parentId === null);
  };
  return (
    <div className={`left-panel ${showLeftPanel ? "show" : "hide"}`}>
      <button
        onClick={() => {
          addElement(new Text());
        }}
      >
        Add Text
      </button>
      <button
        onClick={() => {
          addElement(new Group());
        }}
      >
        Add Group
      </button>
      <div className="elements-wrapper">
        <ElementsGroup elements={getChildrens()} hidden={false} />
      </div>
    </div>
  );
};

export default LeftPanel;
