import ElementsGroup from "./ElementsGroup";
import { useDispatch, useSelector } from "react-redux";
import { elementActionCreators, StateType } from "../../../store";
import HTMLElement, { div } from "../../../models/HTMLElement";
import { bindActionCreators } from "redux";

const LeftPanel = () => {
  const [elements, selectedElement] = useSelector(
    (state: StateType) =>
      [state.elements.elements, state.elements.selectedElement] as [
        HTMLElement[],
        HTMLElement | false
      ]
  );

  const dispatch = useDispatch();
  const { AddElement, ChangeSelectdElement } = bindActionCreators(
    elementActionCreators,
    dispatch
  );

  const getChildrens = () => {
    return elements.filter((e: HTMLElement) => e.parentUUID === false);
  };

  const showLeftPanel = useSelector(
    (state: StateType) => state.editor.showLeftPanel
  );
  return (
    <div className={`left-panel ${showLeftPanel ? "show" : "hide"}`}>
      <button
        onClick={() => {
          AddElement({
            element: div(),
            parentId: selectedElement ? selectedElement.uuid : false,
          });
        }}
      >
        Add Div
      </button>
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
