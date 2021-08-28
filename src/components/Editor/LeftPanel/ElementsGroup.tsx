import ElementItem from "./ElementItem";
import HTMLElement from "../../../models/HTMLElement";

const ElementsGroup = (props: {
  elements: HTMLElement[];
  hidden: boolean;
  pl: number;
}) => {
  const { elements, hidden, pl } = props;
  console.log(hidden);
  return (
    <div className={`child-elements ${hidden ? "hidden" : "visible"}`}>
      {elements.map((element) => {
        return <ElementItem key={element.uuid} element={element} pl={pl + 8} />;
      })}
    </div>
  );
};

export default ElementsGroup;
