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
    <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
  </head>
  <body>
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
