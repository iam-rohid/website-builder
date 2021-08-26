import React from "react";

const RightPanel = (props: { showRightPanel: boolean }) => {
  return (
    <div className={`right-panel ${props.showRightPanel ? "show" : "hide"}`}>
      Right Panel
    </div>
  );
};

export default RightPanel;
