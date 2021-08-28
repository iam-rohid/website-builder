import ElementItem from "./ElementItem";
import { ComponentType } from "../../../types";

const ElementsGroup = (props: {
  elements: ComponentType[];
  hidden: boolean;
  pl: number;
}) => {
  const { elements, hidden, pl } = props;
  console.log(hidden);
  return (
    <div className={`child-elements ${hidden ? "hidden" : "visible"}`}>
      {elements.map((element) => {
        return <ElementItem key={element.id} element={element} pl={pl + 8} />;
      })}
    </div>
  );
};

export default ElementsGroup;
