import { ConfigProvider, Space, Switch } from "antd";
import React, { useState, useEffect } from "react";
import { getColor, getFontSize, librarySizes, libraryVariant } from "./library.model";

export interface IrmToggleProps extends libraryVariant,librarySizes {
  label?: string; 
  checked?: boolean;
  disabled?: boolean;
  checkedIcon?: React.ReactNode;
  uncheckedIcons?: React.ReactNode;
  lablePosition?: "left" | "right";
  onChange(updatedSwitches: { label: string; checked: boolean }): void;
}

const IrmToggle: React.FC<IrmToggleProps> = ({
  label = "",
  checked = false,
  disabled = false,
  checkedIcon,
  uncheckedIcons,
  variant,
  lablePosition = "left",
  size,
  onChange,
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = (checked: boolean) => {
    setIsChecked(checked);
    onChange({
      label,
      checked,
    });
  };

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);
 let color = getColor(variant)
  return (
    <ConfigProvider
      theme={{
        components: {
          Switch: {
            colorPrimaryBgHover: color,
            colorPrimaryHover: color,
            colorPrimary: color,
            fontSize: getFontSize(size)-5,
          },
        },
      }}
    >
      <Space>
        {lablePosition == "left" && (
          <label style={{ fontSize: `${getFontSize(size)}px` }} htmlFor={label}>
            {label}
          </label>
        )}
        <Switch
          id={label}
          checkedChildren={checkedIcon}
          unCheckedChildren={uncheckedIcons}
          checked={isChecked}
          disabled={disabled}
          onChange={handleChange}
        />
       {lablePosition == "right" && (
          <label style={{ fontSize: `${getFontSize(size)}px` }} htmlFor={label}>
            {label}
          </label>
        )}
      </Space>
    </ConfigProvider>
  );
};

export default IrmToggle;
