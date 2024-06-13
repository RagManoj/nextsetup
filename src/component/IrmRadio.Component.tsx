import { ConfigProvider, Radio, RadioChangeEvent, Space } from "antd";
import React, { useState, useEffect, useMemo } from "react";
import { getColor, getFontSize, libraryDirection, librarySizes, libraryVariant } from "./library.model";

export interface RadioProps {
  id: string;
  label: string;
  checked?: boolean;
  disabled?: boolean;
}

export interface RadioPropInterface extends libraryVariant,librarySizes ,libraryDirection {
  radioButtons: RadioProps[];
  onChange(updatedRadioButtons: RadioProps[]): void;
}

const IrmRadio = (props: RadioPropInterface) => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    props.radioButtons.find((radio) => radio.checked)?.id
  );

  useEffect(() => {
    setSelectedValue(props.radioButtons.find((radio) => radio.checked)?.id);
  }, [props.radioButtons]);

  const onChange = (e: RadioChangeEvent) => {
    const newValue = e.target.value;
    setSelectedValue(newValue);

    const updatedRadioButtons = props.radioButtons.map((radio) => ({
      ...radio,
      checked: radio.id === newValue,
    }));

    props.onChange(updatedRadioButtons);
  };

  const radioGroupValue = useMemo(() => selectedValue, [selectedValue]);
 const size = getFontSize()
  return (
    <ConfigProvider
      theme={{
        components: {
          Radio: {
            radioSize: size,
            fontSize: size,
            lineWidth: 2,
            dotSize: size/2,
            colorPrimary: getColor(props.variant),
          },
        },
      }}
    >
      <Radio.Group onChange={onChange} value={radioGroupValue}>
        <Space direction={props.direction}>
          {props.radioButtons.map((radio) => (
            <Radio key={radio.id} value={radio.id} disabled={radio.disabled}>
              {radio.label}
            </Radio>
          ))}
        </Space>
      </Radio.Group>
    </ConfigProvider>
  );
};

export default IrmRadio;
