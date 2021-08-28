import { ComponentType } from "../types";

export const getHtml = (elements: ComponentType[]): string => {
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
    
  </body>
  </html>
  `;
};

// ${elements
//   .map((element: Element) => {
//     if (element.parentId === null) {
//       return element.getHtml(
//         elements.filter((elem) => elem.parentId !== null)
//       );
//     }
//     return null;
//   })
//   .join("\n")}
