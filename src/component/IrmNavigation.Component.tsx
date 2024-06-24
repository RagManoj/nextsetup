import React, { useState } from "react";
import { Breadcrumb, ConfigProvider, Layout, Menu, MenuProps, theme } from "antd";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import LayoutSideNav from "./routes/layout/LayoutSideNav";
import LayoutHeader from "./routes/layout/LayoutHeader";
import LayoutFooter from "./routes/layout/LayoutFooter";
import LayoutContext from "./routes/layout/LayoutContext";
import { LayoutTheme } from "./library.model";
const { Header, Content, Footer, Sider } = Layout;
import { layoutOptions } from "./routes/layout/LayoutConfig";

export interface NavigationProps extends LayoutTheme {
  items: any;
}

const IrmNavigation = (props: NavigationProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleSideNavChange = (collapsed: boolean) => {
    setCollapsed(collapsed);
  };

  return (
    
    <ConfigProvider
    theme={{
      components: {
        Layout: {
          headerHeight:70,
          headerColor:'red',
          lightTriggerBg:'red',
          headerBg:'white',
          bodyBg:'rgba(206, 212, 218, 1)'
        },
        Menu:{
            fontSize:18,
            iconSize:30,
            collapsedIconSize:40,
            iconMarginInlineEnd:30,
            itemHeight:60,
            itemSelectedBg:'rgba(232, 241, 252, 1)',
            itemPaddingInline:0
        }
      },
    }}
  >

    <Router>
      <Layout style={{ minHeight: layoutOptions.minHeight }}>
      
        <LayoutSideNav   menuItems={props.items} theme={props.theme}  sideNavChange={handleSideNavChange}/>

        <Layout
          style={{
            marginLeft: collapsed
              ? layoutOptions.sideNavClosed
              : layoutOptions.sideNavOpen,
          }}
        >
          <Header
            style={{
            //   height: layoutOptions.topHeaderHeight,
              position: "fixed",
              width: `calc(100% - ${
                collapsed
                  ? layoutOptions.sideNavClosed
                  : layoutOptions.sideNavOpen
              }px)`,
              left: collapsed
                ? layoutOptions.sideNavClosed
                : layoutOptions.sideNavOpen,
              zIndex: layoutOptions.headerzIndex,
              borderBottom: layoutOptions.headerborder,
            }}
          >
            <LayoutHeader />
          </Header>
          <Content
            style={{
              marginTop: layoutOptions.topHeaderHeight,
              height: layoutOptions.minHeight,
              overflow: "initial",
            }}
          >
            <div
              style={{
                padding: 24,
                minHeight: "100vh",
                // background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              {/* <NavigationRouter /> */}
              <LayoutContext />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            <LayoutFooter />
          </Footer>
        </Layout>
      </Layout>
    </Router>
    </ConfigProvider>

  );
};

export default IrmNavigation;
