import { IoIosArrowDown } from "react-icons/io";
import ElementsGroup from "./ElementsGroup";

import { useDispatch, useSelector } from "react-redux";
import { componentActionCreators, StateType } from "../../../store";
import { bindActionCreators } from "redux";
import { ComponentType } from "../../../types";

const ElementItem = (props: { element: ComponentType; pl: number }) => {
  const { element, pl } = props;

  const [elements, selectedElement] = useSelector(
    (state: StateType) =>
      [state.elements.components, state.elements.selectedElement] as [
        ComponentType[],
        ComponentType | false
      ]
  );
  const dispatch = useDispatch();
  const { ChangeSelectdComponent: ChangeSelectdElement } = bindActionCreators(
    componentActionCreators,
    dispatch
  );

  const getChildrens = () => {
    return elements.filter((e: ComponentType) => e.parentId === element.id);
  };

  return (
    <div>
      <button
        className={`element-btn ${
          element.expanded === true ? "expanded" : "collapsed"
        } ${
          selectedElement && selectedElement.id === element.id && "selected"
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
