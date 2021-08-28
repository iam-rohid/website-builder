export interface BaseComponent {
  id: string;
  parentId: string | false;
  name: string;
  tag: string;
  elementId?: string;
  elementClasses?: string[];
  expanded?: boolean;
  backgorundColor?: string;
  width?: string;
  minWidth?: string;
  maxWidth?: string;
  height?: string;
  minHeight?: string;
  maxHeight?: string;
  padding?: string;
  marging?: string;
}
