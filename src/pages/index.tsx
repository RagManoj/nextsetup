import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Store } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import store from "@/redux/store";
import { ConfigProvider, Divider, MenuProps } from "antd";
import IrmButton from "@/component/IrmButton.Component";
import { IconArrowLeft } from "@tabler/icons-react";
import IrmCheckBox, { CheckboxData } from "@/component/IrmCheckBox.Component";
import { useEffect, useState } from "react";
import IrmRadio, { RadioProps } from "@/component/IrmRadio.Component";
import IrmToggle from "@/component/IrmToggle.Component";
import IrmTextEditor from "@/component/IrmTextEditor.Component";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import IrmNavigation from "@/component/IrmNavigation.Component";


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


  const menuData = [
    { label: "Option 1", key: "1", path: '/option1', icon:'/Templete.svg' },
    { label: "Option 2", key: "2", path: '/option2', icon: <DesktopOutlined /> },
    { label: "User", key: "sub1", path: '/', icon: <UserOutlined />, children: [
      { label: "Tom", key: "3",icon: <UserOutlined />, path: '/user/tom' },
      { label: "Bill", key: "4", path: '/user/bill' },
      { label: "Alex", key: "5", path: '/user/alex', children: [
        { label: "Sub-Alex 1", key: "10", path: '/user/alex/sub1' },
        { label: "Sub-Alex 2", key: "11", path: '/user/alex/sub2' }
      ]}
    ]},
    { label: "Team", key: "sub2", path: '/', icon: <TeamOutlined />, children: [
      { label: "Team 1", key: "6", path: '/team1' ,icon:'/Templete.svg' },
      { label: "Team 2", key: "8", path: '/team2' }
    ]},
    { label: "Files", key: "9", path: '/files', icon: <FileOutlined /> },
    { label: "hemanth", key: "12", path: '/option2', icon:'/Templete.svg' },

  ];

  return (
    <Provider store={store}>

      <IrmNavigation theme="light" items={menuData}/>
    </Provider>
  );
}
