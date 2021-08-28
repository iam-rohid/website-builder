import { useSelector } from "react-redux";
import { stateType } from "../../../store";

const RightPanel = () => {
  const showRightPanel = useSelector(
    (state: stateType) => state.editor.showRightPanel
  );

  return (
    <div className={`right-panel ${showRightPanel ? "show" : "hide"}`}></div>
  );
};

export default RightPanel;
