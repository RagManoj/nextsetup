import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Store } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import store from "@/redux/store";
import { ConfigProvider } from "antd";

import theme from './theme/theme.config'

export default function Home() {

  return (
      <Provider store={store}>
        <ConfigProvider theme={theme}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<><h1>Welcome!</h1></>
              }/>
            </Routes>
          </BrowserRouter>
        </ConfigProvider>
      </Provider>
  );
}
