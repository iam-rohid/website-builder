import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { backgroundColors } from "../../../data/colors";
import {
  heightClassList,
  maxHeightClassList,
  maxWidthClassList,
  minHeightClassList,
  minWidthClassList,
  widthClassList,
} from "../../../data/sizes";
import { componentActionCreators } from "../../../store";
import { ComponentType } from "../../../types";

const CommonProps = (props: { component: ComponentType }) => {
  const { component } = props;

  const dispatch = useDispatch();
  const { UpdateComponent } = bindActionCreators(
    componentActionCreators,
    dispatch
  );
  return (
    <div>
      <div>
        Width
        <select
          value={component.width || ""}
          onChange={(e) => {
            console.log(e);
            UpdateComponent({
              element: {
                ...component,
                width: e.target.value,
              },
            });
          }}
        >
          <option value="">Default</option>
          {widthClassList.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        Min Width
        <select
          value={component.minWidth || ""}
          onChange={(e) => {
            console.log(e);
            UpdateComponent({
              element: {
                ...component,
                minWidth: e.target.value,
              },
            });
          }}
        >
          <option value="">Default</option>
          {minWidthClassList.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div>
        Max Width
        <select
          value={component.maxWidth || ""}
          onChange={(e) => {
            console.log(e);
            UpdateComponent({
              element: {
                ...component,
                maxWidth: e.target.value,
              },
            });
          }}
        >
          <option value="">Default</option>
          {maxWidthClassList.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        Height
        <select
          value={component.height || ""}
          onChange={(e) => {
            console.log(e);
            UpdateComponent({
              element: {
                ...component,
                height: e.target.value,
              },
            });
          }}
        >
          <option value="">Default</option>
          {heightClassList.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        Min Height
        <select
          value={component.minHeight || ""}
          onChange={(e) => {
            console.log(e);
            UpdateComponent({
              element: {
                ...component,
                minHeight: e.target.value,
              },
            });
          }}
        >
          <option value="">Default</option>
          {minHeightClassList.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div>
        Max Height
        <select
          value={component.maxHeight || ""}
          onChange={(e) => {
            console.log(e);
            UpdateComponent({
              element: {
                ...component,
                maxHeight: e.target.value,
              },
            });
          }}
        >
          <option value="">Default</option>
          {maxHeightClassList.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        Background Color
        <select
          value={component.backgorundColor || "bg-transparent"}
          onChange={(e) => {
            console.log(e);
            UpdateComponent({
              element: {
                ...component,
                backgorundColor: e.target.value,
              },
            });
          }}
        >
          {backgroundColors.map((option, i) => (
            <option value={option[0]} key={i}>
              {option[0]}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CommonProps;
