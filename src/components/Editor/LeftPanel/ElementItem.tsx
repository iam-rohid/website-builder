import { IoIosArrowDown } from "react-icons/io";
import ElementsGroup from "./ElementsGroup";

import { useDispatch, useSelector } from "react-redux";
import { elementActionCreators, StateType } from "../../../store";
import { bindActionCreators } from "redux";
import HTMLElement from "../../../models/HTMLElement";

const ElementItem = (props: { element: HTMLElement; pl: number }) => {
  const { element, pl } = props;

  const [elements, selectedElement] = useSelector(
    (state: StateType) =>
      [state.elements.elements, state.elements.selectedElement] as [
        HTMLElement[],
        HTMLElement | false
      ]
  );
  const dispatch = useDispatch();
  const { ChangeSelectdElement } = bindActionCreators(
    elementActionCreators,
    dispatch
  );

  const getChildrens = () => {
    return elements.filter((e: HTMLElement) => e.parentUUID === element.uuid);
  };

  return (
    <div>
      <button
        className={`element-btn ${
          element.expanded === true ? "expanded" : "collapsed"
        } ${
          selectedElement && selectedElement.uuid === element.uuid && "selected"
        }`}
        style={{
          paddingLeft: `${pl}px`,
        }}
        onClick={() => {
          ChangeSelectdElement({
            element: element,
          });
        }}
      >
        <div className="btn-content">
          <div className="icon" onClick={() => {}}>
            {getChildrens().length > 0 && <IoIosArrowDown />}
          </div>
          <p>{element.name}</p>
        </div>
      </button>
      {
        <ElementsGroup
          elements={getChildrens()}
          pl={pl}
          hidden={element.expanded === undefined || !element.expanded}
        />
      }
    </div>
  );
};

export default ElementItem;
