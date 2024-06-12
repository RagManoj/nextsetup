import { Checkbox, ConfigProvider } from "antd";
import React from "react";
import { generate } from "@ant-design/colors";

export interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange(checked: boolean): void;
  variant?: "primary"  | "secondary"  | "danger" | "warning" | "success";
  size?: "default" | "small" | "medium" | "large";
  disabled?: boolean;
}

const CustomCheckbox = (props: CheckboxProps) => {
  let checkboxColor: string;
  let checkboxSize: number;

  const getCheckboxColor = (variant?:CheckboxProps['variant']) => {
    switch (variant) {
      case "danger":
        return generate("#FF5733")[5];
      case "secondary":
        return generate("lightblue")[5];
      case "warning":
        return generate("orange")[5];
      case "success":
        return generate("green")[5];
      case "primary":
        return generate("blue")[5];
      default:
        return generate("#000000")[5];
    }
  };
  const getSize = (size: CheckboxProps["size"] = "default"): number => {
    let sizes = {
      default: 20,
      small: 10,
      medium: 25,
      large: 25,
    };
    return sizes[size];
  };
  checkboxColor = getCheckboxColor(props.variant);

  return (
    <ConfigProvider
      theme={{
        components: {
          Checkbox: {
            colorPrimaryBgHover: checkboxColor,
            colorPrimaryHover: checkboxColor,
            controlInteractiveSize: getSize(props.size),
            colorPrimary: checkboxColor,
            fontSize: getSize(props.size),
            // colorWhite:checkboxColor,
            // lineWidth:2
          },
        },
      }}
    >
      <Checkbox
        checked={props.checked}
        onChange={(e) => props.onChange(e.target.checked)}
        disabled={props.disabled}
      >
        {props.label}
      </Checkbox>
    </ConfigProvider>
  );
};

export default CustomCheckbox;
