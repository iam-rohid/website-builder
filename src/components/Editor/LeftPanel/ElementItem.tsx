import { useState } from "react";
import Element from "../../../models/element";
import { MdArrowDropDown } from "react-icons/md";
import ElementsGroup from "./ElementsGroup";

const ElementItem = (props: { element: Element }) => {
  const { element } = props;
  const [expaned, setExpaned] = useState(false);
  // const { selectedElementID, setSelectedElementID, elements } = useEditor();

  // const getChildrens = () => {
  //   return elements.filter((e: Element) => e.parentId === element.uid);
  // };

  return (
    <div className="element-item">
      {/* <button
        className={`element-btn ${expaned ? "expanded" : "collapsed"} ${
          selectedElementID === props.element.uid && "selected"
        }`}
        onClick={() => {
          setExpaned(getChildrens().length > 0 && !expaned);
          setSelectedElementID(props.element.uid);
        }}
      >
        <div className="icon">
          {getChildrens().length > 0 && <MdArrowDropDown />}
        </div>
        <p>{props.element.name}</p>
      </button>
      {<ElementsGroup elements={getChildrens()} hidden={!expaned} />} */}
    </div>
  );
};

export default ElementItem;
