import ElementsGroup from "./ElementsGroup";
import { useDispatch, useSelector } from "react-redux";
import { elementActionCreators, StateType } from "../../../store";
import { bindActionCreators } from "redux";
import { ComponentType } from "../../../types";
import { getFlexComponent, getTextComponent } from "../../../models/components";

const LeftPanel = () => {
  const [elements, selectedElement] = useSelector(
    (state: StateType) =>
      [state.elements.elements, state.elements.selectedElement] as [
        ComponentType[],
        ComponentType | false
      ]
  );

  const dispatch = useDispatch();
  const { AddElement, ChangeSelectdElement } = bindActionCreators(
    elementActionCreators,
    dispatch
  );

  const getChildrens = () => {
    return elements.filter((e: ComponentType) => e.parentId === false);
  };

  const showLeftPanel = useSelector(
    (state: StateType) => state.editor.showLeftPanel
  );
  return (
    <div className={`left-panel ${showLeftPanel ? "show" : "hide"}`}>
      <div className="add-btns">
        <button
          className="btn"
          onClick={() => {
            AddElement({
              element: getFlexComponent(),
              parentId: selectedElement ? selectedElement.id : false,
            });
          }}
        >
          Add Div
        </button>
        <button
          className="btn"
          onClick={() => {
            AddElement({
              element: getTextComponent(),
              parentId: selectedElement ? selectedElement.id : false,
            });
          }}
        >
          Add Text
        </button>
      </div>
      <div className="elements-wrapper">
        <ElementsGroup elements={getChildrens()} pl={0} hidden={false} />
        <div
          className="blank-area"
          onClick={() =>
            ChangeSelectdElement({
              element: false,
            })
          }
        ></div>
      </div>
    </div>
  );
};

export default LeftPanel;
