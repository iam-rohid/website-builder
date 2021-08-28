import ElementsGroup from "./ElementsGroup";
import { useDispatch, useSelector } from "react-redux";
import {
  editorActionCreators,
  elementActionCreators,
  StateType,
} from "../../../store";
import { bindActionCreators } from "redux";
import { ComponentType } from "../../../types";
import { getFlexComponent, getTextComponent } from "../../../models/components";
import { SyntheticEvent, useState } from "react";
import { Resizable, ResizeCallbackData } from "react-resizable";

const LeftPanel = () => {
  const [elements, selectedElement] = useSelector(
    (state: StateType) =>
      [state.elements.elements, state.elements.selectedElement] as [
        ComponentType[],
        ComponentType | false
      ]
  );

  const [resizing, setResizing] = useState(false);

  const dispatch = useDispatch();
  const { AddElement, ChangeSelectdElement } = bindActionCreators(
    elementActionCreators,
    dispatch
  );
  const [leftPanelWidth] = useSelector((state: StateType) => [
    state.editor.leftPanelWidth,
  ]);
  const { ResizeLeftPanel } = bindActionCreators(
    editorActionCreators,
    dispatch
  );

  const getChildrens = () => {
    return elements.filter((e: ComponentType) => e.parentId === false);
  };

  const showLeftPanel = useSelector(
    (state: StateType) => state.editor.showLeftPanel
  );

  const onResize = (
    event: SyntheticEvent<Element, Event>,
    data: ResizeCallbackData
  ) => {
    ResizeLeftPanel(data.size.width);
  };

  return (
    <Resizable
      width={leftPanelWidth}
      height={Infinity}
      onResizeStart={() => setResizing(true)}
      onResizeStop={() => setResizing(false)}
      onResize={onResize}
      axis="x"
      minConstraints={[220, 220]}
      maxConstraints={[480, 480]}
      handle={<div className="drag-bar"></div>}
    >
      <div
        className={`left-panel ${showLeftPanel ? "show" : "hide"}`}
        style={{
          width: `${leftPanelWidth}px`,
          left: `${showLeftPanel ? 0 : -leftPanelWidth}px`,
        }}
      >
        {resizing && <div className="block-panel"></div>}
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
    </Resizable>
  );
};

export default LeftPanel;
