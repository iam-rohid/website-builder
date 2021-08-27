import Element from "../models/element";

export const getHtml = (elements: Element[]) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
      *,
      ::after,
      ::before {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
      }
      
      button {
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
      }
      html {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      }
    </style>
  </head>
  <body style="margin: 0; padding: 0">
    ${elements
      .map((element) => {
        if (element.parentId === null) {
          return element.getHtml(
            elements.filter((elem) => elem.parentId !== null)
          );
        }
      })
      .join("\n")}
  </body>
  </html>
  `;
};
