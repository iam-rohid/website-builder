import { useContext, useState, createContext, useEffect } from "react";
import Element from "../models/element";
import { deviceType } from "../pages/Editor";

export const EditorContext = createContext<any>(null);
export const useEditor = () => {
  return useContext(EditorContext);
};

const EditorProvider = (props: { children: JSX.Element }) => {
  const [showLeftPanel, setShowLeftPanel] = useState(true);
  const [showRightPanel, setShowRightPanel] = useState(false);
  const [deviceSize, setDS] = useState<deviceType>("desktop");
  const [selectedElementID, setSelectedElementID] = useState<string | null>(
    null
  );
  const [elements, setElements] = useState<Element[]>([]);
  const [darkMode, setDM] = useState(false);

  const setDeviceSize = (value: deviceType) => {
    setDS(value);
    localStorage.deviceSize = value;
  };

  const setDarkMode = (value: boolean) => {
    if (value) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setDM(true);
    } else {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
      setDM(false);
    }
  };

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
    if ("deviceSize" in localStorage) {
      setDeviceSize(localStorage.deviceSize);
    }
    return () => {};
  }, []);

  const addElement = (element: Element) => {
    if (selectedElementID) {
      elements.map((elem) => {
        if (elem.uid === selectedElementID) {
          if (elem.canHaveChildren) {
            element.parentId = selectedElementID;
            setSelectedElementID(element.uid);
            setElements([...elements, element]);
          } else {
            element.parentId = elem.parentId;
            setSelectedElementID(element.uid);
            setElements([...elements, element]);
          }
        }
      });
    } else {
      element.parentId = null;
      setSelectedElementID(element.uid);
      setElements([...elements, element]);
    }
  };

  const addClassToSelectedElement = (className: string) => {
    if (selectedElementID) {
      setElements(
        elements.map((elem) => {
          if (elem.uid === selectedElementID) {
            elem.classes.push(className);
          }
          return elem;
        })
      );
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
    selectedElementID,
    setSelectedElementID,
    addElement,
    addClassToSelectedElement,
    darkMode,
    setDarkMode,
  };

  return (
    <EditorContext.Provider value={value}>
      {props.children}
    </EditorContext.Provider>
  );
};

export default EditorProvider;
