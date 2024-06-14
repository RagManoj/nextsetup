import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Store } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import store from "@/redux/store";
import { ConfigProvider } from "antd";
import IrmButton from "@/component/IrmButton.Component";
import { IconArrowLeft } from "@tabler/icons-react";
import IrmCheckBox, { CheckboxData } from "@/component/IrmCheckBox.Component";
import { useEffect, useState } from "react";
import IrmRadio, { RadioProps } from "@/component/IrmRadio.Component";
import IrmToggle from "@/component/IrmToggle.Component";
import IrmTextEditor from "@/component/IrmTextEditor.Component";

export default function Home() {
  const initialCheckboxes: CheckboxData[] = [
    { id: "checkbox1", label: "Checkbox 1", checked: false },
    {
      id: "checkbox2",
      label: "Checkbox 2",
      checked: true,
    },
    {
      id: "checkbox3",
      label: "Checkbox 3",
      checked: false,
    },
  ];

  const radioButtons: RadioProps[] = [
    { id: "1", label: "Option A" },
    { id: "2", label: "Option B" },
    { id: "3", label: "Option C", disabled: true },
  ];

  const [checkboxes, setCheckboxes] = useState(initialCheckboxes);
  const [radiobuttons, setRadioButtons] = useState(radioButtons);
  const [editorContent, setEditorContent] = useState("");

  const handleSave = (content: string) => {
    // Handle saving the content, e.g., send it to a server or update state
    setEditorContent(content);
    console.log("Saved content:", content);
  };

  const handleCancel = () => {
    // Handle cancel action, e.g., reset the editor content
    setEditorContent("");
    console.log("Cancelled editing");
  };

  const handleCheckboxesChange = (updatedCheckboxes: CheckboxData[]) => {
    setCheckboxes(updatedCheckboxes);
  };
  const handleRadioButtons = (e: any) => {
    console.log(e);
  };
  const handleClick = () => {
    console.log("clicked");
  };

  const toggle = (t: any) => {
    console.log(t);
  };

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <IrmButton
                  type="default"
                  children="Hello"
                  click={handleClick}
                  size="large"
                  icon={<IconArrowLeft />}
                  iconPosition="end"
                />
                <h1></h1>
                <IrmButton
                  type="primary"
                  children="Hello"
                  click={handleClick}
                  size="middle"
                  icon={<IconArrowLeft />}
                  iconPosition="start"
                />
                <h1></h1>
                <IrmButton
                  type="default"
                  variant="danger"
                  children="Hello"
                  click={handleClick}
                  size="small"
                  icon={<IconArrowLeft />}
                  iconPosition="end"
                />
                <h1></h1>
                <IrmButton
                  type="default"
                  variant="secondary"
                  children="Hello"
                  click={handleClick}
                  size="large"
                  icon={<IconArrowLeft />}
                  iconPosition="start"
                />
                <h1></h1>
                <IrmButton
                  type="default"
                  variant="success"
                  children="Hello"
                  click={handleClick}
                  size="middle"
                  icon={<IconArrowLeft />}
                  iconPosition="end"
                />
                <h1></h1>
                <IrmButton
                  type="default"
                  variant="warning"
                  children="Hello"
                  click={handleClick}
                  size="small"
                  icon={<IconArrowLeft />}
                  iconPosition="start"
                />
                <div>
                  <IrmCheckBox
                    checkboxes={checkboxes}
                    onChange={handleCheckboxesChange}
                    variant="danger"
                  />
                </div>
                <div>
                  <IrmCheckBox
                    checkboxes={checkboxes}
                    onChange={handleCheckboxesChange}
                    variant="primary"
                    size="medium"
                    direction="vertical"
                  />
                </div>
                <div>
                  <div>
                    <IrmToggle
                      label="Hello"
                      variant="danger"
                      size="large"
                      lablePosition="right"
                      onChange={toggle}
                    />
                  </div>
                  <div>
                    <IrmToggle
                      label="World"
                      variant="primary"
                      size="default"
                      lablePosition="left"
                      onChange={toggle}
                    />
                  </div>
                </div>
                <div>
                  <IrmRadio
                    onChange={handleRadioButtons}
                    direction="vertical"
                    radioButtons={radiobuttons}
                    variant="danger"
                  />
                </div>
                <div>
                  <IrmRadio
                    onChange={handleRadioButtons}
                    direction="horizontal"
                    radioButtons={radiobuttons}
                  />
                </div>
                <div>
                  <IrmTextEditor
                    placeholder="Enter text here..."
                    height="400px"
                    theme="light" 
                    onSave={handleSave}
                    onCancel={handleCancel}
                  />
                </div>
                <div>
                  <IrmTextEditor
                    placeholder="Enter text here..."
                    height="400px"
                    theme="dark"
                    onSave={handleSave}
                    onCancel={handleCancel}
                  />
                </div>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
