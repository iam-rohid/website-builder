import Element from "../../../models/element";
import ElementItem from "./ElementItem";

const LeftPanel = (props: { showLeftPanel: boolean; elements: Element[] }) => {
  return (
    <div className={`left-panel ${props.showLeftPanel ? "show" : "hide"}`}>
      <div className="child-elements root-elements-group">
        {props.elements.map((element) => (
          <ElementItem element={element} />
        ))}
      </div>
    </div>
  );
};

export default LeftPanel;
