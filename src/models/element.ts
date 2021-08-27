export default class Element {
  uid: string;
  parentId: string | null;
  name: string;
  tag: string;
  canHaveChildren: boolean = true;
  classes: string[] = [];
  id?: string;
  // Default Tailwind Classes
  backgroundColor?: string;
  padding?: string;
  margin?: string;
  display?: string;
  position?: string;

  constructor(tag: string, name: string) {
    this.uid = Math.random().toString().slice(2);
    this.parentId = null;
    this.tag = tag;
    this.name = name;
  }

  getChildren(elements: Element[]): string {
    let childs: Element[] = elements.filter(
      (elem) => elem.parentId === this.uid
    );
    return `${childs
      .map((child) =>
        typeof child === "string"
          ? child
          : child.getHtml(elements.filter((elem) => elem.parentId !== this.uid))
      )
      .join("")}`;
  }

  getClasses(): string {
    let c: string = `${this.display || ""} ${this.padding || ""} ${
      this.margin || ""
    } ${this.backgroundColor || ""} ${this.position || ""} ${this.classes.join(
      " "
    )}`;
    c = c
      .split(" ")
      .filter((str) => str !== "")
      .join(" ");
    return c;
  }

  getTag(children: string): string {
    return `<${this.tag} ${`class="${this.getClasses()}"`} ${
      this.id ? `id="${this.id}"` : ""
    } >
    ${children}
  </${this.tag}>`;
  }

  getHtml(childs: Element[]): string {
    return this.getTag(this.getChildren(childs));
  }
}
