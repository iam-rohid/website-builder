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
      html {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      }
    </style>
  </head>
  <body style="margin: 0; padding: 0">
    ${elements.map((element) => element.getHtml()).join("\n")}
  </body>
  </html>
  `;
};
