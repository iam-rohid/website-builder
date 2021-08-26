import { useState } from "react";
import { deviceType } from "../../pages/Editor";

const ViewPort = (props: {
  showLeftPanel: boolean;
  showRightPanel: boolean;
  deviceSize: deviceType;
}) => {
  const { showLeftPanel, showRightPanel, deviceSize } = props;

  const [style, setStyle] = useState(``);
  const [html, setHtml] = useState(``);
  const [script, Script] = useState(``);

  return (
    <div
      className={`view-port ${showLeftPanel && "has-left-panel"} ${
        showRightPanel && "has-right-panel"
      }`}
    >
      <div className="wrapper">
        <div
          className={`frame ${
            deviceSize === "mobile"
              ? "mobile"
              : deviceSize === "tablet"
              ? "tablet"
              : "desktop"
          }`}
          style={{
            transform: `translate(-50%, -50%)`,
          }}
        >
          <iframe
            title="hello"
            srcDoc={`
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <style>
              ${style}
            </style>
          </head>
          <body>
            ${html}
            <script>
            ${script}
            </script>
          </body>
          </html>
          `}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ViewPort;
