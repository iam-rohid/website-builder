import Element from "./element";

export default class Group extends Element {
  constructor() {
    super("div", "Group");
    this.display = "block";
  }
}
