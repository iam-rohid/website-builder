import Element from "../../../models/element";
import ElementItem from "./ElementItem";
const ElementsGroup = (props: { elements: Element[]; hidden: boolean }) => {
  const { elements, hidden } = props;
  return (
    <div className={`child-elements ${hidden ? "hidden" : "visible"}`}>
      {elements.map((element: Element) => {
        return <ElementItem key={element.uid} element={element} />;
      })}
    </div>
  );
};

export default ElementsGroup;
