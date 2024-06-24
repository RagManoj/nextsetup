import { ConfigProvider, Menu, MenuProps } from "antd";
import { Layout } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { LayoutTheme } from "@/component/library.model";
import { layoutOptions } from "./LayoutConfig";
import { Image } from "antd";
import Icon from '@ant-design/icons';
import LayoutIcon from "@/component/icons/LayoutIcon";
const { Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

const getPagesAndModuleDetails = (
  label: React.ReactNode,
  key: React.Key,
  path: string,
  icon?: string,
  children?: MenuItem[]
): MenuItem => ({
  key,
  icon: typeof icon === 'string' ? <span role="img" className="anticon anticon-desktop ant-menu-item-icon"> <LayoutIcon iconName="icon1" /> </span>  : icon
    ,
  
  children,
  label: <Link to={path}>{label}</Link>,
});

const generateMenuItems = (data: any[]): MenuItem[] => {
  return data.map((item) => {
    if (item.children) {
      return getPagesAndModuleDetails(
        item.label,
        item.key,
        item.path,
        item.icon,
        generateMenuItems(item.children)
      );
    }
    return getPagesAndModuleDetails(item.label, item.key, item.path, item.icon);
  });
};

export interface LayoutSideNavProps extends LayoutTheme {
  menuItems: any[];
  sideNavChange: (collapsed: boolean) => void;
}

const LayoutSideNav = (props: LayoutSideNavProps) => {
  const { menuItems, sideNavChange, theme } = props;

  const items: MenuItem[] = generateMenuItems(menuItems);

  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    const newCollapsed = !collapsed;
    setCollapsed(newCollapsed);
    sideNavChange(newCollapsed);
  };

  return (
    <Sider
      theme={theme}
      collapsible
      collapsed={collapsed}
      onCollapse={toggleCollapse}
      width={layoutOptions.sideNavOpen}
      collapsedWidth={layoutOptions.sideNavClosed}
      trigger={null}
      style={{
        position: "fixed",
        height: "100vh",
        transition: "width 0.2s",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: layoutOptions.topHeaderHeight,
          borderBottom: layoutOptions.headerborder,
        //   padding: "0 16px",
        }}
      >
        {!collapsed && (
          <div style={{ textAlign: "center", marginLeft: "20px" }}>
            <img
              src={"/irmlogo.svg"}
              width={80} // Adjust logo size based on collapsed state
              height={50} // Adjust logo size based on collapsed state
              alt="Client Photo"
            />
          </div>
        )}
        <div
          onClick={toggleCollapse}
          style={{
            padding: collapsed ? "0" :"10px",
            cursor: "pointer",
            position: "relative",
            margin: collapsed ? "0 auto" : "0", // Center align when collapsed
          }}
        >
          {collapsed ? (
            <img src="/slider_open.svg" alt="Expand" width={40} height={40} />
          ) : (
            <img
              src="/slider_close.svg"
              alt="Collapse"
              width={32}
              height={32}
            />
          )}
        </div>
      </div>
      <Menu
        theme={theme}
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={items}
        inlineCollapsed={collapsed}
      />
    </Sider>
  );
};

export default LayoutSideNav;
