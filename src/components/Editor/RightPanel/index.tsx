import { useSelector } from "react-redux";
import { StateType } from "../../../store";

const RightPanel = () => {
  const showRightPanel = useSelector(
    (state: StateType) => state.editor.showRightPanel
  );

  return (
    <div className={`right-panel ${showRightPanel ? "show" : "hide"}`}></div>
  );
};

export default RightPanel;
