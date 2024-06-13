import { Checkbox, ConfigProvider, Space } from "antd";
import React, { useState, useEffect } from "react";
import { generate } from "@ant-design/colors";
import { getColor, getFontSize, libraryDirection, librarySizes, libraryVariant } from "./library.model";

export interface CheckboxData {
  id: string;
  label: string;
  checked?: boolean;
  disabled?: boolean;
}

export interface CustomCheckboxProps extends libraryVariant,librarySizes,libraryDirection {
  checkboxes: CheckboxData[];
  onChange(updatedCheckboxes: CheckboxData[]): void;
}

const CustomCheckbox = (props: CustomCheckboxProps) => {
  const [checkboxes, setCheckboxes] = useState(props.checkboxes);

  useEffect(() => {
    setCheckboxes(props.checkboxes);
  }, [props.checkboxes]);

  const handleCheckboxChange = (id: string, checked: boolean) => {
    const updatedCheckboxes = checkboxes.map((checkbox) =>
      checkbox.id === id ? { ...checkbox, checked } : checkbox
    );
    setCheckboxes(updatedCheckboxes);
    props.onChange(updatedCheckboxes);
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Checkbox: {
            colorPrimaryBgHover: getColor(props.variant),
            colorPrimaryHover: getColor(props.variant),
            controlInteractiveSize: getFontSize(props.size),
            colorPrimary: getColor(props.variant),
            fontSize: getFontSize(props.size),
            borderRadiusSM: 2,
          },
        },
      }}
    >
      <Space direction={props.direction?props.direction:'horizontal'}>
        {checkboxes.map((checkbox) => (
          <Checkbox
            key={checkbox.id}
            checked={checkbox.checked}
            onChange={(e) =>
              handleCheckboxChange(checkbox.id, e.target.checked)
            }
            disabled={checkbox.disabled}
          >
            {checkbox.label}
          </Checkbox>
        ))}
      </Space>
    </ConfigProvider>
  );
};

export default CustomCheckbox;
