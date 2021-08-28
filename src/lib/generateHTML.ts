import { tailwindCDN } from "../constants";
import { ComponentsEnum } from "../enums";
import { ComponentType } from "../types";

export const getHtmlDocumnet = (components: ComponentType[]): string => {
  let doc = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="${tailwindCDN}" rel="stylesheet">
  </head>
  <body>${components
    .filter((component) => component.parentId === false)
    .map((component) => getHtmlComponent(component, components))
    .join("")}</body>
  </html>`;
  return doc.replaceAll("\n", "");
};

const getHtmlClasses = (component: ComponentType): string => {
  let classNames: string[] = [];
  if (component.elementClasses) {
    classNames = [...classNames, ...component.elementClasses];
  }
  component.backgorundColor && classNames.push(component.backgorundColor);

  if (component.type === ComponentsEnum.FLEX_COMPONENT) {
    classNames.push("flex");
    classNames.push(component.flexDirection);
    classNames.push(component.flexWarp);
    classNames.push(component.justifyContent);
    classNames.push(component.alignItems);
  } else if (component.type === ComponentsEnum.TEXT_COMPONENT) {
    classNames.push(component.fontSize);
    classNames.push(component.fontWeight);
    classNames.push(component.color);
  }
  return classNames.join(" ");
};

export const getHtmlComponent = (
  component: ComponentType,
  components: ComponentType[]
): string => {
  const childrens = components.filter((c) => c.parentId === component.id);

  return `<${component.tag} ${
    component.elementId ? `id="${component.elementId}"` : ""
  }  class="${getHtmlClasses(component)}">${
    component.type === ComponentsEnum.FLEX_COMPONENT && childrens
      ? childrens.map((child) => getHtmlComponent(child, components)).join("")
      : component.type === ComponentsEnum.TEXT_COMPONENT
      ? component.value
      : ""
  }</${component.tag}>`;
};
