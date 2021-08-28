// import ElementsGroup from "./ElementsGroup";
// import Element from "../../../models/element";
import { useSelector } from "react-redux";
import { StateType } from "../../../store";

const LeftPanel = () => {
  // const getChildrens = () => {
  //   return elements.filter((e: Element) => e.parentId === null);
  // };
  const showLeftPanel = useSelector(
    (state: StateType) => state.editor.showLeftPanel
  );
  return (
    <div className={`left-panel ${showLeftPanel ? "show" : "hide"}`}>
      <div className="elements-wrapper">
        {/* <ElementsGroup elements={getChildrens()} hidden={false} /> */}
      </div>
    </div>
  );
};

export default LeftPanel;
