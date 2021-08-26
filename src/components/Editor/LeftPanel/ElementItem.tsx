import React, { useEffect, useState } from "react";
import Element from "../../../models/element";
import { MdArrowDropDown } from "react-icons/md";

const ElementItem = (props: { element: Element }) => {
  const [expaned, setExpaned] = useState(false);
  const [childElements, setChildElements] = useState<Element[]>([]);

  const getChildElements = () => {
    let elements: Element[] = [];
    props.element.childrens.map((child) => {
      if (typeof child !== "string") {
        elements.push(child);
      }
    });
    setChildElements(elements);
  };

  useEffect(() => {
    getChildElements();
    return () => {};
  }, []);

  return (
    <div className="element-item">
      <button
        className={`element-btn ${expaned ? "expanded" : "collapsed"}`}
        onClick={() =>
          setExpaned(childElements.length === 0 ? false : !expaned)
        }
      >
        <div className={`icon`}>
          {childElements.length > 0 && <MdArrowDropDown />}
        </div>
        <p>{props.element.name}</p>
      </button>
      {childElements.length > 0 && expaned && (
        <div className="child-elements">
          {childElements.map((child) => (
            <ElementItem element={child} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ElementItem;
