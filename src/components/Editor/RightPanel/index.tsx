import { useSelector } from "react-redux";
import { ComponentsEnum } from "../../../enums";
import { StateType } from "../../../store";
import { ComponentType } from "../../../types";
import CommonProps from "./CommonProps";
import FlexComponentProps from "./FlexComponentProps";
import TextComponentProps from "./TextComponentProps";
import Wrapper from "./Wrapper";

const RightPanel = () => {
  const [showRightPanel, selectedElement] = useSelector(
    (state: StateType) =>
      [state.editor.showRightPanel, state.elements.selectedElement] as [
        boolean,
        ComponentType | false
      ]
  );

  const getProps = (): JSX.Element | null => {
    if (!selectedElement) return null;

    switch (selectedElement.type) {
      case ComponentsEnum.FLEX_COMPONENT:
        return <FlexComponentProps component={selectedElement} />;
      case ComponentsEnum.TEXT_COMPONENT:
        return <TextComponentProps component={selectedElement} />;
      default:
        return null;
    }
  };

  return (
    <Wrapper className={`right-panel ${showRightPanel ? "show" : "hide"}`}>
      <>
        {selectedElement ? <CommonProps component={selectedElement} /> : null}
        {getProps()}
      </>
    </Wrapper>
  );
};

export default RightPanel;
