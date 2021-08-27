import { useContext, useState, createContext, useEffect } from "react";
import Element from "../models/element";
import { deviceType } from "../pages/Editor";

export const EditorContext = createContext<any>(null);
export const useEditor = () => {
  return useContext(EditorContext);
};

const EditorProvider = (props: { children: JSX.Element }) => {
  const [showLeftPanel, setShowLeftPanel] = useState(true);
  const [showRightPanel, setShowRightPanel] = useState(true);
  const [deviceSize, setDeviceSize] = useState<deviceType>("desktop");
  const [selectedElement, setSelectedElement] = useState<string | null>(null);
  const [elements, setElements] = useState<Element[]>([]);

  const addElement = (element: Element) => {
    if (selectedElement) {
      elements.map((elem) => {
        if (elem.uid === selectedElement) {
          if (elem.canHaveChildren) {
            element.parentId = selectedElement;
            setSelectedElement(element.uid);
            setElements([...elements, element]);
          } else {
            element.parentId = elem.parentId;
            setSelectedElement(element.uid);
            setElements([...elements, element]);
          }
        }
      });
    } else {
      element.parentId = null;
      setSelectedElement(element.uid);
      setElements([...elements, element]);
    }
  };

  const value = {
    elements,
    setElements,
    showLeftPanel,
    setShowLeftPanel,
    showRightPanel,
    setShowRightPanel,
    deviceSize,
    setDeviceSize,
    selectedElement,
    setSelectedElement,
    addElement,
  };

  return (
    <EditorContext.Provider value={value}>
      {props.children}
    </EditorContext.Provider>
  );
};

export default EditorProvider;
