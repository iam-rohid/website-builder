import React from "react";

const LeftPanel = (props: { showLeftPanel: boolean }) => {
  return (
    <div className={`left-panel ${props.showLeftPanel ? "show" : "hide"}`}>
      Left Panel
    </div>
  );
};

export default LeftPanel;
